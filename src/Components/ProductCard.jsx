import { getProducts } from "../Data/Products"

const ProductCard = () => {
    const Products = getProducts();
    return (
        <>
            {Products.map((product) => (
                <div className=" p-2 rounded-xl" key={product.id}>
                    <img className=" w-fit h-fit  rounded-t-xl" src={product.image} alt="loading..." />
                    <div className=" bg-gray-200 p-2 rounded-b-xl flex flex-col gap-y-3">
                        <h1 className=" text-cyan-700 font-semibold text-xl">{product.name}</h1>
                        <p className="text-md font-medium text-gray-800">${product.price}</p>
                        <div className=" space-x-2">
                            <button className="text-lg font-medium px-2 py-1.5 rounded-lg text-white bg-gray-600 cursor-pointer" to="/auth">View Detail</button>
                            <button className="text-lg font-medium px-2 py-1.5 rounded-lg text-white bg-cyan-600 cursor-grabbing" to="/auth">Add to cart</button>
                        </div>
                    </div>
                </div>
            ))}
        </>

    )
}

export default ProductCard