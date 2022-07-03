import { useAuthContext } from '../Context/AuthContext';
import { ConfirmDialog, confirmDialog } from 'primereact/confirmdialog';
import { Menu } from 'primereact/menu';
import { useRef } from 'react';
import { Button } from 'primereact/button';
import { MenuItem } from 'primereact/menuitem';

const Layout = () => {
  const optionsItems: MenuItem[] = [
    {
      label: 'New',
      icon: 'pi pi-fw pi-plus',
      command: () => {
        window.location.hash = '/fileupload';
      },
    },
    { label: 'Delete', icon: 'pi pi-fw pi-trash', url: 'http://primetek.com.tr' },
  ];

  const accountItems: MenuItem[] = [
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
        confirmDialog({
          message: 'Sei sicuro di voler procedere?',
          header: 'Conferma sign out',
          icon: 'pi pi-exclamation-triangle',
          accept: () => {
            setIsAuth!(false);
          },
          reject: () => {
            return false;
          },
        });
      },
    },
  ];

  const items = [
    {
      label: 'Options',
      items: optionsItems,
    },
    {
      label: 'Account',
      items: accountItems,
    },
  ];

  const { setIsAuth } = useAuthContext();
  const menu = useRef<Menu>(null);

  return (
    <div className='flex flex-column overflow-hidden h-screen'>
      <div className='shadow-4 surface-card border-bottom-1 surface-border'>
        <div className='flex justify-content-start flex-row align-items-center'>
          <div className='flex align-items-center border-right-1 border-black-alpha-50 surface-0 shadow-2 py-3 px-5'>
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
              className='text-3xl ml-2'
            >
              Octopus Condominio
            </div>
          </div>
          <div className='flex align-items-center p-3 border-left-1 surface-border'>
            <Button
              className='flex'
              label=''
              icon='pi pi-bars'
              onClick={(event) => menu.current!.toggle(event)}
              aria-controls='popup_menu'
              aria-haspopup
            />
          </div>
          <div className='flex align-items-center'>
            <Menu model={items} popup ref={menu} />
            <ConfirmDialog />
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
