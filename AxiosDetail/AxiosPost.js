import React, { useState } from 'react';
import axios from 'axios'

function AxiosPost() {
  let data = { firstName: "", lastName: "" };
  let [inputData, setInputData] = useState(data);

  let handleInput = (e) => {
    setInputData({ ...inputData, [e.target.name]: e.target.value });
  };
   function submitData(e){
    e.preventDefault();
    axios.post("https://jsonplaceholder.typicode.com/users",inputData)
    .then((response)=>{
        console.log(response);
    })
   }
   function updateData(e){
    function submitData(e){
        e.preventDefault();
        axios.put("https://jsonplaceholder.typicode.com/users/1",inputData)
        .then((response)=>{
            console.log(response);
        })
       }

   }

  return (
    <>
      <h2>Axios Post </h2>
      <label htmlFor="firstName">First Name</label>
      <input
        type="text"
        name="firstName"
        value={inputData.firstName}
        onChange={handleInput}
      />

      <label htmlFor="lastName">Last Name</label>
      <input
        type="text"
        name="lastName"
        value={inputData.lastName}
        onChange={handleInput}
      />
      <br /> <br />
      <button type="submit" onClick={submitData}>Submit Button</button>
      <button onClick={updateData}>Update Button</button>
    </>
  );
}

export default AxiosPost;
