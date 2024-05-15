
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './E-comProject/Components/NavBar';
import SliderComp from './E-comProject/Components/SliderComp';
import Category from './E-comProject/Components/Category';
import MenClothing from './E-comProject/Components/CatergoryDetail/MenClothing';
import Footer from './E-comProject/Components/footer/Footer';
import AddItems from './E-comProject/Components/AddItems';

function App() {
  return (
    <>
    <Router>
        <NavBar />
        <SliderComp />
        <Category />
        <Routes>
          <Route path="/category/:category" element={<MenClothing />} />
          <Route path='/items' element={<AddItems />} />
        </Routes>
      </Router>
      <Footer />
    </>
  );
}

export default App;
