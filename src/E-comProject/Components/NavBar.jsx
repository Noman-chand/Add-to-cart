// NavBar.js

import React, { useState, useEffect } from 'react';
import { fetchProduct } from '../../Features/apiSlice';
import { useDispatch, useSelector } from 'react-redux';
import { FaCartArrowDown } from "react-icons/fa";
import { Link } from 'react-router-dom';

function NavBar() {
  const dispatch = useDispatch();
  const { products } = useSelector((state) => state.apiData);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    dispatch(fetchProduct());
  }, [dispatch]);

  console.log(products);

  // Function to handle changes in the search input
  const handleSearchInputChange = (event) => {
    setSearchQuery(event.target.value);
  };

  return (
    <nav className="bg-blue-700 text-white py-4">
      <div className="container mx-auto flex justify-between items-center">
        <button className="text-3xl font-bold font-heading" href="#">
          <h2>Noman</h2>
        </button>
        
        <ul className="hidden md:flex space-x-6">
          <li><button className="hover:text-gray-200" href="#">Home</button></li>
          <li><Link to='/items' className="hover:text-gray-200" >My Cart<FaCartArrowDown /></Link></li>
          <li><button className="hover:text-gray-200" href="#">Collections</button></li>
          <li><button className="hover:text-gray-200" href="#">Contact Us</button></li>
          <li>
            <input
              type="text"
              placeholder="Search..."
              value={searchQuery}
              onChange={handleSearchInputChange}
              className="px-3 py-1 border text-purple-900 border-gray-400 rounded-md focus:outline-none focus:border-blue-500"
            />
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default NavBar;
