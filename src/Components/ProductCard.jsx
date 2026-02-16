import { UseCart } from "../context/CartContext";
import { getProducts } from "../Data/Products"
import { Link } from "react-router";

const ProductCard = () => {
    const Products = getProducts();
    const { cartitems, AddtoCart } = UseCart();

    return (
        <>
            {Products.map((product) => {
                const Incart = cartitems.find((item) => item.id === product.id)
                return (
                
                <div className="hover:scale-104 transition ease-out duration-200 p-2 rounded-xl" key={product.id}>
                    
                    <img className=" w-fit h-fit  rounded-t-xl " src={product.image} alt="loading..." />
                    <div className=" bg-gray-200 p-2 rounded-b-xl flex flex-col gap-y-3">
                        <h1 className=" text-cyan-700 font-semibold text-xl">{product.name}</h1>
                        <p className="text-md font-medium text-gray-800">${product.price}</p>
                        <div className=" space-x-2">
                            <Link to={`/product/${product.id}`} className="text-lg font-medium px-2 py-1.5 rounded-lg text-white bg-gray-600 cursor-pointer" >View Detail</Link>
                            <button className="text-lg font-medium px-2 py-1.5 rounded-lg text-white bg-cyan-600 cursor-grabbing" onClick={()=>AddtoCart(product.id)}>Add to cart
                                {Incart ? `(${Incart.quantity})`:""}
                            </button>
                        </div>
                    </div>
                </div>
                )
            })}
        </>

    )
}

export default ProductCard