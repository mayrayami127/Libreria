import { useCart } from "../CartContext/CartContext"
import "./Navbar.css"
import { Link, useNavigate , useLocation} from "react-router-dom"

const Navbar = ({alternarBuscador}) => {
    const { carrito } = useCart();
    const mavigate = useNavigate();
    const location = useLocation()
    const totalProductos = carrito.reduce((acc, producto) => acc + producto.cantidad, 0)
    const handleHome = () => {
        alternarBuscador();
    }

    if (location.pathname === "/login" || location.pathname === "/" || location.pathname === "/signup") { 
        return (
            <section className="header" style={{ justifyContent: 'center' }}>
                <h1 className="logo" style={{ margin: 0 }}>Only<span>Books</span></h1>
            </section>
        );
    }

    return (
        <section className="header">
            <h1 className="logo">Only<span>Books</span></h1>
            <nav className="navbar">
                <ul className="nav-links">
                    <li>
                        <Link to="/home">Home</Link>
                    </li>
                </ul>
            </nav>
            <div className="icons">
                <button className='search-button' onClick={handleHome}>
                    <i className='fas fa-search'></i>
                </button>
                <Link to="/carrito" className="icon-button">
                    <i className='fas fa-shopping-cart'></i>
                    <span className='counter'>{totalProductos}</span>
                </Link>
            </div> {}
        </section>
    );
}

export default Navbar;