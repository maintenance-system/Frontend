import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function FileUrls() {
  const [status, setStatus] = useState('');
  const [fileUrls, setFileUrls] = useState([]);

  const fetchUrlsByStatus = async (status) => {
    try {
      //debugger
      const response = await axios.get(`http://localhost:5029/api/File/UrlsByStatus?status=${status}`);
      console.log(response)
      setFileUrls(response.data);
    } catch (error) {
      console.log('An error occurred:', error);
    }
  };

  const handleStatusChange = (event) => {
    setStatus(event.target.value);
  };



  useEffect(() => {
    fetchUrlsByStatus(status);
  }, [status]);

  return (
    <div>
      <div>
        <label htmlFor="status">Status: </label>
        <input
          type="text"
          id="status"
          value={status}
          onChange={handleStatusChange}
        />
      </div>
      <ul>
        {fileUrls.map((url, index) => (
          <>
          
          <lu key={index}><a href={url}><i class="fas fa-file-pdf"> </i></a>גן</lu>
          <br></br>
          </>
        ))}
      </ul>
    </div>
  );
}





