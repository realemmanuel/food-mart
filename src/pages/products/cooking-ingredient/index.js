import React from 'react'
import Head from "next/head";
import { useRouter } from 'next/router'
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";

const index = () => {
    const router = useRouter();

    const cookingIngredientsProducts = [
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
        {
          id: 5,
          image: 'https://www.rosemacsales.com/assets/images/no_image.png',
          title: 'Title Not Available',
          price: '£0.00',
        },
        {
          id: 6,
          image: 'https://www.rosemacsales.com/assets/images/no_image.png',
          title: 'Title Not Available',
          price: '£0.00',
        },
        {
          id: 7,
          image: 'https://www.rosemacsales.com/assets/images/no_image.png',
          title: 'Title Not Available',
          price: '£0.00',
        },
        {
          id: 8,
          image: 'https://www.rosemacsales.com/assets/images/no_image.png',
          title: 'Title Not Available',
          price: '£0.00',
        },
        {
          id: 9,
          image: 'https://www.rosemacsales.com/assets/images/no_image.png',
          title: 'Title Not Available',
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
        <span className="text-rg_pink-light">Cooking Ingredient</span>
      </p>

      <h1 className="text-3xl ml-5 mt-5 border-b pb-4 font-mono font-black">Cooking Ingredient</h1>

    <main className="grid grid-flow-row-dense md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mx-auto bg-gray-200">
          <div className='relative flex flex-col m-5 bg-white z-30 p-10 shadow-md hover:shadow-2xl cursor-pointer'>
              <p className='absolute top-2 right-2 text-xs italic text-gray-400'>cooking ingredients</p>
              <img src={cookingIngredientsProducts[0].image} height={200} width={200} objectfit='contain' alt='product image' />
              <h4 className='my-3'>{cookingIngredientsProducts[0].title}</h4>
              <button className='mt-3 view' onClick={() => router.push('/')}>View Product</button>
          </div>

          <div className='relative flex flex-col m-5 bg-white z-30 p-10 shadow-md hover:shadow-2xl cursor-pointer'>
              <p className='absolute top-2 right-2 text-xs italic text-gray-400'>cooking ingredients</p>
              <img src={cookingIngredientsProducts[1].image} height={200} width={200} objectfit='contain' alt='product image' />
              <h4 className='my-3'>{cookingIngredientsProducts[1].title}</h4>
              <button className='mt-3 view' onClick={() => router.push('/')}>View Product</button>
          </div>

          <div className='relative flex flex-col m-5 bg-white z-30 p-10 shadow-md hover:shadow-2xl cursor-pointer'>
              <p className='absolute top-2 right-2 text-xs italic text-gray-400'>cooking ingredients</p>
              <img src={cookingIngredientsProducts[2].image} height={200} width={200} objectfit='contain' alt='product image' />
              <h4 className='my-3'>{cookingIngredientsProducts[2].title}</h4>
              <button className='mt-3 view' onClick={() => router.push('/')}>View Product</button>
          </div>

          <div className='relative flex flex-col m-5 bg-white z-30 p-10 shadow-md hover:shadow-2xl cursor-pointer'>
              <p className='absolute top-2 right-2 text-xs italic text-gray-400'>cooking ingredients</p>
              <img src={cookingIngredientsProducts[3].image} height={200} width={200} objectfit='contain' alt='product image' />
              <h4 className='my-3'>{cookingIngredientsProducts[3].title}</h4>
              <button className='mt-3 view' onClick={() => router.push('/')}>View Product</button>
          </div>

          <div className='relative flex flex-col m-5 bg-white z-30 p-10 shadow-md hover:shadow-2xl cursor-pointer'>
              <p className='absolute top-2 right-2 text-xs italic text-gray-400'>cooking ingredients</p>
              <img src={cookingIngredientsProducts[4].image} height={200} width={200} objectfit='contain' alt='product image' />
              <h4 className='my-3'>{cookingIngredientsProducts[4].title}</h4>
              <button className='mt-3 view' onClick={() => router.push('/')}>View Product</button>
          </div>

          <div className='relative flex flex-col m-5 bg-white z-30 p-10 shadow-md hover:shadow-2xl cursor-pointer'>
              <p className='absolute top-2 right-2 text-xs italic text-gray-400'>cooking ingredients</p>
              <img src={cookingIngredientsProducts[5].image} height={200} width={200} objectfit='contain' alt='product image' />
              <h4 className='my-3'>{cookingIngredientsProducts[5].title}</h4>
              <button className='mt-3 view' onClick={() => router.push('/')}>View Product</button>
          </div>

          <div className='relative flex flex-col m-5 bg-white z-30 p-10 shadow-md hover:shadow-2xl cursor-pointer'>
              <p className='absolute top-2 right-2 text-xs italic text-gray-400'>cooking ingredients</p>
              <img src={cookingIngredientsProducts[6].image} height={200} width={200} objectfit='contain' alt='product image' />
              <h4 className='my-3'>{cookingIngredientsProducts[6].title}</h4>
              <button className='mt-3 view' onClick={() => router.push('/')}>View Product</button>
          </div>

          <div className='relative flex flex-col m-5 bg-white z-30 p-10 shadow-md hover:shadow-2xl cursor-pointer'>
              <p className='absolute top-2 right-2 text-xs italic text-gray-400'>cooking ingredients</p>
              <img src={cookingIngredientsProducts[7].image} height={200} width={200} objectfit='contain' alt='product image' />
              <h4 className='my-3'>{cookingIngredientsProducts[7].title}</h4>
              <button className='mt-3 view' onClick={() => router.push('/')}>View Product</button>
          </div>

          <div className='relative flex flex-col m-5 bg-white z-30 p-10 shadow-md hover:shadow-2xl cursor-pointer'>
              <p className='absolute top-2 right-2 text-xs italic text-gray-400'>cooking ingredients</p>
              <img src={cookingIngredientsProducts[8].image} height={200} width={200} objectfit='contain' alt='product image' />
              <h4 className='my-3'>{cookingIngredientsProducts[8].title}</h4>
              <button className='mt-3 view' onClick={() => router.push('/')}>View Product</button>
          </div>
    </main>

        <Footer />
    </div>
  )
}

export default index