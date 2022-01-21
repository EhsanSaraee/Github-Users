import { Dashboard, Error, Login } from './pages';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const App = () => {
   return (
      <BrowserRouter>
         <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/login" element={<Login />} />
            <Route path="*" element={<Error />} />
         </Routes>
      </BrowserRouter>
   );
};

export default App;
