import React from 'react'
import Head from 'next/head'
import Header from '../../../components/Header'
import Footer from '../../../components/Footer'

const oil = () => {
  const oilProducts = [
    {
      id: 1,
      image: 'https://www.rosemacsales.com/assets/images/no_image.png',
      title: '1ltr Nigeria palm oil',
      price: '£0.00',
      buttonText: 'Read More',
    },
    {
      id: 2,
      image: 'https://www.rosemacsales.com/assets/images/no_image.png',
      title: '2litres Nigeria Palm oil',
      price: '£0.00',
      buttonText: 'Read More',
    },
    {
      id: 3,
      image: 'https://www.rosemacsales.com/assets/images/no_image.png',
      title: '4litres Nigeria Palm oil',
      price: '£0.00',
      buttonText: 'Read More',
    },
    {
      id: 4,
      image: 'https://www.rosemacsales.com/assets/images/no_image.png',
      title: '2litres Ayamase oil',
      price: '£0.00',
      buttonText: 'Read More',
    },
    {
      id: 5,
      image: 'https://www.rosemacsales.com/assets/images/no_image.png',
      title: '4litres Ayamase oil',
      price: '£0.00',
      buttonText: 'Read More',
    },
    {
      id: 6,
      image: 'https://www.rosemacsales.com/assets/images/no_image.png',
      title: 'Ghana oil',
      price: '£0.00',
      buttonText: 'Read More',
    },
    {
      id: 7,
      image: 'https://www.rosemacsales.com/assets/images/no_image.png',
      title: '5litres KTC oil',
      price: '£0.00',
      buttonText: 'Read More',
    },
    {
      id: 8,
      image: 'https://www.rosemacsales.com/assets/images/no_image.png',
      title: '10litres KTC oil',
      price: '£0.00',
      buttonText: 'Read More',
    },
  ]

  return (
    <div>
      <Head>
        <title>R&G AFROCARRIBEAN FOODS - Groceries - Oil</title>
      </Head>
      <Header />

      <p className='ml-5 italic mt-5 text-xs cursor-pointer'>
        <span>Home</span>
        <span className="text-gray-500"> {`>`} </span>
        <span className="text-rg_pink-light">Groceries</span>
        <span className="text-gray-500"> {`>`} </span>
        <span className="text-rg_pink-light">Oil</span>
      </p>

      <h1 className="text-3xl ml-5 mt-5 border-b pb-4 font-mono font-black">Oil</h1>


      <main className="grid grid-flow-row-dense md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mx-auto bg-gray-200">
            <div className='relative flex flex-col m-5 bg-white z-30 p-10 shadow-md hover:shadow-2xl cursor-pointer'>
                <p className='absolute top-2 right-2 text-xs italic text-gray-400'>oil</p>
                <img src={oilProducts[0].image} height={200} width={200} objectfit='contain' alt='product image' />
                <h4 className='my-3'>{oilProducts[0].title}</h4>
                <h4 className='my-3 font-extrabold'>{oilProducts[0].price}</h4>
                <button className='mt-3 view' onClick={() => router.push('./')}>View Product</button>
             </div>

             <div className='relative flex flex-col m-5 bg-white z-30 p-10 shadow-md hover:shadow-2xl cursor-pointer'>
                <p className='absolute top-2 right-2 text-xs italic text-gray-400'>oil</p>
                <img src={oilProducts[1].image} height={200} width={200} objectfit='contain' alt='product image' />
                <h4 className='my-3'>{oilProducts[1].title}</h4>
                <h4 className='my-3 font-extrabold'>{oilProducts[1].price}</h4>
                <button className='mt-3 view' onClick={() => router.push('./')}>View Product</button>
             </div>

             <div className='relative flex flex-col m-5 bg-white z-30 p-10 shadow-md hover:shadow-2xl cursor-pointer'>
                <p className='absolute top-2 right-2 text-xs italic text-gray-400'>oil</p>
                <img src={oilProducts[2].image} height={200} width={200} objectfit='contain' alt='product image' />
                <h4 className='my-3'>{oilProducts[2].title}</h4>
                <h4 className='my-3 font-extrabold'>{oilProducts[2].price}</h4>
                <button className='mt-3 view' onClick={() => router.push('./')}>View Product</button>
             </div>

             <div className='relative flex flex-col m-5 bg-white z-30 p-10 shadow-md hover:shadow-2xl cursor-pointer'>
                <p className='absolute top-2 right-2 text-xs italic text-gray-400'>oil</p>
                <img src={oilProducts[3].image} height={500} width={500} objectfit='contain' alt='product image' />
                <h4 className='my-3'>{oilProducts[3].title}</h4>
                <h4 className='my-3 font-extrabold'>{oilProducts[3].price}</h4>
                <button className='mt-3 view' onClick={() => router.push('./')}>View Product</button>
             </div>

             <div className='relative flex flex-col m-5 bg-white z-30 p-10 shadow-md hover:shadow-2xl cursor-pointer'>
                <p className='absolute top-2 right-2 text-xs italic text-gray-400'>oil</p>
                <img src={oilProducts[4].image} height={500} width={500} objectfit='contain' alt='product image' />
                <h4 className='my-3'>{oilProducts[4].title}</h4>
                <h4 className='my-3 font-extrabold'>{oilProducts[4].price}</h4>
                <button className='mt-3 view' onClick={() => router.push('./')}>View Product</button>
             </div>

             <div className='relative flex flex-col m-5 bg-white z-30 p-10 shadow-md hover:shadow-2xl cursor-pointer'>
                <p className='absolute top-2 right-2 text-xs italic text-gray-400'>oil</p>
                <img src={oilProducts[5].image} height={500} width={500} objectfit='contain' alt='product image' />
                <h4 className='my-3'>{oilProducts[5].title}</h4>
                <h4 className='my-3 font-extrabold'>{oilProducts[5].price}</h4>
                <button className='mt-3 view' onClick={() => router.push('./')}>View Product</button>
             </div>

             <div className='relative flex flex-col m-5 bg-white z-30 p-10 shadow-md hover:shadow-2xl cursor-pointer'>
                <p className='absolute top-2 right-2 text-xs italic text-gray-400'>oil</p>
                <img src={oilProducts[6].image} height={500} width={500} objectfit='contain' alt='product image' />
                <h4 className='my-3'>{oilProducts[6].title}</h4>
                <h4 className='my-3 font-extrabold'>{oilProducts[6].price}</h4>
                <button className='mt-3 view' onClick={() => router.push('./')}>View Product</button>
             </div>

             <div className='relative flex flex-col m-5 bg-white z-30 p-10 shadow-md hover:shadow-2xl cursor-pointer'>
                <p className='absolute top-2 right-2 text-xs italic text-gray-400'>oil</p>
                <img src={oilProducts[7].image} height={500} width={500} objectfit='contain' alt='product image' />
                <h4 className='my-3'>{oilProducts[7].title}</h4>
                <h4 className='my-3 font-extrabold'>{oilProducts[7].price}</h4>
                <button className='mt-3 view' onClick={() => router.push('./')}>View Product</button>
             </div>
      </main>

      <Footer />
    </div>
  )
}

export default oil

