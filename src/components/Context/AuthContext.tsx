import { createContext, PropsWithChildren, useContext, useState } from 'react';
import Login from '../Login/Login';

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

  return (
    <AuthContext.Provider
      value={{ username: username, setUsername: setUsername, isAuth: isAuth, setIsAuth: setIsAuth }}
    >
      {!isAuth && <Login setIsAuth={setIsAuth} setUsername={setUsername} />}
      {isAuth && children}
    </AuthContext.Provider>
  );
}

export const useAuthContext = () => useContext(AuthContext);
