import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './pages/login/Login';
import Signup from './pages/sign-up/Signup';
import Books from './components/books/Books';

import { Provider } from 'react-redux';
import { authStore } from './redux/auth/authStore';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={authStore}>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<App />} />
          <Route path='login' element={<Login title='Login' />} />
          <Route path='signup' element={<Signup title='Sign Up' />} />
          <Route path='books' element={<Books title='List of Books' />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);

//router is now fix
