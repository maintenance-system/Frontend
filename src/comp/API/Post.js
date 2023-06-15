import React, { useState } from 'react';
import axios from 'axios';

export default function Post() {
  const [nameCity, setNameCity] = useState('');


  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
     // debugger
      const response = await axios.post('http://localhost:5029/api/Works', {
        nameCity
      });

      console.log(response.data);
    } catch (error) {
        if (error.response && error.response.data) {
            const{title, detail, status}=error.response.data;
            console.error('Error Status:', status);
            console.error('Error Title:', title);
            console.error('Error Detail:', detail);
       } else{
        console.error('An unexpected error occurred:', error);
       }  
      // Handle the error as needed
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor='id_nameCity'>city name:</label>
        <input
          type="nameCity"
          id="id_nameCity"
          value={nameCity}
          onChange={(e) => setNameCity(e.target.value)}
        />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
}
