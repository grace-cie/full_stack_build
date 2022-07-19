import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './sign-up.css';
import axios from 'axios';

const Signup = ({ title }) => {
  const [name, setName] = useState('');
  const [username, setUserName] = useState('');
  const [password, setPass] = useState('');
  const [cpassword, setCpass] = useState('');
  const [email, setEmail] = useState('');

  const addUser = async (e) => {
    e.preventDefault();
    await axios.post('http://localhost:8000/server/auth/register', {
      name: name,
      username: username,
      email: email,
      password: password,
      cpassword: cpassword,
    });
    setName('');
    setUserName('');
    setPass('');
    setCpass('');
    setEmail('');
  };

  return (
    <div className='container'>
      <div className='panel-body'>
        <div className='panel-heading'></div>
        <h3 className='panel-title'>{title}</h3>
      </div>
      <form onSubmit={addUser}>
        <label className='form-label'>Name</label>
        <input
          className='form-control'
          type='text'
          name=''
          id=''
          placeholder='enter your name'
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <label className='form-label'>Username</label>
        <input
          className='form-control'
          type='text'
          name=''
          placeholder='enter your username'
          value={username}
          onChange={(e) => setUserName(e.target.value)}
        />
        <label className='form-label'>Email</label>
        <input
          className='form-control'
          type='text'
          name=''
          id=''
          placeholder='enter your email'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <label className='form-label'>Password</label>
        <input
          className='form-control'
          type='text'
          name=''
          id=''
          placeholder='enter your password'
          value={password}
          onChange={(e) => setPass(e.target.value)}
        />
        <label className='form-label'>Confirm password</label>
        <input
          className='form-control'
          type='text'
          name=''
          id=''
          placeholder='enter your confirm password'
          value={cpassword}
          onChange={(e) => setCpass(e.target.value)}
        />
        <br />
        <button className='btn btn-primary'>Sign Up</button>
      </form>
      <div>
        <p>
          Have an account? <Link to='/login'>Login Here!</Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;
