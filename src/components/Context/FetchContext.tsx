import { createContext, PropsWithChildren, useContext, useState } from 'react';

interface iFetchCtx {
  count: number;
  setCount?: React.Dispatch<React.SetStateAction<number>>;
}
export const FetchContext = createContext<iFetchCtx>({ count: 0 });

export default function FetchProvider({ children }: PropsWithChildren) {
  const [count, setCount] = useState<number>(0);

  return (
    <FetchContext.Provider value={{ count: count, setCount: setCount }}>
      {children}
    </FetchContext.Provider>
  );
}

export const useFetchContext = () => useContext(FetchContext);
