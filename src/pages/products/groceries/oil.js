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

      <h1 className="text-3xl ml-5 mt-5 border-b pb-4">Oil</h1>
      <p className="text-1xl ml-5 mt-5 border-b pb-4 cursor-pointer">groceries &gt; oil</p>

      <main className="grid xl:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-4 p-5 ">
      <div className='mt-9 cursor-pointer mx-auto border-b pb-9 hover:border-black p-5' onClick={() => router.push('./canfood')}>
            <img src={oilProducts[0].image} width={200} height={200}/>
            <p className='text-gray-400 hover:text-gray-500 cursor-pointer'>{oilProducts[0].title}</p>
            <p className='text-gray-400 hover:text-gray-500 cursor-pointer'>{oilProducts[0].price}</p>
            <button className='button'>{oilProducts[0].buttonText}</button>
         </div>
         <div className='mt-9 cursor-pointer mx-auto border-b pb-9 hover:border-black p-5' onClick={() => router.push('./canfood')}>
            <img src={oilProducts[1].image} width={200} height={200}/>
            <p className='text-gray-400 hover:text-gray-500 cursor-pointer'>{oilProducts[1].title}</p>
            <p className='text-gray-400 hover:text-gray-500 cursor-pointer'>{oilProducts[1].price}</p>
            <button className='button'>{oilProducts[1].buttonText}</button>
         </div>
         <div className='mt-9 cursor-pointer mx-auto border-b pb-9 hover:border-black p-5' onClick={() => router.push('./canfood')}>
            <img src={oilProducts[2].image} width={200} height={200}/>
            <p className='text-gray-400 hover:text-gray-500 cursor-pointer'>{oilProducts[2].title}</p>
            <p className='text-gray-400 hover:text-gray-500 cursor-pointer'>{oilProducts[2].price}</p>
            <button className='button'>{oilProducts[2].buttonText}</button>
         </div>
         <div className='mt-9 cursor-pointer mx-auto border-b pb-9 hover:border-black p-5' onClick={() => router.push('./canfood')}>
            <img src={oilProducts[3].image} width={200} height={200}/>
            <p className='text-gray-400 hover:text-gray-500 cursor-pointer'>{oilProducts[3].title}</p>
            <p className='text-gray-400 hover:text-gray-500 cursor-pointer'>{oilProducts[3].price}</p>
            <button className='button'>{oilProducts[3].buttonText}</button>
         </div>
      </main>

      <Footer />
    </div>
  )
}

export default oil