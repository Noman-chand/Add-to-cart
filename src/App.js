import React from 'react'
import Navbar from './E-ComProject/Components/NavBar/Navbar'
import { BrowserRouter , Routes, Route} from "react-router-dom";
import SliderSec from './E-ComProject/Components/Slider/SliderSec';
import CategoryProducts from './E-ComProject/Components/Category/CategoryProducts';
import Footer from './E-ComProject/Components/Footer/Footer';
import SideBar from './E-ComProject/Components/SideBar/SideBar.jsx'

function App() {
  return (
<>
<BrowserRouter>
<Navbar  />
<SliderSec />
<CategoryProducts />


<Routes>
  <Route exact path='/'  />
  <Route  />
</Routes>
<Footer />
</BrowserRouter>

</>  )
}

export default App