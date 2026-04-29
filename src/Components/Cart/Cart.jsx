import "./Cart.css";

const Cart =() => {
    const {carrito} = useCart();
    return (
        <div className="cart-container">
            <h2>TU <span>CARRITO</span></h2> 
        </div>
    )
}

export default Cart