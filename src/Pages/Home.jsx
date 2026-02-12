import ProductCard from "../Components/ProductCard"


const Home = () => {
  
  return (
    <div className='w-full h-screen'>
      <div className='w-full flex justify-center flex-col gap-y-10 items-center mt-20'>
        <div className=' space-x-3'>
          <h1 className='text-3xl font-semibold text-gray-800 text-center'>Welcome to <span>Amazy</span></h1>
          <p className='text-lg font-medium text-gray-500'>Discover amazing products at great prices</p>
        </div>
        <div className=" space-y-8">
          <h1 className="text-xl font-semibold text-gray-900">Products You Love</h1>
          <div className=" grid grid-cols-3 gap-x-4 gap-y-8">
           <ProductCard />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home