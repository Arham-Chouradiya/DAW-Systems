// UserData.js
import React from 'react';

function UserData({ userData }) {
  return (
    <div className="userData">
      {userData.map((user, index) => (
        <div key={index} className="userCard">
          <img src={user.picture.medium} alt="User" />
          <p>Name: {`${user.name.first} ${user.name.last}`}</p>
          <p>Gender: {user.gender}</p>
          <p>Email: {user.email}</p>
          <p>Nationality: {user.nat}</p>
        </div>
      ))}
    </div>
  );
}

export default UserData;
