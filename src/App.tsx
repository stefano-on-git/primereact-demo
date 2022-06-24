/*
primereact/resources/themes/bootstrap4-light-blue/theme.css
primereact/resources/themes/bootstrap4-light-purple/theme.css
primereact/resources/themes/bootstrap4-dark-blue/theme.css
primereact/resources/themes/bootstrap4-dark-purple/theme.css
primereact/resources/themes/md-light-indigo/theme.css
primereact/resources/themes/md-light-deeppurple/theme.css
primereact/resources/themes/md-dark-indigo/theme.css
primereact/resources/themes/md-dark-deeppurple/theme.css
primereact/resources/themes/mdc-light-indigo/theme.css
primereact/resources/themes/mdc-light-deeppurple/theme.css
primereact/resources/themes/mdc-dark-indigo/theme.css
primereact/resources/themes/mdc-dark-deeppurple/theme.css
primereact/resources/themes/tailwind-light/theme.css
primereact/resources/themes/fluent-light/theme.css
primereact/resources/themes/lara-light-blue/theme.css
primereact/resources/themes/lara-light-indigo/theme.css
primereact/resources/themes/lara-light-purple/theme.css
primereact/resources/themes/lara-light-teal/theme.css
primereact/resources/themes/lara-dark-blue/theme.css
primereact/resources/themes/lara-dark-indigo/theme.css
primereact/resources/themes/lara-dark-purple/theme.css
primereact/resources/themes/lara-dark-teal/theme.css
primereact/resources/themes/saga-blue/theme.css
primereact/resources/themes/saga-green/theme.css
primereact/resources/themes/saga-orange/theme.css
primereact/resources/themes/saga-purple/theme.css
primereact/resources/themes/vela-blue/theme.css
primereact/resources/themes/vela-green/theme.css
primereact/resources/themes/vela-orange/theme.css
primereact/resources/themes/vela-purple/theme.css
primereact/resources/themes/arya-blue/theme.css
primereact/resources/themes/arya-green/theme.css
primereact/resources/themes/arya-orange/theme.css
primereact/resources/themes/arya-purple/theme.css
primereact/resources/themes/nova/theme.css
primereact/resources/themes/nova-alt/theme.css
primereact/resources/themes/nova-accent/theme.css
primereact/resources/themes/luna-amber/theme.css
primereact/resources/themes/luna-blue/theme.css
primereact/resources/themes/luna-green/theme.css
primereact/resources/themes/luna-pink/theme.css
primereact/resources/themes/rhea/theme.css
*/
import 'primereact/resources/themes/vela-orange/theme.css'; //theme
import 'primereact/resources/primereact.min.css'; //core css
import 'primeicons/primeicons.css'; //icons
import 'primeflex/primeflex.css';

import Hello from '~/components/Hello';
import FetchProvider from './components/Context/FetchContext';
import LoadingSpinner from './components/Loading/LoadingSpinner';
import BlurLoadingWrapper from './components/Loading/BlurLoadingWrapper';
import AuthProvider from './components/Context/AuthContext';

function App() {
  return (
    <FetchProvider>
      <BlurLoadingWrapper>
        <AuthProvider>
          {/* <Layout /> */}
          <Hello />
        </AuthProvider>
      </BlurLoadingWrapper>
      <LoadingSpinner />
    </FetchProvider>
  );
}

export default App;
