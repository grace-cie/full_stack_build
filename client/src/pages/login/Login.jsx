import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './login.css'

const Login = ({ title }) => {
  const [data, setData] = useState('');

  const handleChange = (e) => {
    const name = e.target.value;
    const value = e.target.value;

    setData((values) => ({ ...values, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className=''>
      <div className='container'>
          <div className=''>
            <div className='panel-body'>
              <div className="panel-heading">
                <h3 className='panel-title'>{title}</h3>
              </div>
              <form className='login-form'>
                <div className="mb-3">
                <label className="form-label">Username</label>
                <input
                  className='form-control'
                  type='text'
                  name='name'
                  placeholder='Enter your name'
                  onChange={handleChange}
                  value={data.userName}
                />
                <label className='form-label'>Password</label>
                <input
                className='form-control'
                  type='password'
                  name='password'
                  placeholder='Enter your password'
                  onChange={handleChange}
                  value={data.password}
                />
                <br />
                <button className='btn btn-primary' onSubmit={handleSubmit}>Login</button>
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
