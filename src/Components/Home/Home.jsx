import React, { useState } from "react";
import Search from "../Search/Search";
import ProductList from "../ProductList/ProductList";

const Home =({buscarTermino}) => {
    const [buscarTerminoLocal, setbuscarTerminoLocal] = useState("");
    const handleBuscar =(termino) =>{
        setbuscarTerminoLocal (termino)
    }
    return (
        <>
        <Search onSearch = {handleBuscar}/>
         <ProductList buscarTermino = {buscarTerminoLocal || buscarTermino}/>
        </>
    )
}

export default Home