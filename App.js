import React from 'react';
import NavBar from './Ecom/NavBar';
import { BrowserRouter,Routes,Route } from "react-router-dom";
import Cart from './Ecom/Cart';

function App() {
    return (
    <>
<BrowserRouter>
<Routes>
<Route exact path='/' element = {<NavBar/>}/>
<Route path='cart' element= {<Cart />} />
</Routes>

</BrowserRouter>



       
    </>
    );
}

export default App;
