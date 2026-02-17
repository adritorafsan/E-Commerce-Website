import { UseCart } from "../context/CartContext"


const CheckOut = () => {
  const { ProductwithDetails, cartitems, removeProduct, UpdatedProduct } = UseCart()
  const productDetails = ProductwithDetails()
  return (
    <div className="w-full h-screen mt-10">
      <div className="w-full flex justify-center items-center mt-20">
        <div className="w-[70%] ">
          <h2 className=" text-3xl font-semibold text-cyan-500 text-start mb-8">Your Cart:</h2>
          {productDetails.map((item) => {
            return <div key={item.id} className=" bg-gray-200 rounded-xl p-4 flex justify-between">
              <div className="flex flex-col gap-y-3.5">
                <img className="w-25 h-25" src={item.product.image} alt="yoy" />
                <div>
                  <h1>{item.product.name}</h1>
                  <p>${item.product.price} each</p>
                </div>
              </div>
              <div>
                <div className=" flex gap-x-3 mb-3">

                  <button onClick={() => UpdatedProduct(item.id, -1)} className=" text-2xl w-10 rounded-lg text-center cursor-pointer bg-white">-</button>
                  <p className="font-semibold text-3xl text-gray-800">{item.quantity}</p>
                  <button onClick={() => UpdatedProduct(item.id, +1)} className=" text-2xl w-10 rounded-lg text-center cursor-pointer bg-white">+</button>
                </div>
                <p className="font-medium text-xl text-gray-800 mb-2">{item.product.price * item.quantity}</p>
                <button className="bg-red-400 px-2 py-1 text-white rounded-lg cursor-pointer" onClick={() => removeProduct(item.id)}>Remove</button>
              </div>
            </div>
          })}
          {/*  */}
        </div>
      </div>
    </div>
  )
}

export default CheckOut