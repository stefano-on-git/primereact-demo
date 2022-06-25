import { createContext, PropsWithChildren, useContext, useEffect, useRef, useState } from 'react';
import { Button } from 'primereact/button';
import { Checkbox } from 'primereact/checkbox';
import { InputText } from 'primereact/inputtext';

interface iAuthCtx {
  username: string;
  setUsername?: React.Dispatch<React.SetStateAction<string>>;
  isAuth: boolean;
  setIsAuth?: React.Dispatch<React.SetStateAction<boolean>>;
}
export const AuthContext = createContext<iAuthCtx>({ username: '', isAuth: false });

export default function AuthProvider({ children }: PropsWithChildren) {
  const [username, setUsername] = useState<string>('');
  const [isAuth, setIsAuth] = useState<boolean>(false);
  const [checked, setChecked] = useState<boolean>(false);

  const inputEmail = useRef<InputText>(null);

  useEffect(() => {
    (inputEmail.current as unknown as HTMLInputElement).focus();
  }, []);

  useEffect(() => {
    setIsAuth(username !== '');
  }, [username]);

  useEffect(() => {
    !isAuth && setUsername('');
  }, [isAuth]);

  return (
    <AuthContext.Provider
      value={{ username: username, setUsername: setUsername, isAuth: isAuth, setIsAuth: setIsAuth }}
    >
      {!isAuth && (
        <div className='grid grid-nogutter surface-0 text-800'>
          <div className='col-12 md:col-6 p-0 text-center md:text-left flex align-items-center'>
            <div className='flex align-items-center justify-content-center w-full h-screen'>
              <div className='surface-card p-6 shadow-2 hover:shadow-4 border-round w-9'>
                <div className='text-center mb-5'>
                  <img src='images/hyper.svg' alt='hyper' height={50} className='mb-3' />
                  <div className='text-900 text-3xl font-medium mb-3'>Welcome Back</div>
                  <div className='flex justify-content-end align-items-center'>
                    <span className='text-600 font-medium line-height-3 align-center'>
                      Don&apos;t have an account?
                    </span>
                    <Button className='ml-3'>Create today!</Button>
                  </div>
                </div>
                <div>
                  <label htmlFor='email' className='block text-900 font-medium mb-2'>
                    Email
                  </label>
                  <InputText id='email' ref={inputEmail} type='text' className='w-full mb-3' />

                  <label htmlFor='password' className='block text-900 font-medium mb-2'>
                    Password
                  </label>
                  <InputText id='password' type='password' className='w-full mb-3' />
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
                    <Button>Forgot your password?</Button>
                  </div>
                  <Button label='Sign In' icon='pi pi-user' className='w-full' />
                </div>
              </div>
            </div>
          </div>
          <div className='col-12 md:col-6 m-0 p-0 overflow-hidden max-h-screen'>
            <img
              src='images/condominio.jpg'
              alt='hero-1'
              className='h-screen w-auto m-0 p-0'
              style={{ clipPath: 'polygon(8% 0, 100% 0%, 100% 100%, 0 100%)' }}
            />
          </div>
        </div>
      )}
      {isAuth && children}
    </AuthContext.Provider>
  );
}

export const useAuthContext = () => useContext(AuthContext);
