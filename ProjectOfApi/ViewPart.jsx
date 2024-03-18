import React from 'react';
import './ViewPart.css'; // Import CSS file for styling
import { useSelector } from 'react-redux';

function ViewPart({ id,view,setView }) {

  const { user } = useSelector((state) => state.userDetail);
  const singleUserData = user.filter((element) => element.id === id);

return (
  
<>
      <div className="container">
        <div className="fixed-box">
          <h4>{singleUserData[0].name}</h4>
          <p>Email:{singleUserData[0].email}</p>
          <p>Gender:{singleUserData[0].gender}</p>
          <p>Age:{singleUserData[0].age}</p>
          <button className="btn btn-danger" onClick={()=> setView(false)}>Undo</button>
    </div>
    </div>

</>
);
}

export default ViewPart;
