import React from 'react';
import { Dashboard, Login, PrivateRoute, AuthWrapper, Error } from './pages';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const App = () => {
   return (
      <div>
         <Dashboard></Dashboard>
         <Login />
         <Error />
      </div>
   );
};

export default App;
