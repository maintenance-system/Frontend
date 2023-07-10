import { useState, useEffect } from 'react';
import axios from 'axios';

export default function Get2() {
  const [data, setData] = useState([]);

  // useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:5029/api/Works');
        setData(response.data);
        console.log(response.data);
      } catch (error) {
        console.error(error);
        alert('Error occurred while fetching data.');
      }
    };

  //   fetchData();
  // }, []);

  return (
    <>
      {data.map((item) => (
        <p key={item.id}>{item.nameCity}</p>
      ))}
            <button onClick={fetchData}>Get</button>

    </>
  );
}
