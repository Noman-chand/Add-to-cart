import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import {useSelector,useDispatch} from 'react-redux'
import { useState } from 'react';
import { searchAction } from './SliceApi';

function NavBar() {
  const dispatch = useDispatch();

 const [searchBar,setSearchBar] = useState();

 useEffect( ()=>{
  dispatch(searchAction(searchBar))
  
 },[searchBar])

 


const { user} = useSelector( (state)=> state.userDetail); 
const countUser = user.map( (value)=> value.name)

  return (

    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <NavLink to="/" className="navbar-brand">RTK</NavLink>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink to="/" className="nav-link active" aria-current="page">Create Post</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/read" className="nav-link">All Post :{countUser.length}</NavLink>
            </li>
          </ul>
<form className="d-flex">
 <input className="form-control me-2" type="search" name="search" placeholder="Search" 
 onChange={(e)=> setSearchBar(e.target.value)} />

</form>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
