import React, { useState } from 'react';
import axios from 'axios';

export default function Delete() {
  const [id, setId] = useState('');

  const handleDelete = async () => {
    try {
      const response = await axios.delete(`http://localhost:5029/api/Works/${id}`);
      console.log(response.data);
      // Handle the response data as needed
    } catch (error) {
      console.error('An error occurred:', error);
      // Handle the error as needed
    }
  };

  return (
    <div>
      <input
        type="text"
        value={id}
        onChange={(e) => setId(e.target.value)}
        placeholder="Enter ID"
      />
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
}

  