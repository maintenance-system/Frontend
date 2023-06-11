import React, { useEffect, useState } from 'react';

export default function FromPython() {
  const [text, setText] = useState('');


  const fetchText = async () => {
    try {
      const response = await fetch('http://localhost:8000/get-text'); 
      const data = await response.text();
      setText(data);
    } catch (error) {
      console.error('An error occurred:', error);
    }
  };
  const fetchNum = async () => {
    try {
      const response = await fetch('http://localhost:8000/get-text'); 
      const data = await response.text();
      setText(data);
    } catch (error) {
      console.error('An error occurred:', error);
    }
  };

  const fetchInfo = async () => {
    try {
      const response = await fetch('http://localhost:8000/get-text'); 
      const data = await response.text();
      setText(data);
    } catch (error) {
      console.error('An error occurred:', error);
    }
  };
  const fetchDate = async () => {
    try {
      const response = await fetch('http://localhost:8000/get-text'); 
      const data = await response.text();
      setText(data);
    } catch (error) {
      console.error('An error occurred:', error);
    }
  };
  const fetchFile = async () => {
    try {
      const response = await fetch('http://localhost:8000/get-text'); 
      const data = await response.text();
      setText(data);
    } catch (error) {
      console.error('An error occurred:', error);
    }
  };

  return (
    <div>
        <text>קובץ</text>
        <button onClick={fetchText}>Text</button>
        <button onClick={fetchNum}>Num</button>
        <button onClick={fetchInfo}>Info</button>
        <button onClick={fetchDate}>Date</button>
        <button onClick={fetchFile}>File</button>




      <p>{text}</p>
    </div>
  );
}

  