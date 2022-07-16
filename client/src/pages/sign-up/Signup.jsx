import React from 'react';
import { Link } from 'react-router-dom';
import './sign-up.css'

const Signup = ({title}) => {
  return (
    <div className='container'>
      <div className='panel-body'>
        <div className="panel-heading">
          <h3 className='panel-title'>{title}</h3>
        </div>
        <form>
          <label className='form-label'>Name</label>
          <input className='form-control' type='text' name='' id='' placeholder='enter your name' />
          <label className='form-label'>Username</label>
          <input className='form-control' type='text' name='' id='' placeholder='enter your username' />
          <label className='form-label'>Email</label>
          <input className='form-control' type='text' name='' id='' placeholder='enter your email' />
          <label className='form-label'>Password</label>
          <input className='form-control' type='text' name='' id='' placeholder='enter your password' />
          <label className='form-label'>Confirm password</label>
          <input
            className='form-control'
            type='text'
            name=''
            id=''
            placeholder='enter your confirm password'
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
    </div>
  );
};

export default Signup;
