import React, { useState } from 'react';
import axios from 'axios';

export default function Signup() {
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [role, setrole] = useState('');


  
  const newWorker = async () => {
    try {
      const response = await axios.post(`http://localhost:5029/api/user/${userName}${password}${role}`);
      console.log(response.data);
      
     
    } catch (error) {
      console.error('An error occurred:', error);
      
    }
  };

  return (
    <div>
      <label htmlFor="text">שם משתמש:</label>
      <input
        type="text"
        value={userName}
        onChange={(e) => setUserName(e.target.value)}
        placeholder="Enter ID"
      />
      <br></br>
      <label htmlFor="password">סיסמה:</label>
      <input
        type="password"
        id="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <br></br>
      <label htmlFor="text">תפקיד:</label>
      <input
        type="text"
        id="role_id"
        value={role}
        onChange={(e) => setrole(e.target.value)}
      />

<br></br>
      <button onClick={newWorker}>Signup</button>
    </div>
  );
}