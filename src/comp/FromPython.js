import React, { useEffect, useState } from 'react';

export default function FromPython() {
  const [text, setText] = useState('');

  useEffect(() => {
    const fetchText = async () => {
      try {
        const response = await fetch('http://localhost:8000/get-text'); 
        const data = await response.text();
        setText(data);
      } catch (error) {
        console.error('An error occurred:', error);
      }
    };

    fetchText();
  }, []);

  return (
    <div>
      <p>{text}</p>
    </div>
  );
}

  