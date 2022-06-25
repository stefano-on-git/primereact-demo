import { createContext, PropsWithChildren, useContext, useEffect, useState } from 'react';
import { Button } from 'primereact/button';

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

  useEffect(() => {
    setIsAuth(username !== '');
  }, [username]);

  return (
    <AuthContext.Provider
      value={{ username: username, setUsername: setUsername, isAuth: isAuth, setIsAuth: setIsAuth }}
    >
      {!isAuth && (
        <div className='m-3 inline-flex align-items-center justify-content-center'>
          Non sei autenticato,
          <Button onClick={() => setUsername('stefano')} label='Login' className='m-2' />
        </div>
      )}
      {isAuth && children}
    </AuthContext.Provider>
  );
}

export const useAuthContext = () => useContext(AuthContext);
