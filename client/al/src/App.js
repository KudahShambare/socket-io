import './App.css';
import {Routes,Route} from "react-router-dom";

import  { useState} from "react";

//import routes

import Home from "./pages/Home";
import Shopping from "./pages/Shopping";
import Cart  from "./pages/Cart";


function App() {

  
  const [cart,setCart] = useState([]);
  return (
    <div className="App">

    <Routes>

    <Route exact path="/" element={<Home/>}/>
    <Route exact path="/shop" element={<Shopping setCart={setCart} cart={cart}/>}/>
    <Route exact path="/cart" element={<Cart cart={cart} setCart={setCart}/>}/>




    </Routes>
     
    </div>
  );
}

export default App;
