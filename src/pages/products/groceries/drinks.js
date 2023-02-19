import React from 'react'
import Footer from '../../../components/Footer'
import Header from '../../../components/Header'

const drinks = () => {
  const drinkProducts = [
    {
      id: 1,
      image: 'https://www.rgafrocaribbeanfoods.com/wp-content/uploads/2020/07/coke-cola-300x300.jpg',
      title: 'Coca Cola 35cl',
      price: '£0.00',
      buttonText: 'Read More',
    },
    {
      id: 2,
      image: 'https://www.rgafrocaribbeanfoods.com/wp-content/uploads/2020/07/cokebigi-300x300.jpg',
      title: 'Coke Bigi',
      price: '£0.00',
      buttonText: 'Read More',
    },
    {
      id: 3,
      image: 'https://www.rgafrocaribbeanfoods.com/wp-content/uploads/2020/07/schwepps-300x300.jpg',
      title: 'Schwepps',
      price: '£0.00',
      buttonText: 'Read More',
    },
    {
      id: 4,
      image: 'https://www.rgafrocaribbeanfoods.com/wp-content/uploads/2020/07/teem-300x300.jpg',
      title: 'Teems',
      price: '£0.00',
      buttonText: 'Read More',
    },
  ]
  return (
    <div>
        <Header />

        <h1 className="text-3xl ml-5 mt-5 border-b pb-4">Drinks</h1>
        <main className="grid xl:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-4 p-5 ">
        <div className='bg-gray-100 mt-9 cursor-pointer mx-auto border-b pb-9 hover:border-black p-5' onClick={() => router.push('/snacks/groundnut')}>
            <img src={drinkProducts[0].image} width={200} height={200}/>
            <p className='text-gray-400 hover:text-gray-500 cursor-pointer'>{drinkProducts[0].title}</p>
            <p className='text-gray-400 hover:text-gray-500 cursor-pointer'>{drinkProducts[0].price}</p>
            <button className='button'>{drinkProducts[0].buttonText}</button>
         </div>
         <div className='bg-gray-100 mt-9 cursor-pointer mx-auto border-b pb-9 hover:border-black p-5' onClick={() => router.push('/snacks/groundnut')}>
            <img src={drinkProducts[1].image} width={200} height={200}/>
            <p className='text-gray-400 hover:text-gray-500 cursor-pointer'>{drinkProducts[1].title}</p>
            <p className='text-gray-400 hover:text-gray-500 cursor-pointer'>{drinkProducts[1].price}</p>
            <button className='button'>{drinkProducts[1].buttonText}</button>
         </div>
         <div className='bg-gray-100 mt-9 cursor-pointer mx-auto border-b pb-9 hover:border-black p-5' onClick={() => router.push('/snacks/groundnut')}>
            <img src={drinkProducts[2].image} width={200} height={200}/>
            <p className='text-gray-400 hover:text-gray-500 cursor-pointer'>{drinkProducts[2].title}</p>
            <p className='text-gray-400 hover:text-gray-500 cursor-pointer'>{drinkProducts[2].price}</p>
            <button className='button'>{drinkProducts[2].buttonText}</button>
         </div>
         <div className='bg-gray-100 mt-9 cursor-pointer mx-auto border-b pb-9 hover:border-black p-5' onClick={() => router.push('/snacks/groundnut')}>
            <img src={drinkProducts[3].image} width={200} height={200}/>
            <p className='text-gray-400 hover:text-gray-500 cursor-pointer'>{drinkProducts[3].title}</p>
            <p className='text-gray-400 hover:text-gray-500 cursor-pointer'>{drinkProducts[3].price}</p>
            <button className='button'>{drinkProducts[3].buttonText}</button>
         </div>
        </main>

        <Footer />
    </div>
  )
}

export default drinks