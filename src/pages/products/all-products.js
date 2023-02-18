import React from 'react'
import Header from '../../components/Header'
import { useRouter } from 'next/router'
import Footer from '../../components/Footer'

const allProducts = () => {
    const router = useRouter();

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

      const snackProducts = [
        {
          id: 1,
          image: 'https://www.rgafrocaribbeanfoods.com/wp-content/uploads/2020/07/rg-afro-caribbean-foods-groundnut-2-600x600.jpg',
          title: 'R&G Groundnut',
          price: '£0.00',
          buttonText: 'Read More',
        },
        {
          id: 2,
          image: 'https://www.rgafrocaribbeanfoods.com/wp-content/uploads/2020/07/rg-afro-caribbean-foods-kulikuli2-300x300.jpg',
          title: 'R&G Kuli Kuli',
          price: '£0.00',
          buttonText: 'Read More',
        },
        {
          id: 3,
          image: 'https://www.rgafrocaribbeanfoods.com/wp-content/uploads/2020/07/rg-afro-caribbean-foods-non_spicy_cashewnut-300x300.jpg',
          title: 'R&G Non Spicy Cashewnut',
          price: '£0.00',
          buttonText: 'Read More',
        },
        {
          id: 4,
          image: 'https://www.rgafrocaribbeanfoods.com/wp-content/uploads/2020/07/rg-afro-caribbean-foods-spicy-cashewnut-600x600.jpg',
          title: 'R&G Spicy Cashew nut',
          price: '£0.00',
          buttonText: 'Read More',
        },
        {
          id: 5,
          image: 'https://www.rgafrocaribbeanfoods.com/wp-content/uploads/2020/07/tomtom-300x300.jpg',
          title: 'R&G Tom Tom',
          price: '£0.00',
          buttonText: 'Read More',
        },
      ]

  return (
    <div>
        <Header />

        <h1 className="text-3xl ml-5 mt-5 border-b pb-4">All Products</h1>

        <h2 className="text-3xl ml-5 mt-5 border-b pb-4">Groceries</h2>


        <main>
        <div className="grid xl:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-4 p-5 ">
         <div className='mt-9 cursor-pointer mx-auto border-b pb-9' onClick={() => router.push('./spices-seasonings')}>
            <img src={groceriesProduct[1].image} width={200} height={200}/>
            <p className='text-gray-400 hover:text-gray-500 cursor-pointer'>{groceriesProduct[1].title}</p>
         </div>
         <div className='mt-9 cursor-pointer mx-auto border-b pb-9' onClick={() => router.push('./cooking-ingredients')}>
            <img src={groceriesProduct[2].image} width={200} height={200}/>
            <p className='text-gray-400 hover:text-gray-500 cursor-pointer'>{groceriesProduct[2].title}</p>
         </div>
         <div className='mt-9 cursor-pointer mx-auto border-b pb-9' onClick={() => router.push('./oil')}>
            <img src={groceriesProduct[3].image} width={200} height={200}/>
            <p className='text-gray-400 hover:text-gray-500 cursor-pointer'>{groceriesProduct[3].title}</p>
         </div>
         <div className='mt-9 cursor-pointer mx-auto border-b p-9' onClick={() => router.push('./beverages')}>
            <img src={groceriesProduct[4].image} width={200} height={200}/>
            <p className='text-gray-400 hover:text-gray-500 cursor-pointer'>{groceriesProduct[4].title}</p>
         </div>
         <div className='mt-9 cursor-pointer mx-auto border-b pb-9' onClick={() => router.push('./rice-pasta-beans')}>
            <img src={groceriesProduct[5].image} width={200} height={200}/>
            <p className='text-gray-400 hover:text-gray-500 cursor-pointer'>{groceriesProduct[5].title}</p>
         </div>
         <div className='mt-9 cursor-pointer mx-auto border-b pb-9' onClick={() => router.push('./drinks')}>
            <img src={groceriesProduct[6].image} width={200} height={200}/>
            <p className='text-gray-400 hover:text-gray-500 cursor-pointer'>{groceriesProduct[6].title}</p>
         </div>
         <div className='mt-9 cursor-pointer mx-auto border-b pb-9' onClick={() => router.push('./garri')}>
            <img src={groceriesProduct[7].image} width={200} height={200}/>
            <p className='text-gray-400 hover:text-gray-500 cursor-pointer'>{groceriesProduct[7].title}</p>
         </div>
         <div className='mt-9 cursor-pointer mx-auto border-b pb-9' onClick={() => router.push('./snacks')}>
            <img src={groceriesProduct[8].image} width={200} height={200}/>
            <p className='text-gray-400 hover:text-gray-500 cursor-pointer'>{groceriesProduct[8].title}</p>
         </div>
         </div>

         <h2 className="text-3xl ml-5 mt-5 border-b pb-4">Oil</h2>

        <div className="grid xl:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-4 p-5">
    

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
         </div>

         <h2 className="text-3xl ml-5 mt-5 border-b pb-4">Snacks</h2>
         <div className="grid xl:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-4 p-5">
         <div className='bg-gray-100 mt-9 cursor-pointer mx-auto border-b pb-9 hover:border-black p-5' onClick={() => router.push('./canfood')}>
            <img src={snackProducts[0].image} width={200} height={200}/>
            <p className='text-gray-400 hover:text-gray-500 cursor-pointer'>{snackProducts[0].title}</p>
            <p className='text-gray-400 hover:text-gray-500 cursor-pointer'>{snackProducts[0].price}</p>
            <button className='button'>{snackProducts[0].buttonText}</button>
         </div>
         <div className='bg-gray-100 mt-9 cursor-pointer mx-auto border-b pb-9 hover:border-black p-5' onClick={() => router.push('./canfood')}>
            <img src={snackProducts[1].image} width={200} height={200}/>
            <p className='text-gray-400 hover:text-gray-500 cursor-pointer'>{snackProducts[1].title}</p>
            <p className='text-gray-400 hover:text-gray-500 cursor-pointer'>{snackProducts[1].price}</p>
            <button className='button'>{snackProducts[1].buttonText}</button>
         </div>
         <div className='bg-gray-100 mt-9 cursor-pointer mx-auto border-b pb-9 hover:border-black p-5' onClick={() => router.push('./canfood')}>
            <img src={snackProducts[2].image} width={200} height={200}/>
            <p className='text-gray-400 hover:text-gray-500 cursor-pointer'>{snackProducts[2].title}</p>
            <p className='text-gray-400 hover:text-gray-500 cursor-pointer'>{snackProducts[2].price}</p>
            <button className='button'>{snackProducts[2].buttonText}</button>
         </div>
         <div className='bg-gray-100 mt-9 cursor-pointer mx-auto border-b pb-9 hover:border-black p-5' onClick={() => router.push('./canfood')}>
            <img src={snackProducts[3].image} width={200} height={200}/>
            <p className='text-gray-400 hover:text-gray-500 cursor-pointer'>{snackProducts[3].title}</p>
            <p className='text-gray-400 hover:text-gray-500 cursor-pointer'>{snackProducts[3].price}</p>
            <button className='button'>{snackProducts[3].buttonText}</button>
         </div>
         <div className='bg-gray-100 mt-9 cursor-pointer mx-auto border-b pb-9 hover:border-black p-5' onClick={() => router.push('./canfood')}>
            <img src={snackProducts[4].image} width={200} height={200}/>
            <p className='text-gray-400 hover:text-gray-500 cursor-pointer'>{snackProducts[4].title}</p>
            <p className='text-gray-400 hover:text-gray-500 cursor-pointer'>{snackProducts[4].price}</p>
            <button className='button'>{snackProducts[4].buttonText}</button>
         </div>
         </div>
    </main>
        
        <Footer />
    </div>
  )
}

export default allProducts