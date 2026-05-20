import { useParams } from "react-router";
import "./DetailsProduct.css";

import { useState, useEffect } from "react"

const DetailsProduct =() => {
    const {id} = useParams()
    const [producto,setProducto]=useState(null)
    const [error,setError] = useState(null)

    const {agregarAlCarrito} = useCart();
    const handleAgregarAlCarrito = () => {
        if(producto){
            agregarAlCarrito({
                id:producto.id,
                imagen: producto.image,
                nombre: producto.nombre,
                precio: producto.precio,
                cantidad: 1
            })
        }
    }
    useEffect(() => {
            const fetchProductos =async () =>{
                try {
                    const response =await fetch("https://api-ten-jet.vercel.app/products")
                    if(!response.ok){
                        throw new Error("Error al cargar los productos");
                    }
                    const data =await response.json();
                    setProductos(data)
                } catch (err) {
                    setError(err.message)
                }
            }
            fetchProductos()
        },[id])
        if(error){
            return<h2 className="error-message">{error}</h2>
        }
    return (
        <div className="product-details">
            {
                producto?(
                    <>
                    <img src={producto.image} alt={producto.nombre} className="image-small" />
                    <img src={producto.image} alt={producto.nombre} />
                    <div className="product-infos">
                    <h1>{producto.nombre}</h1>
                    <p className="price">{producto.precio}</p>
                    <p className="description">{producto.description}</p>
                    <div className="size-options">
                        <button>S</button>
                        <button>M</button>
                        <button>L</button>
                        <button>XL</button>
                    </div>
                    <button className="add-to-cart"
                    onClick={handleAgregarAlCarrito}
                    >Añadir al carrito</button>
                    
                    <p className="note">
                        Producto 100%original.EL pago contra reembolso esta
                        disponible para este producto.
                        Politica de devolucion y cabio facil dentro de los 7 dias
                    </p>
                    </div>
                    </>
    ):(
        <p>Cargando producto .......</p>
    )
            }
        </div>
    )
}

export default DetailsProduct