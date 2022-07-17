import React from 'react';
import UserCard from '../cards/UserCard';
import './userTable.css';

const UsersTable = ({ users }) => {
  return (
    <div>
      <h2 className='users-title'>List of Users</h2>
      <div className='card-container card-pos'>
        {users.map((user) => (
          <div key={user._id}>
            <UserCard user={user} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default UsersTable;
