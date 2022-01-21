import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { GithubProvider } from './context/context';

const rootElement = document.getElementById('root');

ReactDOM.render(
   <GithubProvider>
      <App />
   </GithubProvider>,
   rootElement
);
