import React from 'react';

const Login = ({ title }) => {
  return (
    <div className=''>
      <div>
        <h1>{title}</h1>
        <form>
          <input type='text' name='name' placeholder='enter your name' />
          <label>name</label>
          <input
            type='password'
            name='password'
            placeholder='enter your password'
          />
          <button>Login</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
