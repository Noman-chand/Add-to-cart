import React, { useState } from 'react';
import axios from 'axios';

function Page1() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    axios.post(
      'https://65b0de4ad16d31d11bdd726a.mockapi.io/crud-app',
      {
        name: name,
        email: email,
      }
    )
      .then(response => {
        // Handle success, if needed
        console.log(response.data);
      })
      .catch(error => {
        // Handle error, if needed
        console.error('Error:', error);
      });
  }
  return (
    <form>
      <div className="mb-3">
        <label htmlFor="exampleInputEmail1" className="form-label">Name</label>
        <input type="text" className="form-control" value={name} onChange={(e) => setName(e.target.value)} />
        <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
      </div>
      <div className="mb-3">
        <label htmlFor="exampleInputPassword1" className="form-label">Email</label>
        <input className="form-control" type='email' value={email} onChange={(e) => setEmail(e.target.value)} />
      </div>

      <button type="submit" className="btn btn-primary" onClick={handleSubmit}>Submit</button>
    </form>
  );
}

export default Page1;
