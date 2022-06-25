import { PropsWithChildren } from 'react';
import { useFetchContext } from '../Context/FetchContext';

export default function BlurLoadingWrapper({ children }: PropsWithChildren) {
  const { count } = useFetchContext();

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
