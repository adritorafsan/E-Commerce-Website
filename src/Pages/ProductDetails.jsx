import { useState } from "react";
import { useNavigate, useParams } from "react-router"

import { useEffect } from "react";
import { getProductsbyID } from "../Data/Products";
import { UseCart } from "../context/CartContext";

const ProductDetails = () => {
    const [product, setProduct] = useState(null)
    const { id } = useParams();
    const navigate = useNavigate()

    useEffect(() => {
        const FoundProduct = getProductsbyID(id)
        if (!FoundProduct) {
            
            navigate('/')
            return;
        }
        setProduct(FoundProduct)
    }, [id])

    if (!product) {
        return <h1>Loading....</h1>
    }

    const {cartitems , AddtoCart} = UseCart();
    const Incart = cartitems.find((item)=> item.id === product.id)

    return (
        <div className="w-full flex justify-center items-center mt-14">
            <div className="w-[60%] flex justify-between bg-gray-200 rounded-xl">
                <img className=" rounded-l-xl" src={product.image} alt="" />
                <div className="w-[50%]  flex flex-col items-center justify-center gap-y-5">
                    <h1 className="text-center font-semibold text-3xl text-cyan-500 ">{product.name}</h1>
                    <p className="text-lg font-medium text-gray-800">${product.price}</p>
                    <p className="text-lg font-medium text-gray-800 text-center">{product.description}</p>
                     <button className="text-lg font-medium px-2 py-1.5 rounded-lg text-white bg-cyan-600 cursor-grabbing" onClick={()=>AddtoCart(product.id)}>Add to cart
                                 {Incart ? ` (${Incart.quantity})`:""}
                     </button>
                </div>
            </div>
        </div>
    )
}

export default ProductDetails