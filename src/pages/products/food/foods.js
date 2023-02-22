import React from 'react'
import Footer from '../../../components/Footer'
import Header from '../../../components/Header'

const foods = () => {
  const foodItems = [
    {
      id: 1,
      image: 'https://www.rosemacsales.com/assets/images/no_image.png',
      title: '4kg Ofada rice',
      price: '£0.00',
    },
    {
      id: 2,
      image: 'https://www.rosemacsales.com/assets/images/no_image.png',
      title: '4kg honey beans',
      price: '£0.00',
    },
    {
      id: 3,
      image: 'https://www.rosemacsales.com/assets/images/no_image.png',
      title: '20kg honey beans',
      price: '£0.00',
    },
    {
      id: 4,
      image: 'https://www.rosemacsales.com/assets/images/no_image.png',
      title: 'Indomie chicken noodles',
      price: '£0.00',
    },
    {
      id: 5,
      image: 'https://www.rosemacsales.com/assets/images/no_image.png',
      title: 'Indomie noodles onion',
      price: '£0.00',
    },
    {
      id: 6,
      image: 'https://www.rosemacsales.com/assets/images/no_image.png',
      title: 'Indomie noodles hungry man',
      price: '£0.00',
    },
    {
      id: 7,
      image: 'https://www.rosemacsales.com/assets/images/no_image.png',
      title: 'Indomie noodles chicken pepper soup',
      price: '£0.00',
    },
    {
      id: 8,
      image: 'https://www.rosemacsales.com/assets/images/no_image.png',
      title: 'Peeled beans',
      price: '£0.00',
    },

  ]
  return (
    <div>
        <Header />
        
        <p className='ml-5 italic mt-5 text-xs cursor-pointer'>
        <span>Home</span>
        <span className="text-gray-500"> {`>`} </span>
        <span className="text-rg_pink-light">Foods</span>
      </p>

      <h1 className="text-3xl ml-5 mt-5 border-b pb-4 font-mono font-black">Foods</h1>

      <main className="grid grid-flow-row-dense md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mx-auto bg-gray-200">
          <div className='relative flex flex-col m-5 bg-white z-30 p-10 shadow-md hover:shadow-2xl cursor-pointer'>
            <p className='absolute top-2 right-2 text-xs italic text-gray-400'>foods</p>
            <img src={foodItems[0].image} height={200} width={200} objectfit='contain' alt='product image' />
            <h4 className='my-3'>{foodItems[0].title}</h4>
            <h4 className='my-3 font-extrabold'>{foodItems[0].price}</h4>
            <button className='mt-3 view' onClick={() => router.push('./')}>View Product</button>
          </div>

          <div className='relative flex flex-col m-5 bg-white z-30 p-10 shadow-md hover:shadow-2xl cursor-pointer'>
            <p className='absolute top-2 right-2 text-xs italic text-gray-400'>foods</p>
            <img src={foodItems[1].image} height={200} width={200} objectfit='contain' alt='product image' />
            <h4 className='my-3'>{foodItems[1].title}</h4>
            <h4 className='my-3 font-extrabold'>{foodItems[1].price}</h4>
            <button className='mt-3 view' onClick={() => router.push('./')}>View Product</button>
          </div>

          <div className='relative flex flex-col m-5 bg-white z-30 p-10 shadow-md hover:shadow-2xl cursor-pointer'>
            <p className='absolute top-2 right-2 text-xs italic text-gray-400'>foods</p>
            <img src={foodItems[2].image} height={200} width={200} objectfit='contain' alt='product image' />
            <h4 className='my-3'>{foodItems[2].title}</h4>
            <h4 className='my-3 font-extrabold'>{foodItems[2].price}</h4>
            <button className='mt-3 view' onClick={() => router.push('./')}>View Product</button>
          </div>

          <div className='relative flex flex-col m-5 bg-white z-30 p-10 shadow-md hover:shadow-2xl cursor-pointer'>
            <p className='absolute top-2 right-2 text-xs italic text-gray-400'>foods</p>
            <img src={foodItems[3].image} height={200} width={200} objectfit='contain' alt='product image' />
            <h4 className='my-3'>{foodItems[3].title}</h4>
            <h4 className='my-3 font-extrabold'>{foodItems[3].price}</h4>
            <button className='mt-3 view' onClick={() => router.push('./')}>View Product</button>
          </div>

          <div className='relative flex flex-col m-5 bg-white z-30 p-10 shadow-md hover:shadow-2xl cursor-pointer'>
            <p className='absolute top-2 right-2 text-xs italic text-gray-400'>foods</p>
            <img src={foodItems[4].image} height={200} width={200} objectfit='contain' alt='product image' />
            <h4 className='my-3'>{foodItems[4].title}</h4>
            <h4 className='my-3 font-extrabold'>{foodItems[4].price}</h4>
            <button className='mt-3 view' onClick={() => router.push('./')}>View Product</button>
          </div>

          <div className='relative flex flex-col m-5 bg-white z-30 p-10 shadow-md hover:shadow-2xl cursor-pointer'>
            <p className='absolute top-2 right-2 text-xs italic text-gray-400'>foods</p>
            <img src={foodItems[5].image} height={200} width={200} objectfit='contain' alt='product image' />
            <h4 className='my-3'>{foodItems[5].title}</h4>
            <h4 className='my-3 font-extrabold'>{foodItems[5].price}</h4>
            <button className='mt-3 view' onClick={() => router.push('./')}>View Product</button>
          </div>

          <div className='relative flex flex-col m-5 bg-white z-30 p-10 shadow-md hover:shadow-2xl cursor-pointer'>
            <p className='absolute top-2 right-2 text-xs italic text-gray-400'>foods</p>
            <img src={foodItems[6].image} height={200} width={200} objectfit='contain' alt='product image' />
            <h4 className='my-3'>{foodItems[6].title}</h4>
            <h4 className='my-3 font-extrabold'>{foodItems[6].price}</h4>
            <button className='mt-3 view' onClick={() => router.push('./')}>View Product</button>
          </div>

          <div className='relative flex flex-col m-5 bg-white z-30 p-10 shadow-md hover:shadow-2xl cursor-pointer'>
            <p className='absolute top-2 right-2 text-xs italic text-gray-400'>foods</p>
            <img src={foodItems[7].image} height={200} width={200} objectfit='contain' alt='product image' />
            <h4 className='my-3'>{foodItems[7].title}</h4>
            <h4 className='my-3 font-extrabold'>{foodItems[7].price}</h4>
            <button className='mt-3 view' onClick={() => router.push('./')}>View Product</button>
          </div>
      </main>

      <Footer />
    </div>
  )
}

export default foods