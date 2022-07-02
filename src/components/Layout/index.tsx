import { useAuthContext } from '../Context/AuthContext';

import { Menu } from 'primereact/menu';
import { useRef } from 'react';
import { Button } from 'primereact/button';

const Layout = () => {
  const items = [
    {
      label: 'Options',
      items: [
        {
          label: 'New',
          icon: 'pi pi-fw pi-plus',
          command: () => {
            window.location.hash = '/fileupload';
          },
        },
        { label: 'Delete', icon: 'pi pi-fw pi-trash', url: 'http://primetek.com.tr' },
      ],
    },
    {
      label: 'Account',
      items: [
        {
          label: 'Options',
          icon: 'pi pi-fw pi-cog',
          command: () => {
            window.location.hash = '/';
          },
        },
        {
          label: 'Sign Out',
          icon: 'pi pi-fw pi-power-off',
          command: () => {
            setIsAuth!(false);
          },
        },
      ],
    },
  ];

  const { setIsAuth } = useAuthContext();
  const menu = useRef<Menu>(null);

  return (
    <div className='flex flex-column overflow-hidden h-screen'>
      <div className='shadow-4 surface-card border-bottom-1 surface-border p-2'>
        <div className='flex justify-content-between flex-row align-items-center'>
          <div className='flex align-items-center'>
            <img
              src='images/octopus.svg'
              alt='hyper'
              height={32}
              style={{
                filter: 'drop-shadow(0 2px 1px #000)',
              }}
            />
            <div
              style={{
                fontFamily: 'Cookie',
                textShadow: '0 2px 1px #000',
              }}
              className='text-2xl ml-2'
            >
              Octopus Condominio
            </div>
          </div>
          <div className='flex flex-grow-1 justify-content-end'>
            <Button
              className='flex'
              label='Menu'
              icon='pi pi-bars'
              onClick={(event) => menu.current!.toggle(event)}
              aria-controls='popup_menu'
              aria-haspopup
            />
          </div>
          <div className='flex align-items-center'>
            <Menu model={items} popup ref={menu} />
          </div>
        </div>
      </div>
      <div className='flex flex-column flex-grow-1 overflow-hidden border-top-1 border-black-alpha-90'>
        <div className='m-1 p-5 overflow-auto flex-grow-1'>
          <p>page section content</p>
          <p>page section content</p>
          <p>page section content</p>
          <p>page section content</p>
          <p>page section content</p>
          <p>page section content</p>
          <p>page section content</p>
          <p>page section content</p>
          <p>page section content</p>
          <p>page section content</p>
          <p>page section content</p>
          <p>page section content</p>
          <p>page section content</p>
          <p>page section content</p>
          <p>page section content</p>
          <p>page section content</p>
          <p>page section content</p>
          <p>page section content</p>
          <p>page section content</p>
          <p>page section content</p>
          <p>page section content</p>
          <p>page section content</p>
          <p>page section content</p>
          <p>page section content</p>
          <p>page section content</p>
          <p>page section content</p>
          <p>page section content</p>
          <p>page section content</p>
        </div>
      </div>
    </div>
  );
};

export default Layout;
