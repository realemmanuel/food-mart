import Head from "next/head";
import React from 'react'
import Header from "../../../components/Header";
// import { useRouter } from 'next/router'
import Footer from "../../../components/Footer";

const groceries = () => {
    // const router = useRouter();
    
    const groceriesProduct = [
        {
            id: 1,
            image: 'https://www.rgafrocaribbeanfoods.com/wp-content/uploads/2020/07/cannedfood-150x150.jpg',
            title: 'Can Food',
        },
        {
            id: 2,
            image: 'https://www.rgafrocaribbeanfoods.com/wp-content/uploads/2020/07/ingre.jpg',
            title: 'Spices & Seasonings',
        },
        {
            id: 3,
            image: 'https://www.rgafrocaribbeanfoods.com/wp-content/uploads/2020/07/ingre.jpg',
            title: 'Cooking Ingredients',
        },
        {
            id: 4,
            image: 'https://www.rgafrocaribbeanfoods.com/wp-content/uploads/2020/07/rg-afro-caribbean-foods-palm-oil-gallery-300x300.jpg',
            title: '100% Pure Nigerian Palm Oil',
        },
        {
            id: 5,
            image: 'https://www.rgafrocaribbeanfoods.com/wp-content/uploads/2020/07/beveragesdrink-150x150.jpg',
            title: 'Beverages',
        },
        {
            id: 6,
            image: 'https://www.rgafrocaribbeanfoods.com/wp-content/uploads/2020/07/beanpastarice-150x150.jpg',
            title: 'Rice, Pasta & Beans',
        },
        {
            id: 7,
            image: 'https://www.rgafrocaribbeanfoods.com/wp-content/uploads/2020/07/drinksthumb-149x150.jpg',
            title: 'Drinks',
        },
        {
            id: 8,
            image: 'https://www.rgafrocaribbeanfoods.com/wp-content/uploads/2020/07/rg-afro-caribbean-foods-flourthumbnail-300x300.jpg',
            title: 'Garri',
        },
        {
            id: 9,
            image: 'https://www.rgafrocaribbeanfoods.com/wp-content/uploads/2020/07/rg-afro-caribbean-foods-nuts-range-300x300.jpg',
            title: 'Snacks',
        },
    ]

  return (
    <div>
        <Head>
        <title>R&G AFROCARRIBEAN FOODS - Groceries</title>
      </Head>
      <Header />

      <h1 className="text-3xl ml-5 mt-5 border-b pb-4">Groceries</h1>

    <main className="grid xl:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-1 p-5 ">
         <div className='bg-gray-100 p-5 mt-9 cursor-pointer mx-auto border-b pb-9' onClick={() => router.push('./spices-seasonings')}>
            <img src={groceriesProduct[1].image} width={200} height={200}/>
            <p className='text-gray-400 hover:text-gray-500 cursor-pointer'>{groceriesProduct[1].title}</p>
         </div>
         <div className='bg-gray-100 p-5 mt-9 cursor-pointer mx-auto border-b pb-9' onClick={() => router.push('./cooking-ingredients')}>
            <img src={groceriesProduct[2].image} width={200} height={200}/>
            <p className='text-gray-400 hover:text-gray-500 cursor-pointer'>{groceriesProduct[2].title}</p>
         </div>
         <div className='bg-gray-100 p-5 mt-9 cursor-pointer mx-auto border-b pb-9' onClick={() => router.push('./oil')}>
            <img src={groceriesProduct[3].image} width={200} height={200}/>
            <p className='text-gray-400 hover:text-gray-500 cursor-pointer'>{groceriesProduct[3].title}</p>
         </div>
         <div className='bg-gray-100 p-5 mt-9 cursor-pointer mx-auto border-b p-9' onClick={() => router.push('./beverages')}>
            <img src={groceriesProduct[4].image} width={200} height={200}/>
            <p className='text-gray-400 hover:text-gray-500 cursor-pointer'>{groceriesProduct[4].title}</p>
         </div>
         <div className='bg-gray-100 p-5 mt-9 cursor-pointer mx-auto border-b pb-9' onClick={() => router.push('./rice-pasta-beans')}>
            <img src={groceriesProduct[5].image} width={200} height={200}/>
            <p className='text-gray-400 hover:text-gray-500 cursor-pointer'>{groceriesProduct[5].title}</p>
         </div>
         <div className='bg-gray-100 p-5 mt-9 cursor-pointer mx-auto border-b pb-9' onClick={() => router.push('./drinks')}>
            <img src={groceriesProduct[6].image} width={200} height={200}/>
            <p className='text-gray-400 hover:text-gray-500 cursor-pointer'>{groceriesProduct[6].title}</p>
         </div>
         <div className='bg-gray-100 p-5 mt-9 cursor-pointer mx-auto border-b pb-9' onClick={() => router.push('./garri')}>
            <img src={groceriesProduct[7].image} width={200} height={200}/>
            <p className='text-gray-400 hover:text-gray-500 cursor-pointer'>{groceriesProduct[7].title}</p>
         </div>
         <div className='bg-gray-100 p-5 mt-9 cursor-pointer mx-auto border-b pb-9' onClick={() => router.push('./snacks')}>
            <img src={groceriesProduct[8].image} width={200} height={200}/>
            <p className='text-gray-400 hover:text-gray-500 cursor-pointer'>{groceriesProduct[8].title}</p>
         </div>
    </main>

    <div className='mt-9'>
    <Footer />
    </div>
    
    </div>
  )
}

export default groceries