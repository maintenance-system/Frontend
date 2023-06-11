import React, { useState } from 'react';
import axios from 'axios';

export default function FileUpload() {
  const [file, setFile] = useState(null);
  const [fileUrl, setFileUrl] = useState('');

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    setFile(selectedFile);
  };
///55
//5
  const handleUpload = async () => {
    try {
      const formData = new FormData();
      formData.append('file', file);

      const response = await axios.post('http://localhost:5029/api/File/upload', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });

      const uploadedFileUrl = response.data;
      setFileUrl(uploadedFileUrl);
    } catch (error) {
      console.error('An error occurred:', error);
      // Handle the error as needed
    }
  };

  return (
    <div>
      <input type="file" onChange={handleFileChange} />
      <button onClick={handleUpload}>Upload</button>

      {fileUrl && (
        <p>Uploaded File URL: <a href={fileUrl} target="_blank" rel="noopener noreferrer">{fileUrl}</a></p>
      )}
    </div>
  );
}

  