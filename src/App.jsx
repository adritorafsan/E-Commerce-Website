import { Route, Routes } from "react-router"
import Home from "./Pages/Home"
import CheckOut from "./Pages/CheckOut"
import AuthPage from "./Pages/AuthPage"
import Navbar from "./Components/Navbar"
import ProductDetails from "./Pages/ProductDetails"
import CartProvider from "./context/CartContext"

function App() {


  return (

    <div>
      <Navbar />

      <CartProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/checkout" element={<CheckOut />} />
          <Route path="/auth" element={<AuthPage />} />
          <Route path="/product/:id" element={<ProductDetails />} />
        </Routes>
      </CartProvider>
    </div>


  )
}

export default App
