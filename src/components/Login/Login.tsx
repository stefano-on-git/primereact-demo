import { useState, useEffect, useRef } from 'react';
//import useFetch from '../Hooks/UseFetch';
import { Button } from 'primereact/button';
import { Checkbox } from 'primereact/checkbox';
import { InputText } from 'primereact/inputtext';

interface iLogin {
  setUsername: React.Dispatch<React.SetStateAction<string>>;
  setIsAuth: React.Dispatch<React.SetStateAction<boolean>>;
}

const Loading = ({ setIsAuth, setUsername }: iLogin) => {
  const [checked, setChecked] = useState<boolean>(false);
  const inputEmail = useRef<InputText>(null);

  useEffect(() => {
    (inputEmail.current as unknown as HTMLInputElement).focus();
  }, []);

  return (
    <div className='grid grid-nogutter surface-0 text-800'>
      <div className='col-12 md:col-6 p-0 text-center md:text-left flex align-items-center'>
        <div className='flex align-items-center justify-content-center w-full h-screen'>
          <div className='surface-card p-6 shadow-4 hover:shadow-6 border-round w-9'>
            <div className='text-center mb-5'>
              <img src='images/logo.svg' alt='hyper' height={50} className='' />
              <div style={{ fontFamily: 'Cookie' }} className='text-2xl'>
                Come minimo!
              </div>
            </div>
            <div>
              <label htmlFor='email' className='block text-900 font-medium mb-2'>
                Email
              </label>
              <InputText
                id='email'
                autoComplete={(+new Date()).toString()}
                ref={inputEmail}
                type='text'
                className='w-full mb-3'
              />
              <label htmlFor='password' className='block text-900 font-medium mb-2'>
                Password
              </label>
              <InputText
                id='password'
                autoComplete={(+new Date()).toString()}
                type='password'
                className='w-full mb-3'
              />
              <div className='flex align-items-center justify-content-between mb-6'>
                <div className='flex align-items-center'>
                  <Checkbox
                    id='rememberme'
                    onChange={(e) => setChecked(e.checked)}
                    checked={checked}
                    className='mr-2'
                  />
                  <label htmlFor='rememberme'>Remember me</label>
                </div>
                <Button className='ml-3 p-0 py-2 p-button-link transition-all hover:text-white'>
                  Forgot your password?
                </Button>
              </div>
              <Button
                label='Sign In'
                onClick={() => {
                  setUsername('stefano.romani');
                  setIsAuth(true);
                }}
                icon='pi pi-user'
                className='w-full'
              />
            </div>
            <div className='flex justify-content-end align-items-center'>
              <span className='text-600 font-medium line-height-3 align-center'>
                Don&apos;t have an account?
              </span>
              <Button className='ml-3 p-0 py-2 p-button-link transition-all hover:text-white'>
                Create today!
              </Button>
            </div>
          </div>
        </div>
      </div>
      <div className='col-12 md:col-6 m-0 p-0 overflow-hidden max-h-screen'>
        <img
          src='images/condominio.jpg'
          alt='hero-1'
          className='h-screen w-auto m-0 p-0'
          style={{
            borderLeft: '4px solid #ffcc0055',
            clipPath: 'polygon(8% 0, 100% 0%, 100% 100%, 0 100%)',
          }}
        />
      </div>
    </div>
  );
};

export default Loading;
