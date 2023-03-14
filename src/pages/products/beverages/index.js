import React from 'react'
import Head from "next/head";
import { useRouter } from 'next/router'
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";

const index = () => {
    const router = useRouter();

    const beveragesProducts = [
      {
          id: 1,
          image: 'https://www.rosemacsales.com/assets/images/no_image.png',
          title: 'Title Not Available',
          price: '£0.00',
        },
        {
          id: 2,
          image: 'https://www.rosemacsales.com/assets/images/no_image.png',
          title: 'Title Not Available',
          price: '£0.00',
        },
        {
          id: 3,
          image: 'https://www.rosemacsales.com/assets/images/no_image.png',
          title: 'Title Not Available',
          price: '£0.00',
        },
        {
          id: 4,
          image: 'https://www.rosemacsales.com/assets/images/no_image.png',
          title: 'Title Not Available',
          price: '£0.00',
        },
      ]
  return (
    <div>
        <Header />

        <main className="grid grid-flow-row-dense md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mx-auto bg-gray-200">
          <div className='relative flex flex-col m-5 bg-white z-30 p-10 shadow-md hover:shadow-2xl cursor-pointer'>
              <p className='absolute top-2 right-2 text-xs italic text-gray-400'>beverages</p>
              <img src={beveragesProducts[0].image} height={200} width={200} objectfit='contain' alt='product image' />
              <h4 className='my-3'>{beveragesProducts[0].title}</h4>
              <h4 className='my-3 font-extrabold'>{beveragesProducts[0].price}</h4>
              <button className='mt-3 view' onClick={() => router.push('/')}>View Product</button>
          </div>

          <div className='relative flex flex-col m-5 bg-white z-30 p-10 shadow-md hover:shadow-2xl cursor-pointer'>
              <p className='absolute top-2 right-2 text-xs italic text-gray-400'>beverages</p>
              <img src={beveragesProducts[1].image} height={200} width={200} objectfit='contain' alt='product image' />
              <h4 className='my-3'>{beveragesProducts[1].title}</h4>
              <h4 className='my-3 font-extrabold'>{beveragesProducts[1].price}</h4>
              <button className='mt-3 view' onClick={() => router.push('/')}>View Product</button>
          </div>

          <div className='relative flex flex-col m-5 bg-white z-30 p-10 shadow-md hover:shadow-2xl cursor-pointer'>
              <p className='absolute top-2 right-2 text-xs italic text-gray-400'>beverages</p>
              <img src={beveragesProducts[2].image} height={200} width={200} objectfit='contain' alt='product image' />
              <h4 className='my-3'>{beveragesProducts[2].title}</h4>
              <h4 className='my-3 font-extrabold'>{beveragesProducts[2].price}</h4>
              <button className='mt-3 view' onClick={() => router.push('/')}>View Product</button>
          </div>

          <div className='relative flex flex-col m-5 bg-white z-30 p-10 shadow-md hover:shadow-2xl cursor-pointer'>
              <p className='absolute top-2 right-2 text-xs italic text-gray-400'>beverages</p>
              <img src={beveragesProducts[3].image} height={200} width={200} objectfit='contain' alt='product image' />
              <h4 className='my-3'>{beveragesProducts[3].title}</h4>
              <h4 className='my-3 font-extrabold'>{beveragesProducts[3].price}</h4>
              <button className='mt-3 view' onClick={() => router.push('/')}>View Product</button>
          </div>

        </main>


        <Footer />
    </div>
  )
}

export default index