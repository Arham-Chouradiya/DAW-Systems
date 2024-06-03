// App.js
import React, { useState } from 'react';
import UserInput from './UserInput';
import UserData from './UserData';
import './App.css';

function App() {
  const [userData, setUserData] = useState(null);

  return (
    <div className="App">
      <h1>Random User Generator</h1>
      <UserInput setUserData={setUserData} />
      {userData && <UserData userData={userData} />}
    </div>
  );
}

export default App;
