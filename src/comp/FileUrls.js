import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function FileUrls() {
  const [fileUrls, setFileUrls] = useState({
    pendingUrls: [],
    processingUrls: [],
    completedUrls: [],
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const pendingResponse = await axios.get('/api/File/GetPendingUrls');
        const processingResponse = await axios.get('/api/File/GetProcessingUrls');
        const completedResponse = await axios.get('/api/File/GetCompletedUrls');

        setFileUrls({
          pendingUrls: pendingResponse.data,
          processingUrls: processingResponse.data,
          completedUrls: completedResponse.data,
        });
      } catch (error) {
        console.error('An error occurred:', error);
        // Handle the error as needed
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h2>Pending URLs:</h2>
      <ul>
        {fileUrls.pendingUrls.map((url, index) => (
          <li key={index}>{url}</li>
        ))}
      </ul>

      <h2>Processing URLs:</h2>
      <ul>
        {fileUrls.processingUrls.map((url, index) => (
          <li key={index}>{url}</li>
        ))}
      </ul>

      <h2>Completed URLs:</h2>
      <ul>
        {fileUrls.completedUrls.map((url, index) => (
          <li key={index}>{url}</li>
        ))}
      </ul>
    </div>
  );
}

