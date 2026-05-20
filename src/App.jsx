import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Components/Home/Home";
import Navbar from "./Components/Navbar/Navbar";
import DetailsProduct from "./Components/DetailsProduct/DetailsProduct";
import Cart from "./Components/Cart/Cart"; // ¡Faltaba importar!
import Search from "./Components/Search/Search"; // ¡Faltaba importar!
import { CartProvider } from "./Components/CartContext/CartContext"; // Se corrigió para que coincida con la etiqueta de abajo
import { useState } from "react";
import React from 'react';
import Login from "./Components/Login/Login";
function App() {
  // Estado corregido para usar en Home
  const [buscarTerminoLocal, setbuscarTerminoLocal] = useState("");

  const handleBuscar = (termino) => {
    setbuscarTerminoLocal(termino.toLowerCase());
  };

  return (
    <>
      <CartProvider>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home buscarTermino={buscarTerminoLocal} />} />
            <Route path="/producto/:id" element={<DetailsProduct />} />
            <Route path="/carrito" element={<Cart />} />
            <Route path="/search" element={<Search onSearch={handleBuscar} />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </Router>
      </CartProvider>
    </>
  );
}

export default App;
