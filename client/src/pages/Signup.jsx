import React from 'react';
import { Link } from 'react-router-dom';

const Signup = () => {
  return (
    <div>
      <div>
        <form>
          <label>name</label>
          <input type='text' name='' id='' placeholder='enter your name' />
          <br />
          <br />

          <label>username</label>
          <input type='text' name='' id='' placeholder='enter your username' />
          <br />
          <br />

          <label>email</label>
          <input type='text' name='' id='' placeholder='enter your email' />
          <br />
          <br />

          <label>password</label>
          <input type='text' name='' id='' placeholder='enter your password' />
          <br />
          <br />

          <label>confirm password</label>
          <input
            type='text'
            name=''
            id=''
            placeholder='enter your confirm password'
          />
          <br />
          <br />

          <button>Sign Up</button>
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
