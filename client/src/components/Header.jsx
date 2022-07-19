import React from 'react';

import { Link } from 'react-router-dom';
import image from '../assets/default2.png';

const Header = () => {
  return (
    <div>
      <nav className='navbar navbar-expand-lg navbar-light bg-light'>
        <Link className='navbar-brand' to={`/`}>
          <img className='logo' src={image} alt='bookerlogo' />
        </Link>

        <div className='d-flex justify-content-end' id='navbarSupportedContent'>
          <ul id='nav-items' className='navbar-nav mr-auto'>
            <li className='nav-item active'>
              <Link className='nav-link' to={'/login'}>
                Login<span className='sr-only'>(current)</span>
              </Link>
            </li>

            <li className='nav-item active'>
              <Link className='nav-link' to={'/signup'}>
                Sign Up<span className='sr-only'>(current)</span>
              </Link>
            </li>
            <li className='nav-item active'>
              <Link className='nav-link' to={'/books'}>
                Available Books<span className='sr-only'>(current)</span>
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Header;
