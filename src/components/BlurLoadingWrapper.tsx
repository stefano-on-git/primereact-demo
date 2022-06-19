import { PropsWithChildren } from 'react';
import { useFecthContext } from './Context/FetchContext';

export default function BlurLoadingWrapper({ children }: PropsWithChildren) {
  const { count } = useFecthContext();

  return (
    <div
      style={{
        transitionProperty: 'filter',
        transitionDuration: '0.35s',
        filter: count > 0 ? 'blur(2px)' : 'blur(0px)',
      }}
    >
      {children}
    </div>
  );
}
