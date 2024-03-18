import React, { useEffect, useState } from 'react';
import axios from 'axios';

function AxiosRender() {
  const [dataOfAxios, setDataOfAxios] = useState([]);

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/users')
      .then((res) => {
        console.log(res.data);
        setDataOfAxios(res.data);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <>
      <h3>API rendering in React</h3>
      <ul>
        {dataOfAxios.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </>
  );
}

export default AxiosRender;
