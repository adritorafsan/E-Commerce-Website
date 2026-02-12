import { Route, Routes } from "react-router"
import Home from "./Pages/Home"
import CheckOut from "./Pages/CheckOut"
import AuthPage from "./Pages/AuthPage"
import Navbar from "./Components/Navbar"

function App() {


  return (
    
      <div>
        <Navbar />


        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/checkout" element={<CheckOut />} />
          <Route path="/auth" element={<AuthPage />} />
        </Routes>
      </div>
      
    
  )
}

export default App
