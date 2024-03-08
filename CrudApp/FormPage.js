import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate} from "react-router-dom";

function FormPage() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const Headers = { "Access-Control-Allow-Origin": "*" };
    const history = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("click button");

        axios.post(
            'https://65b0de4ad16d31d11bdd726a.mockapi.io/crud-app',
            {
                name: name,
                email: email,
            },
            { headers: Headers }  
        )
        
        .then(response => {
            console.log('Data successfully sent to API:', response.data);
        })
        .catch(error => {
            console.error('Error sending data to API:', error);
        });

        setEmail('');
        setName('');

        history("/read")
    };

    return (
        <>
            <h3>Create:</h3><br />
            <form>
           
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Name</label>
                    <input
                        type="text"  
                        className="form-control"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                    <input
                        type="email"
                        className="form-control"
                        aria-describedby="emailHelp"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <div className="form-text">We'll never share your email with anyone else.</div>
                </div>
            </form>
  <div className="col-12">
  <button type="submit" className="btn btn-primary" onClick={handleSubmit}>Sign in</button>
</div>

</>
);
}
export default FormPage;
