import axios from 'axios';
import React, { useEffect, useState } from 'react';

export default function FromPython() {
  const [text, setText] = useState('');
  const [date, setDate] = useState("a");
  const [number, setNumber] = useState('0');
  const [info, setInfo] = useState('no infomation');

  useEffect(() => {
    const fetchDate = async () => {
      try {
        const response = await fetch('http://127.0.0.1:5000/date');
        const data = await response.text();
        setDate(data);
      } catch (error) {
        console.error('An error occurred:', error);
      }
    };

    fetchDate();
  }, []);

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
      setNumber(data);
    } catch (error) {
      console.error('An error occurred:', error);
    }
  };

  const fetchInfo = async () => {
    try {
      const response = await fetch('http://localhost:8000/get-text');
      const data = await response.text();
      setInfo(data);
    } catch (error) {
      console.error('An error occurred:', error);
    }
  };
  const fetchDate = async () => {
    try {
      debugger
      const response = await axios.get('http://127.0.0.1:5000/date');
      setDate(response.data);
      console.log(response.data);
    } catch (error) {
      console.error(error);
      alert('Error occurred while fetching data.');
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
      <p>{text}</p>
      <p>{number}</p>
      <p>{info}</p>
    </div>
  );
}

