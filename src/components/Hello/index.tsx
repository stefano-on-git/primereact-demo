import logo from '~/logo.svg';
import { useFecthContext } from '../Context/FetchContext';
import TestFetch from '../TestFetch';

const Hello = () => {
  const { count } = useFecthContext();

  return (
    <div
      style={{ filter: count > 0 ? 'blur(4px)' : 'initial' }}
      className='flex flex-column align-items-center h-screen justify-content-center'
    >
      <img src={logo} alt='Logo' style={{ height: '150px' }} />
      <ul className='flex flex-column gap-2 text-center text-2xl list-none p-0'>
        <li>🚀 Vite</li>
        <li>🔥 React</li>
        <li>📖 TypeScript</li>
        <li>🔨 Eslint</li>
        <li>💅 Prettier</li>
      </ul>
      <p>Don&apos;t forgot to install Eslint and Prettier in your VSCode!</p>
      <div>
        <a
          className='text-primary'
          target='_blank'
          href='https://github.com/igdev116/vite-react-ts-eslint-prettier'
          rel='noreferrer'
        >
          Github
        </a>
      </div>
      <TestFetch />
    </div>
  );
};

export default Hello;
