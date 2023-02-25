import React from 'react'
import Header from '../../../components/Header'
import Head from "next/head";
import { useRouter } from 'next/router'
import Footer from "../../../components/Footer";

const ethnicFoods = () => {
  const router = useRouter();

  const ethnicFoodsList = [
    {
      id: 1,
      image: 'https://www.rosemacsales.com/assets/images/no_image.png',
      title: 'Dried ugba',
      price: '£0.00',
    },
    {
      id: 2,
      image: 'https://www.rosemacsales.com/assets/images/no_image.png',
      title: 'Abacha',
      price: '£0.00',
    },
    {
      id: 3,
      image: 'https://www.rosemacsales.com/assets/images/no_image.png',
      title: 'Achi',
      price: '£0.00',
    },
    {
      id: 4,
      image: 'https://www.rosemacsales.com/assets/images/no_image.png',
      title: 'Alligator pepper',
      price: '£0.00',
    },
    {
      id: 5,
      image: 'https://www.rosemacsales.com/assets/images/no_image.png',
      title: 'Pepper soup spice',
      price: '£0.00',
    },
    {
      id: 6,
      image: 'https://www.rosemacsales.com/assets/images/no_image.png',
      title: 'Dried Utazi',
      price: '£0.00',
    },
    {
      id: 7,
      image: 'https://www.rosemacsales.com/assets/images/no_image.png',
      title: 'Dried Okazi',
      price: '£0.00',
    },
    {
      id: 8,
      image: 'https://www.rosemacsales.com/assets/images/no_image.png',
      title: 'Dried bitter leaf',
      price: '£0.00',
    },
  ]

  return (
    <div>
        <Head>
        <title>R&G AFROCARRIBEAN FOODS - Groceries</title>
        </Head>
        <Header />

        <p className='ml-5 italic mt-5 text-xs cursor-pointer'>
        <span>Home</span>
        <span className="text-gray-500"> {`>`} </span>
        <span className="text-rg_pink-light">Groceries</span>
      </p>

      <h1 className="text-3xl ml-5 mt-5 border-b pb-4 font-mono font-black">Ethnic Foods</h1>


        <main className="grid grid-flow-row-dense md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mx-auto bg-gray-200">
            <div className='relative flex flex-col m-5 bg-white z-30 p-10 shadow-md hover:shadow-2xl cursor-pointer'>
                <p className='absolute top-2 right-2 text-xs italic text-gray-400'>ethnic foods</p>
                <img src={ethnicFoodsList[0].image} height={200} width={200} objectfit='contain' alt='product image' />
                <h4 className='my-3'>{ethnicFoodsList[0].title}</h4>
                <h4 className='my-3 font-extrabold'>{ethnicFoodsList[0].price}</h4>
                <button className='mt-3 view' onClick={() => router.push('./')}>View Product</button>
            </div>

            <div className='relative flex flex-col m-5 bg-white z-30 p-10 shadow-md hover:shadow-2xl cursor-pointer'>
                <p className='absolute top-2 right-2 text-xs italic text-gray-400'>ethnic foods</p>
                <img src={ethnicFoodsList[1].image} height={200} width={200} objectfit='contain' alt='product image' />
                <h4 className='my-3'>{ethnicFoodsList[1].title}</h4>
                <h4 className='my-3 font-extrabold'>{ethnicFoodsList[0].price}</h4>
                <button className='mt-3 view' onClick={() => router.push('./')}>View Product</button>
            </div>

            <div className='relative flex flex-col m-5 bg-white z-30 p-10 shadow-md hover:shadow-2xl cursor-pointer'>
                <p className='absolute top-2 right-2 text-xs italic text-gray-400'>ethnic foods</p>
                <img src={ethnicFoodsList[2].image} height={200} width={200} objectfit='contain' alt='product image' />
                <h4 className='my-3'>{ethnicFoodsList[2].title}</h4>
                <h4 className='my-3 font-extrabold'>{ethnicFoodsList[2].price}</h4>
                <button className='mt-3 view' onClick={() => router.push('./')}>View Product</button>
            </div>

            <div className='relative flex flex-col m-5 bg-white z-30 p-10 shadow-md hover:shadow-2xl cursor-pointer'>
                <p className='absolute top-2 right-2 text-xs italic text-gray-400'>ethnic foods</p>
                <img src={ethnicFoodsList[3].image} height={200} width={200} objectfit='contain' alt='product image' />
                <h4 className='my-3'>{ethnicFoodsList[3].title}</h4>
                <h4 className='my-3 font-extrabold'>{ethnicFoodsList[3].price}</h4>
                <button className='mt-3 view' onClick={() => router.push('./')}>View Product</button>
            </div>

            <div className='relative flex flex-col m-5 bg-white z-30 p-10 shadow-md hover:shadow-2xl cursor-pointer'>
                <p className='absolute top-2 right-2 text-xs italic text-gray-400'>ethnic foods</p>
                <img src={ethnicFoodsList[4].image} height={200} width={200} objectfit='contain' alt='product image' />
                <h4 className='my-3'>{ethnicFoodsList[4].title}</h4>
                <h4 className='my-3 font-extrabold'>{ethnicFoodsList[4].price}</h4>
                <button className='mt-3 view' onClick={() => router.push('./')}>View Product</button>
            </div>

            <div className='relative flex flex-col m-5 bg-white z-30 p-10 shadow-md hover:shadow-2xl cursor-pointer'>
                <p className='absolute top-2 right-2 text-xs italic text-gray-400'>ethnic foods</p>
                <img src={ethnicFoodsList[5].image} height={200} width={200} objectfit='contain' alt='product image' />
                <h4 className='my-3'>{ethnicFoodsList[5].title}</h4>
                <h4 className='my-3 font-extrabold'>{ethnicFoodsList[5].price}</h4>
                <button className='mt-3 view' onClick={() => router.push('./')}>View Product</button>
            </div>

            <div className='relative flex flex-col m-5 bg-white z-30 p-10 shadow-md hover:shadow-2xl cursor-pointer'>
                <p className='absolute top-2 right-2 text-xs italic text-gray-400'>ethnic foods</p>
                <img src={ethnicFoodsList[6].image} height={200} width={200} objectfit='contain' alt='product image' />
                <h4 className='my-3'>{ethnicFoodsList[6].title}</h4>
                <h4 className='my-3 font-extrabold'>{ethnicFoodsList[6].price}</h4>
                <button className='mt-3 view' onClick={() => router.push('./')}>View Product</button>
            </div>

            <div className='relative flex flex-col m-5 bg-white z-30 p-10 shadow-md hover:shadow-2xl cursor-pointer'>
                <p className='absolute top-2 right-2 text-xs italic text-gray-400'>ethnic foods</p>
                <img src={ethnicFoodsList[7].image} height={200} width={200} objectfit='contain' alt='product image' />
                <h4 className='my-3'>{ethnicFoodsList[7].title}</h4>
                <h4 className='my-3 font-extrabold'>{ethnicFoodsList[7].price}</h4>
                <button className='mt-3 view' onClick={() => router.push('./')}>View Product</button>
            </div>
        </main>

        <Footer />
    </div>
  )
}

export default ethnicFoods
