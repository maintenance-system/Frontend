import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CustomDataGrid from '../comp/Table';

export default function Get2() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:5029/api/Works');
        const info = response.data.map((item, index) => ({
          ...item,
          id: index + 1,
        }));
        setData(info);
        console.log(info);
      } catch (error) {
        console.error(error);
        alert('Error occurred while fetching data.');
      }
    };

    fetchData();
  }, []);

  return (
    <>
   
      <CustomDataGrid rows={data} />
    </>
  );
}
