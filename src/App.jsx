import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Componentes
import Home from "./Components/Home/Home";
import Navbar from "./Components/Navbar/Navbar";
import DetailsProduct from "./Components/DetailsProduct/DetailsProduct";
import Cart from "./Components/Cart/Cart"; 
import Search from "./Components/Search/Search"; 
import Login from "./Components/Login/Login.jsx";
import Signup from "./Components/Login/Signup.jsx";

// Contexto
import { CartProvider } from "./Components/CartContext/CartContext"; 

function App() {

  const [buscarTermino, setbuscarTermino] = useState("");
  const [mostrarBuscador, setMostrarBuscador] = useState(false)

  const handleBuscar = (termino) => {
    setbuscarTerminoLocal(termino.toLowerCase());
  };

  const alternarBuscador = () =>{
    setMostrarBuscador(!mostrarBuscador)
  }

  return (
    <CartProvider>
      <Router>
        <Navbar alternarBuscador = {alternarBuscador}  />
        <Routes>
  <Route path="/" element={<Home buscarTermino={buscarTermino} mostrarBuscador = {mostrarBuscador}/>} />
<Route path="/signup" element={<Signup />} /> {/* <-- Ruta limpia */}  

  <Route path="/home" element={<Home buscarTermino={buscarTermino} />} />
  
  <Route path="/producto/:id" element={<DetailsProduct />} />
  <Route path="/carrito" element={<Cart />} />
  <Route path="/search" element={<Search onSearch={handleBuscar} />} />
</Routes>
      </Router>
    </CartProvider>
  );
}

export default App;