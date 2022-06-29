//import { useAuthContext } from '../Context/AuthContext';

const Layout = () => {
  //const { setIsAuth } = useAuthContext();

  return (
    <div className='flex flex-row flex-wrap w-screen h-screen overflow-auto'>
      <div className='flex w-max p-3'>left with some text</div>
      <div className='flex flex-grow-1 bg-yellow-500 text-white p-3'>right</div>
    </div>
  );
};

export default Layout;
