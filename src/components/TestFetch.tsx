import { useState } from 'react';
import { useFecthContext } from './Context/FetchContext';

export default function TestFetch() {
  function getRandomIntInclusive(min: number, max: number) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive
  }

  const { count, setCount } = useFecthContext();
  const loadUser = () => {
    setDisabled(true);
    setTimeout(() => {
      if (count >= 0) {
        setCount!((c) => ++c);
      } else {
        setCount!(0);
      }
    }, 500);
    setTimeout(() => {
      setCount!((c) => --c);
      setDisabled(false);
    }, getRandomIntInclusive(1000, 10000));
  };
  const [disabled, setDisabled] = useState<boolean>(false);
  return (
    <button style={{ margin: 10 }} onClick={loadUser} disabled={disabled}>
      Fetch user
    </button>
  );
}
