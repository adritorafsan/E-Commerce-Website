import { Link } from "react-router"

const Navbar = () => {
  return (
    <nav className="bg-white drop-shadow-gray-800 shadow-xl w-full mt-1 py-2 px-4 ">
        <div className="flex items-center justify-between mx-5">
            <div>
                <Link className="text-3xl font-semibold text-cyan-700 cursor-pointer text-center" to="/">Amazy</Link>
            </div>
            <div className=" space-x-8">
                <Link className="text-xl font-medium text-gray-900 hover:text-cyan-600" to="/">Home</Link>
                <Link className="text-xl font-medium text-gray-900 hover:text-cyan-600" to="/checkout">Cart</Link>
            </div>
            <div className=" space-x-2">
                <Link className="text-lg font-medium px-2 py-1.5 rounded-lg text-white bg-gray-600" to="/auth">Login</Link>
                <Link className="text-lg font-medium px-2 py-1.5 rounded-lg text-white bg-cyan-600 " to="/auth">Sign Up</Link>
            </div>
        </div>
    </nav>
  )
}

export default Navbar