import { useFetchContext } from '../Context/FetchContext';
import { getRandomIntInclusive } from '../../Utilities';
import { useEffect, useReducer, useRef } from 'react';
import axios, { AxiosRequestConfig } from 'axios';

// State & hook output
export interface State<T> {
  status: 'init' | 'fetching' | 'error' | 'fetched';
  data?: T;
  error?: string;
}

interface Cache<T> {
  [url: string]: T;
}

// discriminated union type
type Action<T> =
  | { type: 'request' }
  | { type: 'success'; payload: T }
  | { type: 'failure'; payload: string };

function useFetch<T = unknown>(url?: string, options?: AxiosRequestConfig): State<T> {
  const { count, setCount } = useFetchContext();
  const cache = useRef<Cache<T>>({});
  const cancelRequest = useRef<boolean>(false);

  const initialState: State<T> = {
    status: 'init',
    error: undefined,
    data: undefined,
  };

  // Keep state logic separated
  const fetchReducer = (state: State<T>, action: Action<T>): State<T> => {
    switch (action.type) {
      case 'request':
        return { ...initialState, status: 'fetching' };
      case 'success':
        return {
          ...initialState,
          status: 'fetched',
          data: action.payload,
        };
      case 'failure':
        return {
          ...initialState,
          status: 'error',
          error: action.payload,
        };
      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(fetchReducer, initialState);

  useEffect(() => {
    if (!url || url === '') {
      return;
    }

    const fetchData = async () => {
      dispatch({ type: 'request' });

      if (cache.current[url]) {
        dispatch({ type: 'success', payload: cache.current[url] });
      } else {
        try {
          setTimeout(() => {
            if (count >= 0) {
              setCount!((c) => ++c);
            } else {
              setCount!(0);
            }
          }, 500);
          await new Promise((resolve) => setTimeout(resolve, getRandomIntInclusive(10, 5000)));
          const response = await axios(url, options);
          //cache.current[url] = response.data;

          if (cancelRequest.current) return;

          dispatch({ type: 'success', payload: response.data });
        } catch (error) {
          if (cancelRequest.current) return;

          dispatch({
            type: 'failure',
            payload: (error as Error).message,
          });
        } finally {
          setCount!((c) => --c);
        }
      }
    };

    fetchData();

    return () => {
      //cancelRequest.current = true;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [url]);

  return state;
}

export default useFetch;
