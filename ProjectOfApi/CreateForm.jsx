import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { postApiUser } from './SliceApi';
import { useNavigate } from 'react-router-dom';

function CreateForm(){

  const dispatch = useDispatch();
  const navigate = useNavigate();

const [users, setUsers] = useState({});
const handleInputData = (e) => {
 setUsers({ ...users, [e.target.name]: e.target.value });
};

  const submitData = (e) => {
    e.preventDefault();
    console.log(users);
    dispatch(postApiUser(users));
  };

  const navigateToThePage = () => {
    navigate("/read");
  };

  return (
    <>

      <div className="container">
        <h1>Registration Form</h1>

        <form>
          <div className="mb-3">
            <label htmlFor="name" className="form-label">Name</label>
            <input type="text" className="form-control" name='name' placeholder="Enter your name" 
            required onChange={handleInputData} />
          </div>

          <div className="mb-3">
            <label htmlFor="email" className="form-label">Email</label>
            <input type="email" className="form-control" name='email' placeholder="Enter your email" required onChange={handleInputData} />
          </div>

          <div className="mb-3">
            <label className="form-label">Age</label>
            <input type="Text" className="form-control" name='age' placeholder="Enter your age" required onChange={handleInputData} />
          </div>

          <div className="mb-3">
            <label className="form-label d-block">Gender</label>
            <div className="form-check form-check-inline">
              <input className="form-check-input" type="radio" name='gender' value="male" required onChange={handleInputData} />
              <label className="form-check-label" htmlFor="male">Male</label>
            </div>

            <div className="form-check form-check-inline">
              <input className="form-check-input" type="radio" name='gender' value="female" required onChange={handleInputData} />
              <label className="form-check-label" htmlFor="female">Female</label>
            </div>
          </div>


<button type="submit" className="btn btn-primary" onClick={submitData}>Submit</button>
<button className="btn btn-primary" onClick={navigateToThePage}> Read data</button>

</form>
</div>

</>
  );
}

export default CreateForm;
