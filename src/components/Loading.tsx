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
      <ProgressSpinner
        style={{
          boxShadow: '0 0 15px #00000033',
          borderRadius: '50%',
          width: '60px',
          height: '60px',
          position: 'fixed',
          top: mouseY,
          left: mouseX,
        }}
        strokeWidth='8'
        fill='transparent'
        animationDuration='.5s'
      />
    )) ||
    null
  );
}
