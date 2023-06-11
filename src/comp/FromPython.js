import React, { useEffect, useState } from 'react';

export default function FromPython() {
  const [text, setText] = useState('');
  const [date, setDate] = useState("a");
  // const [text, setText] = useState('');
  // const [text, setText] = useState('');


  const fetchText = async () => {
    try {
      const response = await fetch('http://127.0.0.1:5000');
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
      const response = await fetch('http://127.0.0.1:5000/date');
      const data = await response.text();
      debugger
      setDate(data);
    } catch (error) {
      console.error('An error occurred:', error);
    }
  };
  const fetchFile = async () => {
    try {
      const response = await fetch('http://127.0.0.1:5000/api/FileUrls');
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
      <p>{date}</p>
    </div>
  );
}

