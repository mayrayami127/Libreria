import React, { useState } from "react";
import Search from "../Search/Search";
import ProductList from "../ProductList/ProductList";
import Hero from "../Hero/Hero";

const Home =({buscarTermino, mostrarBuscador}) => {
    const [buscarTerminoLocal, setbuscarTerminoLocal] = useState("");
    const handleBuscar =(termino) =>{
        setbuscarTerminoLocal (termino)
    }
    return (
        <>
        {!mostrarBuscador && <Hero/>}
        {mostrarBuscador && <Search onSearch={handleBuscar}/>}

         <ProductList buscarTermino = {buscarTerminoLocal || buscarTermino}/>
        </>
    )
}

export default Home