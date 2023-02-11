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
      image: 'https://www.rgafrocaribbeanfoods.com/wp-content/uploads/2020/07/driedproducts-150x150.jpg',
      title: 'Dried Vegetables',
    },
    {
      id: 2,
      image: 'https://www.rgafrocaribbeanfoods.com/wp-content/uploads/2020/07/rg-afro-caribbean-foods-corn-starch-1-300x300.jpg',
      title: 'Frozen Corn Starch / OGI',
    },
  ]

  return (
    <div>
        <Head>
        <title>R&G AFROCARRIBEAN FOODS - Groceries</title>
        </Head>
        <Header />

        <h1 className="text-3xl ml-5 mt-5 border-b pb-4">Ethnic Foods</h1>

        <main className="grid xl:grid-cols-5 md:grid-cols-2 sm:grid-cols-1 gap-1">
        <div className='mt-9 cursor-pointer mx-auto pb-9 border-b' onClick={() => router.push('./dried-vegetables')}>
            <img src={ethnicFoodsList[0].image} width={200} height={200}/>
            <p className='text-gray-400 hover:text-gray-500 cursor-pointer'>{ethnicFoodsList[0].title}</p>
         </div>
         <div className='mt-9 cursor-pointer mx-auto pb-9 border-b' onClick={() => router.push('./corn-starch')}>
            <img src={ethnicFoodsList[1].image} width={200} height={200}/>
            <p className='text-gray-400 hover:text-gray-500 cursor-pointer'>{ethnicFoodsList[1].title}</p>
         </div>
        </main>

        <Footer />
    </div>
  )
}

export default ethnicFoods