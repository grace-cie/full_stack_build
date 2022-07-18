import React from 'react';
import './usercard.css';
import profileImg from '../../assets/set.jpg';

const UserCard = ({ user }) => {
  return (
    <div className='card-body'>
      <div className='card-header'>
        <img src={profileImg} alt='default' />
      </div>
      <p>{user.name}</p>
      <p>{user.username}</p>
      <p>{user.email}</p>
    </div>
  );
};

export default UserCard;
