import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { GithubProvider } from './context/context';
import { Auth0Provider } from '@auth0/auth0-react';

const rootElement = document.getElementById('root');

ReactDOM.render(
   <Auth0Provider
      domain="dev-15gd455d.us.auth0.com"
      clientId="jksdHavTBv1DHD7mBSbQClbHcOKSisyC"
      redirectUri={window.location.origin}
   >
      <GithubProvider>
         <App />
      </GithubProvider>
   </Auth0Provider>,
   rootElement
);
