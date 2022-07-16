import React from 'react';
import { Link } from 'react-router-dom';
// import { Footer } from '../../components/Footer';
// import { Header } from '../../components/Header';
import './home.css'
import image from '../../assets/default2.png'

const Home = () => {
  return (
  <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <Link className="navbar-brand" to={`/`}><img className='logo' src={image}/></Link>

    <div className="d-flex justify-content-end" id="navbarSupportedContent">
      <ul id="nav-items" className="navbar-nav mr-auto">
        <li className="nav-item active">
          <Link className="nav-link" to={'/login'}>Login<span className="sr-only">(current)</span></Link>
        </li>

        <li className="nav-item active">
          <Link className="nav-link" to={'/signup'}>Sign Up<span className="sr-only">(current)</span></Link>
        </li>
      </ul>
    </div>
  </nav>
    // <div>
    //   <nav className='navbar navbar-expand-lg navbar-dark bg-dark'>
    //     <div>
    //       <h1>HOMEPAGE</h1>
    //         <Link to='/login'>
    //           <p>Login</p>
    //         </Link>
    //         <Link to='/signup'>
    //           <p>Sign Up</p>
    //         </Link>
    //     </div>
    //   </nav>
      
    // </div>
  );
};
export default Home;
