import React, { useState } from "react";
import "./Search.css";

const Search = ({ onSearch }) => {
  const [buscarTermino, setbuscarTermino] = useState("");

  const handleBuscarChange = (e) => {
    const termino = e.target.value;

    setbuscarTermino(termino);

    onSearch(termino);
  };

  return (
    <section className="search">
      <input
        type="search"
        placeholder="Buscar"
        className="search-bar"
        value={buscarTermino}
        onChange={handleBuscarChange}
      />
    </section>
  );
};

export default Search;