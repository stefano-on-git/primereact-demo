import { useFecthContext } from '../Context/FetchContext';
import { ProgressSpinner } from 'primereact/progressspinner';
import { useEffect, useRef } from 'react';

export default function Loading() {
  const { count } = useFecthContext();
  const spinnerContainer = useRef<HTMLDivElement>(null);

  useEffect(() => {
    document.onclick = document.onmousemove = (ev) => {
      if (spinnerContainer.current) {
        spinnerContainer.current.style.top = `${ev.clientY - 20}px`;
        spinnerContainer.current.style.left = `${ev.clientX - 20}px`;
      }
    };
  }, []);

  return (
    <div style={{ display: count > 0 ? 'block' : 'none' }}>
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
      <div
        ref={spinnerContainer}
        style={{
          boxShadow: '0 0 20px #ffffff66',
          backgroundColor: '#00000055',
          borderRadius: '50%',
          border: '1px solid #000',
          width: '42px',
          height: '42px',
          position: 'fixed',
          zIndex: 6001,
          top: 0,
          left: 0,
        }}
      >
        <ProgressSpinner
          style={{
            width: '40px',
            height: '40px',
          }}
          strokeWidth='8'
          fill='#00000055'
          animationDuration='1s'
        />
      </div>
    </div>
  );
}
