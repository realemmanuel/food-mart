import React from 'react'
import Head from "next/head";
import { useRouter } from 'next/router'
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";

const groceries = () => {
    const router = useRouter();
    
    const groceriesProduct = [
        {
            id: 1,
            image: 'https://www.rgafrocaribbeanfoods.com/wp-content/uploads/2020/07/ingre.jpg',
            title: 'Spices & Seasonings',
        },
        {
            id: 2,
            image: 'https://www.rgafrocaribbeanfoods.com/wp-content/uploads/2020/07/ingre.jpg',
            title: 'Cooking Ingredients',
        },
        {
            id: 3,
            image: 'https://www.rgafrocaribbeanfoods.com/wp-content/uploads/2020/07/rg-afro-caribbean-foods-palm-oil-gallery-300x300.jpg',
            title: '100% Pure Nigerian Palm Oil',
        },
        {
            id: 4,
            image: 'https://www.rgafrocaribbeanfoods.com/wp-content/uploads/2020/07/beveragesdrink-150x150.jpg',
            title: 'Beverages',
        },
        {
            id: 5,
            image: 'https://www.rgafrocaribbeanfoods.com/wp-content/uploads/2020/07/beanpastarice-150x150.jpg',
            title: 'Rice, Pasta & Beans',
        },
        {
            id: 6,
            image: 'https://www.rgafrocaribbeanfoods.com/wp-content/uploads/2020/07/drinksthumb-149x150.jpg',
            title: 'Drinks',
        },
        {
            id: 7,
            image: 'https://www.rgafrocaribbeanfoods.com/wp-content/uploads/2020/07/rg-afro-caribbean-foods-flourthumbnail-300x300.jpg',
            title: 'Garri',
        },
        {
            id: 8,
            image: 'https://www.rgafrocaribbeanfoods.com/wp-content/uploads/2020/07/rg-afro-caribbean-foods-nuts-range-300x300.jpg',
            title: 'Snacks',
        },
    ]

  return (
    <div className="bg-gray-100">
        <Head>
        <title>R&G AFROCARRIBEAN FOODS - Groceries</title>
      </Head>
      <Header />

      <p className='ml-5 italic mt-5 text-xs cursor-pointer'>
        <span>Home</span>
        <span className="text-gray-500"> {`>`} </span>
        <span className="text-rg_pink-light">Groceries</span>
      </p>

      <h1 className="text-3xl ml-5 mt-5 border-b pb-4 font-mono font-black">Groceries</h1>

     <main className="grid grid-flow-row-dense md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mx-auto bg-gray-200">
        <div className='relative flex flex-col m-5 bg-white z-30 p-10 shadow-md hover:shadow-2xl cursor-pointer'>
            <p className='absolute top-2 right-2 text-xs italic text-gray-400'>groceries</p>
            <img src={groceriesProduct[0].image} height={200} width={200} objectfit='contain' alt='product image' />
            <h4 className='my-3'>{groceriesProduct[0].title}</h4>
            <button className='mt-3 view' onClick={() => router.push('/products/spices-seasonings')}>View Product</button>
        </div>

        <div className='relative flex flex-col m-5 bg-white z-30 p-10 shadow-md hover:shadow-2xl cursor-pointer'>
            <p className='absolute top-2 right-2 text-xs italic text-gray-400'>groceries</p>
            <img src={groceriesProduct[1].image} height={200} width={200} objectfit='contain' alt='product image' />
            <h4 className='my-3'>{groceriesProduct[1].title}</h4>
            <button className='mt-3 view' onClick={() => router.push('/products/cooking-ingredient')}>View Product</button>
        </div>

        <div className='relative flex flex-col m-5 bg-white z-30 p-10 shadow-md hover:shadow-2xl cursor-pointer'>
            <p className='absolute top-2 right-2 text-xs italic text-gray-400'>groceries</p>
            <img src={groceriesProduct[2].image} height={200} width={200} objectfit='contain' alt='product image' />
            <h4 className='my-3'>{groceriesProduct[2].title}</h4>
            <button className='mt-3 view' onClick={() => router.push('/products/oil')}>View Product</button>
        </div>

        <div className='relative flex flex-col m-5 bg-white z-30 p-10 shadow-md hover:shadow-2xl cursor-pointer'>
            <p className='absolute top-2 right-2 text-xs italic text-gray-400'>groceries</p>
            <img src={groceriesProduct[3].image} height={200} width={200} objectfit='contain' alt='product image' />
            <h4 className='my-3'>{groceriesProduct[3].title}</h4>
            <button className='mt-3 view' onClick={() => router.push('/products//beverages')}>View Product</button>
        </div>

        <div className='relative flex flex-col m-5 bg-white z-30 p-10 shadow-md hover:shadow-2xl cursor-pointer'>
            <p className='absolute top-2 right-2 text-xs italic text-gray-400'>groceries</p>
            <img src={groceriesProduct[4].image} height={200} width={200} objectfit='contain' alt='product image' />
            <h4 className='my-3'>{groceriesProduct[4].title}</h4>
            <button className='mt-3 view' onClick={() => router.push('/products/rice-pasta-beans')}>View Product</button>
        </div>

        <div className='relative flex flex-col m-5 bg-white z-30 p-10 shadow-md hover:shadow-2xl cursor-pointer'>
            <p className='absolute top-2 right-2 text-xs italic text-gray-400'>groceries</p>
            <img src={groceriesProduct[5].image} height={200} width={200} objectfit='contain' alt='product image' />
            <h4 className='my-3'>{groceriesProduct[5].title}</h4>
            <button className='mt-3 view' onClick={() => router.push('/products/drinks')}>View Product</button>
        </div>

        <div className='relative flex flex-col m-5 bg-white z-30 p-10 shadow-md hover:shadow-2xl cursor-pointer'>
            <p className='absolute top-2 right-2 text-xs italic text-gray-400'>groceries</p>
            <img src={groceriesProduct[6].image} height={200} width={200} objectfit='contain' alt='product image' />
            <h4 className='my-3'>{groceriesProduct[6].title}</h4>
            <button className='mt-3 view' onClick={() => router.push('/products/garri')}>View Product</button>
        </div>

        <div className='relative flex flex-col m-5 bg-white z-30 p-10 shadow-md hover:shadow-2xl cursor-pointer'>
            <p className='absolute top-2 right-2 text-xs italic text-gray-400'>groceries</p>
            <img src={groceriesProduct[7].image} height={200} width={200} objectfit='contain' alt='product image' />
            <h4 className='my-3'>{groceriesProduct[7].title}</h4>
            <button className='mt-3 view' onClick={() => router.push('/products/snacks')}>View Product</button>
        </div>
    </main> 


    <Footer />

    </div>
  )
}

export default groceries
