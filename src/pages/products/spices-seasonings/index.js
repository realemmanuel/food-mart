import React from 'react'
import Head from "next/head";
import { useRouter } from 'next/router'
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";

const index = () => {
    const router = useRouter();

    const spicesSeasoningsProducts = [
        {
            id: 1,
            image: 'https://www.rosemacsales.com/assets/images/no_image.png',
            title: 'Ducros Curry Powder 25g',
            price: '£0.00',
          },
          {
            id: 2,
            image: 'https://www.rosemacsales.com/assets/images/no_image.png',
            title: 'Ducros Thyme Powder 25g',
            price: '£0.00',
          },
          {
            id: 3,
            image: 'https://www.rosemacsales.com/assets/images/no_image.png',
            title: 'Ground Red Hot Chili Pepper',
            price: '£0.00',
          },
          {
            id: 4,
            image: 'https://www.rosemacsales.com/assets/images/no_image.png',
            title: 'Maggie Star Seasoning 4g x 100 Cubes',
            price: '£0.00',
          },
          {
            id: 5,
            image: 'https://www.rosemacsales.com/assets/images/no_image.png',
            title: 'Mr Chef fried rice flavour',
            price: '£0.00',
          },
          {
            id: 6,
            image: 'https://www.rosemacsales.com/assets/images/no_image.png',
            title: 'Mr Chef Jollof seasoning',
            price: '£0.00',
          },
          {
            id: 7,
            image: 'https://www.rosemacsales.com/assets/images/no_image.png',
            title: 'R & G Pepper Soup Spice 100g',
            price: '£0.00',
          },
          {
            id: 8,
            image: 'https://www.rosemacsales.com/assets/images/no_image.png',
            title: 'Suya Pepper',
            price: '£0.00',
          },
          {
            id: 9,
            image: 'https://www.rosemacsales.com/assets/images/no_image.png',
            title: 'Cameroon Ground Hot Chili Pepper',
            price: '£0.00',
          },
          {
            id: 10,
            image: 'https://www.rosemacsales.com/assets/images/no_image.png',
            title: 'R & G Hot chili pepper whole',
            price: '£0.00',
          },
    ]
  return (
    <div>
        <Header />

        <p className='ml-5 italic mt-5 text-xs cursor-pointer'>
        <span>Home</span>
        <span className="text-gray-500"> {`>`} </span>
        <span className="text-rg_pink-light">Groceries</span>
        <span className="text-gray-500"> {`>`} </span>
        <span className="text-rg_pink-light">Spices & Seasonings</span>
      </p>

      <h1 className="text-3xl ml-5 mt-5 border-b pb-4 font-mono font-black">Spices & Seasonings</h1>

      <main className="grid grid-flow-row-dense md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mx-auto bg-gray-200">
          <div className='relative flex flex-col m-5 bg-white z-30 p-10 shadow-md hover:shadow-2xl cursor-pointer'>
              <p className='absolute top-2 right-2 text-xs italic text-gray-400'>spices & seasonings</p>
              <img src={spicesSeasoningsProducts[0].image} height={200} width={200} objectfit='contain' alt='product image' />
              <h4 className='my-3'>{spicesSeasoningsProducts[0].title}</h4>
              <button className='mt-3 view' onClick={() => router.push('/')}>View Product</button>
          </div>

          <div className='relative flex flex-col m-5 bg-white z-30 p-10 shadow-md hover:shadow-2xl cursor-pointer'>
              <p className='absolute top-2 right-2 text-xs italic text-gray-400'>spices & seasonings</p>
              <img src={spicesSeasoningsProducts[1].image} height={200} width={200} objectfit='contain' alt='product image' />
              <h4 className='my-3'>{spicesSeasoningsProducts[1].title}</h4>
              <button className='mt-3 view' onClick={() => router.push('/')}>View Product</button>
          </div>

          <div className='relative flex flex-col m-5 bg-white z-30 p-10 shadow-md hover:shadow-2xl cursor-pointer'>
              <p className='absolute top-2 right-2 text-xs italic text-gray-400'>spices & seasonings</p>
              <img src={spicesSeasoningsProducts[2].image} height={200} width={200} objectfit='contain' alt='product image' />
              <h4 className='my-3'>{spicesSeasoningsProducts[2].title}</h4>
              <button className='mt-3 view' onClick={() => router.push('/')}>View Product</button>
          </div>

          <div className='relative flex flex-col m-5 bg-white z-30 p-10 shadow-md hover:shadow-2xl cursor-pointer'>
              <p className='absolute top-2 right-2 text-xs italic text-gray-400'>spices & seasonings</p>
              <img src={spicesSeasoningsProducts[3].image} height={200} width={200} objectfit='contain' alt='product image' />
              <h4 className='my-3'>{spicesSeasoningsProducts[3].title}</h4>
              <button className='mt-3 view' onClick={() => router.push('/')}>View Product</button>
          </div>

          <div className='relative flex flex-col m-5 bg-white z-30 p-10 shadow-md hover:shadow-2xl cursor-pointer'>
              <p className='absolute top-2 right-2 text-xs italic text-gray-400'>spices & seasonings</p>
              <img src={spicesSeasoningsProducts[4].image} height={200} width={200} objectfit='contain' alt='product image' />
              <h4 className='my-3'>{spicesSeasoningsProducts[4].title}</h4>
              <button className='mt-3 view' onClick={() => router.push('/')}>View Product</button>
          </div>

          <div className='relative flex flex-col m-5 bg-white z-30 p-10 shadow-md hover:shadow-2xl cursor-pointer'>
              <p className='absolute top-2 right-2 text-xs italic text-gray-400'>spices & seasonings</p>
              <img src={spicesSeasoningsProducts[5].image} height={200} width={200} objectfit='contain' alt='product image' />
              <h4 className='my-3'>{spicesSeasoningsProducts[5].title}</h4>
              <button className='mt-3 view' onClick={() => router.push('/')}>View Product</button>
          </div>

          <div className='relative flex flex-col m-5 bg-white z-30 p-10 shadow-md hover:shadow-2xl cursor-pointer'>
              <p className='absolute top-2 right-2 text-xs italic text-gray-400'>spices & seasonings</p>
              <img src={spicesSeasoningsProducts[6].image} height={200} width={200} objectfit='contain' alt='product image' />
              <h4 className='my-3'>{spicesSeasoningsProducts[6].title}</h4>
              <button className='mt-3 view' onClick={() => router.push('/')}>View Product</button>
          </div>

          <div className='relative flex flex-col m-5 bg-white z-30 p-10 shadow-md hover:shadow-2xl cursor-pointer'>
              <p className='absolute top-2 right-2 text-xs italic text-gray-400'>spices & seasonings</p>
              <img src={spicesSeasoningsProducts[7].image} height={200} width={200} objectfit='contain' alt='product image' />
              <h4 className='my-3'>{spicesSeasoningsProducts[7].title}</h4>
              <button className='mt-3 view' onClick={() => router.push('/')}>View Product</button>
          </div>

          <div className='relative flex flex-col m-5 bg-white z-30 p-10 shadow-md hover:shadow-2xl cursor-pointer'>
              <p className='absolute top-2 right-2 text-xs italic text-gray-400'>spices & seasonings</p>
              <img src={spicesSeasoningsProducts[8].image} height={200} width={200} objectfit='contain' alt='product image' />
              <h4 className='my-3'>{spicesSeasoningsProducts[8].title}</h4>
              <button className='mt-3 view' onClick={() => router.push('/')}>View Product</button>
          </div>

          <div className='relative flex flex-col m-5 bg-white z-30 p-10 shadow-md hover:shadow-2xl cursor-pointer'>
              <p className='absolute top-2 right-2 text-xs italic text-gray-400'>spices & seasonings</p>
              <img src={spicesSeasoningsProducts[9].image} height={200} width={200} objectfit='contain' alt='product image' />
              <h4 className='my-3'>{spicesSeasoningsProducts[9].title}</h4>
              <button className='mt-3 view' onClick={() => router.push('/')}>View Product</button>
          </div>
      </main>

        <Footer />
    </div>
  )
}

export default index