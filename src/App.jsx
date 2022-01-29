import { AuthWrapper, Dashboard, Error, Login, PrivateRoute } from './pages';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const App = () => {
   return (
      <AuthWrapper>
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
      </AuthWrapper>
   );
};

export default App;
