import { useFecthContext } from './Context/FetchContext';
import { ProgressSpinner } from 'primereact/progressspinner';
import { useEffect, useState } from 'react';

export default function Loading() {
  const { count } = useFecthContext();
  const [mouseX, setMouseX] = useState(0);
  const [mouseY, setMouseY] = useState(0);

  useEffect(() => {
    document.onmousemove = (ev) => {
      setMouseX(ev.clientX);
      setMouseY(ev.clientY);
    };
  }, []);

  return (
    (count > 0 && (
      <>
        <div
          style={{
            position: 'fixed',
            top: 0,
            bottom: 0,
            left: 0,
            right: 0,
            backgroundColor: '#00000000',
            zIndex: 6000,
          }}
        ></div>
        <ProgressSpinner
          style={{
            boxShadow: '0 0 5px #ffffff55',
            backgroundColor: '#00000099',
            borderRadius: '50%',
            width: '40px',
            height: '40px',
            position: 'fixed',
            top: mouseY - 20,
            left: mouseX - 20,
            zIndex: 6001,
          }}
          strokeWidth='8'
          fill='#00000099'
          animationDuration='1s'
        />
      </>
    )) ||
    null
  );
}
