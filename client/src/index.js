import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './pages/login/Login';
import Signup from './pages/sign-up/Signup';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />} />
        <Route path='login' element={<Login title='Login' />} />
        <Route path='signup' element={<Signup title='Sign Up' />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

//router is now fix
