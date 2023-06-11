import { useState, useEffect } from 'react';
import axios from 'axios';

export default function Get() {
    const [data, setData] = useState([]);

   
        const handleGet = async () => {
        try {
            debugger
            axios.get('http://localhost:5029/api/Works')
                .then(res => {setData(res.data); return res.data})
                .then(response =>console.log(response, data))
                
            //console.log(data);
        } catch {
            alert("error")
        }
    }
      //  console.log(data)
  

    return (
        <>
            {data.map((item) => (
                <p>{item}</p>
            ))}
                  <button onClick={handleGet}>Get</button>

        </>
    );
}
