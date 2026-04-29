import {BrowserRouter as Router,Routes,Route} from "react-router-dom"
import Home from "./Components/Home/Home"
import Login from "./Components/Login/Login"
import Navbar from "./Components/Navbar/Navbar"
import DetailsProduct from "./Components/DetailsProduct/DetailsProduct"
import { CacheProvider } from "./Components/CartContext/CartContext"

function App() {
  

  return (
    <>
    <CartProvider>
      <Router>
       <Navbar/>
        <Routes>
          
          <Route path="/" element ={ <Home/>}/>
          <Route path="/producto/:id" element ={ <DetailsProduct/>}/>
        </Routes>
        </Router>
        </CartProvider>
    </>
  )
}

export default App
