import React, { useState } from 'react';
import { Link } from 'react-router-dom';

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
      <div>
        <h1>{title}</h1>
        <form>
          <label>username</label>
          <input
            type='text'
            name='name'
            placeholder='enter your name'
            onChange={handleChange}
            value={data.userName}
          />
          <br />
          <br />
          <label>password</label>
          <input
            type='password'
            name='password'
            placeholder='enter your password'
            onChange={handleChange}
            value={data.password}
          />
          <br />
          <button onSubmit={handleSubmit}>Login</button>
        </form>

        <div>
          <p>
            dont have an account?
            <Link to='/signup'>Sign Up Here</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
