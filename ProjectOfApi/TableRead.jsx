import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getApiUser } from './SliceApi';
import { deleteApiData } from './SliceApi';
import ViewPart from './ViewPart';
import { NavLink } from 'react-router-dom';


function TableRead() {

const dispatch = useDispatch();
const { isLoading, error, user } = useSelector(state => state.userDetail);
const [id,setId] = useState('')

const [view,setView] = useState(false)

    useEffect(() => {
        dispatch(getApiUser());
    }, [dispatch]);

const deleteUserData = (id) => {
dispatch(deleteApiData(id))
}


    return (
        <>
        {view && <ViewPart  id={id} view ={view} setView = {setView}/> }
        
            <h2>Read the Data</h2>
            <div className="container">

                <div className="row mb-3">
                </div>
                <div className="row">
                    <div className="col">
                        <h2>User Information</h2>

                    </div>
                </div>
                {isLoading ? (
                    <p>Loading...</p>
                ) : error ? (
                    <p>Error occurred while fetching data: {error}</p>
                ) : (
                    <table className="table table-striped">
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Gender</th>
                                <th>Age</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
{ user.map(userData => (
                <tr key={userData.id}>
                <td>{userData.name}</td>
                <td>{userData.email}</td>
              <td>{userData.gender}</td>
              <td>{userData.age}</td>
              <td>
        <button className="btn btn-primary me-2" >
        <NavLink to={`/edit/${userData.id }`} style={{color:'white' }}> 
        <i className="bi bi-pencil"></i> Edit
    </NavLink>
      </button>
    <button className="btn btn-success me-2" onClick={()=> [setId(userData.id),setView(true)]}>
    <i className="bi bi-eye"></i> View
  </button>
    <button className="btn btn-danger" onClick={() => { deleteUserData(userData.id) }}>
    <i className="bi bi-trash"></i> Delete
  </button>
  </td>
  </tr>
  ))}
  </tbody>
 </table>
   )}
   </div>
   </>
);
}

export default TableRead;
