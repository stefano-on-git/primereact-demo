import { useAuthContext } from '../Context/AuthContext';
import { ConfirmDialog, confirmDialog } from 'primereact/confirmdialog';
import { useState } from 'react';
import { Button } from 'primereact/button';
import { BreadCrumb } from 'primereact/breadcrumb';
import { Tooltip } from 'primereact/tooltip';
import { Badge } from 'primereact/badge';
import { Avatar } from 'primereact/avatar';

const Layout = () => {
  const breadcrumbItems = [
    { label: 'Categories' },
    { label: 'Sports' },
    { label: 'Football' },
    { label: 'Countries' },
    { label: 'Spain' },
    { label: 'F.C. Barcelona' },
    { label: 'Squad' },
    { label: 'Lionel Messi', url: 'https://en.wikipedia.org/wiki/Lionel_Messi' },
  ];

  const home = { icon: 'pi pi-home', url: 'https://www.primefaces.org/primereact' };

  const { setIsAuth } = useAuthContext();

  const [menuVisible, setMenuVisible] = useState<boolean>(true);

  return (
    <div className='flex flex-column overflow-hidden h-screen'>
      <Tooltip target='p' mouseTrack mouseTrackLeft={10} showDelay={500} />
      <div className='shadow-4 surface-card border-bottom-1 surface-border'>
        <div style={{ height: 60 }} className='flex justify-content-start align-items-stretch'>
          <div
            style={{ minWidth: 300 }}
            className='flex flex-fixed align-items-center justify-content-evenly border-right-1 border-black-alpha-50 surface-0'
          >
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
              className='text-3xl'
            >
              Octopus Condominio
            </div>
            <Button
              className='flex ml-3'
              label=''
              icon='pi pi-bars'
              onClick={() => setMenuVisible(!menuVisible)}
              aria-controls='popup_menu'
              aria-haspopup
              tooltip={menuVisible ? 'chiudi menu' : 'apri menu'}
              tooltipOptions={{ position: 'bottom' }}
            />
          </div>
          <div className='flex align-items-center border-left-1 surface-border pl-3'>
            <BreadCrumb
              model={breadcrumbItems}
              home={home}
              className='p-0 text-sm'
              style={{ border: 0 }}
            />
          </div>
          <div className='flex align-items-center flex-grow-1 justify-content-end'>
            <i
              className='pi pi-bell mr-4 p-text-secondary p-overlay-badge'
              style={{ fontSize: '1.5rem' }}
            >
              <Badge value='2' className='text-sm' />
            </i>
            <Avatar icon='pi pi-user' className='mr-3' size='normal' />
            <Button
              icon='pi pi-power-off'
              className='p-button-rounded p-button-danger mr-2'
              aria-label='Cancel'
              tooltip='chiudi sessione'
              tooltipOptions={{ position: 'left' }}
              onClick={() => {
                confirmDialog({
                  message: 'Sei sicuro di voler procedere?',
                  header: 'Chiudi sessione',
                  icon: 'pi pi-exclamation-triangle',
                  acceptLabel: 'Sì',
                  accept: () => setIsAuth!(false),
                });
              }}
            />
            <ConfirmDialog />
          </div>
        </div>
      </div>
      <div className='flex flex-grow-1 overflow-hidden border-top-1 border-black-alpha-90'>
        <div
          style={{ width: menuVisible ? 250 : 0 }}
          className='transition-all transition-duration-500 transition-ease-in-out flex flex-grow-0 overflow-hidden flex-fixed surface-card shadow-6 border-right-1 surface-border'
        >
          <div
            style={{ whiteSpace: 'nowrap' }}
            className='m-2 p-2 overflow-y-auto overflow-x-hidden flex-grow-1'
          >
            <p
              style={{
                whiteSpace: 'nowrap',
                textOverflow: 'ellipsis',
                overflow: 'hidden',
                padding: 0,
                margin: 0,
              }}
              data-pr-tooltip='left menu voice molto lungo per testare text-overflow'
            >
              left menu voice molto lungo per testare text-overflow
            </p>
            <p>left menu voice</p>
            <p>left menu voice</p>
            <p>left menu voice</p>
            <p>left menu voice</p>
            <p>left menu voice</p>
            <p>left menu voice</p>
            <p>left menu voice</p>
            <p>left menu voice</p>
            <p>left menu voice</p>
            <p>left menu voice</p>
            <p>left menu voice</p>
            <p>left menu voice</p>
            <p>left menu voice</p>
            <p>left menu voice</p>
            <p>left menu voice</p>
            <p>left menu voice</p>
            <p>left menu voice</p>
            <p>left menu voice</p>
            <p>left menu voice</p>
            <p>left menu voice</p>
            <p>left menu voice</p>
            <p>left menu voice</p>
            <p>left menu voice</p>
            <p>left menu voice</p>
            <p>left menu voice</p>
            <p>left menu voice</p>
            <p>left menu voice</p>
            <p>left menu voice</p>
            <p>left menu voice</p>
            <p>left menu voice</p>
            <p>left menu voice</p>
            <p>left menu voice</p>
            <p>left menu voice</p>
            <p>left menu voice last</p>
          </div>
        </div>
        <div className='flex overflow-hidden flex-grow-1 border-left-1 border-black-alpha-90'>
          <div className='m-2 p-3 overflow-auto flex-grow-1'>
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
