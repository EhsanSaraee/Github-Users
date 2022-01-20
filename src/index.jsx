import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { GithubProvider } from './context/context';
import { Auth0Provider } from '@auth0/auth0-react';

const rootElement = document.getElementById('root');

ReactDOM.render(<App />, rootElement);
