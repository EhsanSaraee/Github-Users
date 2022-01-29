import { Dashboard, Error, Login, PrivateRoute } from './pages';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const App = () => {
   return (
      <BrowserRouter>
         <Routes>
            <Route
               path="/"
               element={
                  <PrivateRoute>
                     <Dashboard />
                  </PrivateRoute>
               }
            />
            <Route path="/private" element={<PrivateRoute />} />
            <Route path="/login" element={<Login />} />
            <Route path="*" element={<Error />} />
         </Routes>
      </BrowserRouter>
   );
};

export default App;
