import React from 'react'
import Head from 'next/head'
import Header from '../../../components/Header'
import Footer from '../../../components/Footer'

const oil = () => {
  const oilProducts = [
    {
      id: 1,
      image: 'https://www.rgafrocaribbeanfoods.com/wp-content/uploads/2020/07/rg-afro-caribbean-foods-4litre-oil.jpg',
      title: 'R&G Undiluted Palm oil - 4 litre',
      price: '£0.00',
      buttonText: 'Read More',
    },
    {
      id: 2,
      image: 'https://www.rgafrocaribbeanfoods.com/wp-content/uploads/2020/07/rg-afro-caribbean-foods-2ltr-oil.jpg',
      title: 'R&G Undiluted Palm oil - 1 litre',
      price: '£0.00',
      buttonText: 'Read More',
    },
    {
      id: 3,
      image: 'https://www.rgafrocaribbeanfoods.com/wp-content/uploads/2020/07/rg-afro-caribbean-foods-2ltr-oil.jpg',
      title: 'R&G Undiluted Palm oil - 4 litre',
      price: '£0.00',
      buttonText: 'Read More',
    },
    {
      id: 4,
      image: 'https://www.rgafrocaribbeanfoods.com/wp-content/uploads/2020/07/rg-afro-caribbean-foods-bleached-2.5litre-1.jpg',
      title: 'Bleaches pure Nigeril Palm oil',
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
                <button className='mt-3 view' onClick={() => router.push('./')}>View Product</button>
             </div>

             <div className='relative flex flex-col m-5 bg-white z-30 p-10 shadow-md hover:shadow-2xl cursor-pointer'>
                <p className='absolute top-2 right-2 text-xs italic text-gray-400'>oil</p>
                <img src={oilProducts[1].image} height={200} width={200} objectfit='contain' alt='product image' />
                <h4 className='my-3'>{oilProducts[1].title}</h4>
                <button className='mt-3 view' onClick={() => router.push('./')}>View Product</button>
             </div>

             <div className='relative flex flex-col m-5 bg-white z-30 p-10 shadow-md hover:shadow-2xl cursor-pointer'>
                <p className='absolute top-2 right-2 text-xs italic text-gray-400'>oil</p>
                <img src={oilProducts[2].image} height={200} width={200} objectfit='contain' alt='product image' />
                <h4 className='my-3'>{oilProducts[2].title}</h4>
                <button className='mt-3 view' onClick={() => router.push('./')}>View Product</button>
             </div>

             <div className='relative flex flex-col m-5 bg-white z-30 p-10 shadow-md hover:shadow-2xl cursor-pointer'>
                <p className='absolute top-2 right-2 text-xs italic text-gray-400'>oil</p>
                <img src={oilProducts[3].image} height={500} width={500} objectfit='contain' alt='product image' />
                <h4 className='my-3'>{oilProducts[3].title}</h4>
                <button className='mt-3 view' onClick={() => router.push('./')}>View Product</button>
             </div>
      </main>

      <Footer />
    </div>
  )
}

export default oil

