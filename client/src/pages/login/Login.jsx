import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './login.css';
import axios from 'axios';

const Login = ({ title }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await axios.post('http://localhost:8000/server/auth/login', {
      username,
      password,
    });
    console.log(res.data);
  };
  return (
    <div className=''>
      <div className='container'>
        <div className=''>
          <div className='panel-body'>
            <div className='panel-heading'>
              <h3 className='panel-title'>{title}</h3>
            </div>
            <form className='login-form' onSubmit={handleSubmit}>
              <div className='mb-3'>
                <label className='form-label'>Username</label>
                <input
                  className='form-control'
                  type='text'
                  name='name'
                  placeholder='Enter your name'
                  onChange={(e) => setUsername(e.target.value)}
                  value={username}
                />
                <label className='form-label'>Password</label>
                <input
                  className='form-control'
                  type='password'
                  name='password'
                  placeholder='Enter your password'
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <br />
                <button className='btn btn-primary' onSubmit={handleSubmit}>
                  Login
                </button>
              </div>
            </form>
            <p>
              dont have an account?
              <Link to='/signup'> Sign Up Here</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
