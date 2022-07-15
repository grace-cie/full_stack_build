import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <div>
        <h1>HOMEPAGE</h1>
      </div>
      <Link to='/login'>
        <p>Login</p>
      </Link>
      <Link to='/signup'>
        <p>Sign Up</p>
      </Link>
    </div>
  );
};

export default Home;
