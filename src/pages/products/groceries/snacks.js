import React from 'react'
import Header from '../../../components/Header'
import Footer from '../../../components/Footer'
import { useRouter } from 'next/router'

const snacks = () => {
   const router = useRouter();
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

        <h1 className="text-3xl ml-5 mt-5 border-b pb-4">Snacks</h1>
      <p className="text-1xl ml-5 mt-5 border-b pb-4 cursor-pointer">groceries &gt; snacks</p>

      <main className="grid xl:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-4 p-5 ">
      <div className='bg-gray-100 mt-9 cursor-pointer mx-auto border-b pb-9 hover:border-black p-5' onClick={() => router.push('/snacks/groundnut')}>
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
      </main>

      <Footer />

    </div>
  )
}

export default snacks