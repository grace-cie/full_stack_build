import React, { useEffect, useState } from 'react';

// import { Footer } from '../../components/Footer';
import Header from '../../components/Header';
import './home.css';

import axios from 'axios';
import UsersTable from '../../components/table/UsersTable';

const Home = () => {
  const [users, setUser] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      const getUser = await axios.get('http://localhost:8000/server/users');

      setUser(getUser.data);
    };
    fetchUsers();
  }, []);

  return (
    <div>
      <Header />
      <div className='users-container'>
        <UsersTable users={users} />
      </div>
    </div>

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
