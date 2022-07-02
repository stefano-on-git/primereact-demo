import { Button } from 'primereact/button';
import { useAuthContext } from '../Context/AuthContext';
import { TabMenu } from 'primereact/tabmenu';
import { Menu } from 'primereact/menu';

const items = [
  { label: 'Home', icon: 'pi pi-fw pi-home' },
  { label: 'Calendar', icon: 'pi pi-fw pi-calendar' },
  { label: 'Edit', icon: 'pi pi-fw pi-pencil' },
  { label: 'Documentation', icon: 'pi pi-fw pi-file' },
  { label: 'Settings', icon: 'pi pi-fw pi-cog' },
];

const leftMenuItems = [
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
      { label: 'Sign Out', icon: 'pi pi-fw pi-power-off' },
    ],
  },
];

const Layout = () => {
  const { setIsAuth } = useAuthContext();

  return (
    <div className='grid grid-nogutter surface-0 text-800'>
      <div
        style={{ width: 250 }}
        className='col-fixed flex flex-column surface-card shadow-8 border-right-1 surface-border overflow-hidden h-screen'
      >
        <div className='text-center p-5 shadow-6 border-bottom-1 surface-border surface-0'>
          <img
            src='images/octopus.svg'
            alt='hyper'
            height={48}
            style={{
              filter: 'drop-shadow(0 2px 1px #000)',
            }}
          />
          <div style={{ fontFamily: 'Cookie', textShadow: '0 2px 1px #000' }} className='text-3xl'>
            Octopus Condominio
          </div>
          <Button
            label='Logout'
            className='mt-3'
            icon='pi pi-sign-out'
            onClick={() => setIsAuth!(false)}
          />
        </div>
        <div className='flex flex-column flex-grow-1 overflow-hidden border-top-1 border-black-alpha-90'>
          <div className='m-1 p-1 overflow-auto flex-grow-1'>
            <Menu model={leftMenuItems} />
          </div>
        </div>
      </div>
      <div className='col flex flex-column overflow-hidden h-screen'>
        <div className='shadow-4 surface-card border-bottom-1 surface-border p-4'></div>
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
    </div>
  );
};

export default Layout;
