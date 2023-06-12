import React, { useState } from 'react';
import axios from 'axios';

export default function Login() {
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');



  const workerID = async () => {
    try {
      const response = await axios.get(`http://localhost:5029/api/user/${userName}`,{
        headers: {
            Authorization: password
          }
        });
         console.log(response.data)
        // if(response.data[0].name==userName 
        // &&  response.data.password==password )
        // {
        //     workerRole()
        // }
        if(response.data==true){
                workerRole()
        }
        else{
            setMessage("Username or password incorrect")
        }
    } catch (error) {
      console.error('An error occurred:', error);
      
    }
  };

  const workerRole = async () => {
    try {
      const response = await axios.get(`http://localhost:5029/api/userRoles/${userName}`);
      console.log(response.data)
      const userRole=response.data.role


      
     
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
        placeholder="Enter Name"
      />
      <br></br>
      <label htmlFor="password">סיסמה:</label>
      <input
        type="password"
        id="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Enter ID"
      />

<br></br>
      <button onClick={workerID}>Login</button>
      <p>{message}</p>
    </div>
  );
}