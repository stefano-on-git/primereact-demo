import { useState } from 'react';
import logo from '~/logo.svg';
import useFetch from '../Hooks/UseFetch';

const Hello = () => {
  const [fetchUrl, setFetchUrl] = useState<string>('');
  const [fetchUrl2, setFetchUrl2] = useState<string>('');
  const user = useFetch<{ nome: string; cognome: string }>(fetchUrl);
  const user2 = useFetch<{ nome: string; cognome: string }>(fetchUrl2);

  return (
    <div className='flex flex-column align-items-center h-screen justify-content-center'>
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
      <button
        onClick={() => {
          setFetchUrl(`json/user.json?${+new Date()}`);
          setFetchUrl2(`json/user2.json?${+new Date()}`);
        }}
      >
        Fetch data
      </button>
      {user.data && (
        <div>
          {user.data.nome} {user.data.cognome}
        </div>
      )}
      {user2.data && (
        <div>
          {user2.data.nome} {user2.data.cognome}
        </div>
      )}
    </div>
  );
};

export default Hello;
