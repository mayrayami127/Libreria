import { useParams } from "react-router";
import "./DetailsProduct.css";

import { useState, useEffect } from "react";
import { useCart } from "../CartContext/CartContext";

const DetailsProduct = () => {
  const { id } = useParams();

  const [producto, setProducto] = useState(null);
  const [error, setError] = useState(null);

  const { agregarAlCarrito } = useCart();

  const handleAgregarAlCarrito = () => {
    if (producto) {
      agregarAlCarrito({
        id: producto.id,
        imagen: producto.image,
        nombre: producto.nombre,
        precio: producto.precio,
        cantidad: 1,
      });
    }
  };

  useEffect(() => {
    const fetchProducto = async () => {
      try {
        const response = await fetch(
          `http://localhost:3000/books/${id}`
        );

        if (!response.ok) {
          throw new Error("Error al cargar el libro");
        }

        const data = await response.json();
        setProducto(data);
      } catch (err) {
        setError(err.message);
      }
    };

    fetchProducto();
  }, [id]);

  if (error) {
    return <h2 className="error-message">{error}</h2>;
  }

  return (
    <div className="product-details">
  {producto ? (
    <>
      <img
        src={producto.image}
        alt={producto.nombre}
        className="image-small"
      />

      <img
        src={producto.image}
        alt={producto.nombre}
      />

      <div className="product-infos">
        <h1>{producto.nombre}</h1>
        <p className="price">${producto.precio}</p>
        <p className="description">{producto.descripcion}</p>

        <div className="size-options">
          <button>1</button>
          <button>2</button>
          <button>3</button>
          <button>4</button>
        </div>

        <button
          className="add-to-cart"
          onClick={handleAgregarAlCarrito}
        >
          Añadir al carrito
        </button>

        <p className="note">
          Producto 100% original.
        </p>
      </div>
    </>
  ) : (
    <p>Cargando producto...</p>
  )}
</div>
  );
};

export default DetailsProduct;