import { useState } from 'react';
import { useFecthContext } from './Context/FetchContext';

export default function TestFetch() {
  const { setCount } = useFecthContext();
  const loadUser = () => {
    setDisabled(true);
    setCount!((c) => ++c);
    setTimeout(() => {
      setCount!((c) => --c);
      setDisabled(false);
    }, 8000);
  };
  const [disabled, setDisabled] = useState<boolean>(false);
  return (
    <button style={{ margin: 10 }} onClick={loadUser} disabled={disabled}>
      Fetch user
    </button>
  );
}
