import React from 'react'
import Footer from '../../../components/Footer'
import Header from '../../../components/Header'

const drinks = () => {
  const drinkProducts = [
    {
      id: 1,
      image: 'https://www.rosemacsales.com/assets/images/no_image.png',
      title: '50cl Nigeria fanta',
      price: '£0.00',
      buttonText: 'Read More',
    },
    {
      id: 2,
      image: 'https://www.rosemacsales.com/assets/images/no_image.png',
      title: '50cl Nigeria coke',
      price: '£0.00',
      buttonText: 'Read More',
    },
    {
      id: 3,
      image: 'https://www.rosemacsales.com/assets/images/no_image.png',
      title: '33cl Maltina bottle',
      price: '£0.00',
      buttonText: 'Read More',
    },
    {
      id: 4,
      image: 'https://www.rosemacsales.com/assets/images/no_image.png',
      title: '33cl maltina can',
      price: '£0.00',
      buttonText: 'Read More',
    },
    {
      id: 5,
      image: 'https://www.rosemacsales.com/assets/images/no_image.png',
      title: '33cl Malta Guinness can',
      price: '£0.00',
      buttonText: 'Read More',
    },
    {
      id: 6,
      image: 'https://www.rosemacsales.com/assets/images/no_image.png',
      title: 'Malta Guinness bottle',
      price: '£0.00',
      buttonText: 'Read More',
    },
    {
      id: 7,
      image: 'https://www.rosemacsales.com/assets/images/no_image.png',
      title: '33cl Amstel malta',
      price: '£0.00',
      buttonText: 'Read More',
    },
    {
      id: 8,
      image: 'https://www.rosemacsales.com/assets/images/no_image.png',
      title: '33cl diet coke',
      price: '£0.00',
      buttonText: 'Read More',
    },
    {
      id: 9,
      image: 'https://www.rosemacsales.com/assets/images/no_image.png',
      title: '50cl Lacasera',
      price: '£0.00',
      buttonText: 'Read More',
    },
    {
      id: 10,
      image: 'https://www.rosemacsales.com/assets/images/no_image.png',
      title: 'Palm wine',
      price: '£0.00',
      buttonText: 'Read More',
    },
    {
      id: 11,
      image: 'https://www.rosemacsales.com/assets/images/no_image.png',
      title: 'Big Stout',
      price: '£0.00',
      buttonText: 'Read More',
    },
    {
      id: 12,
      image: 'https://www.rosemacsales.com/assets/images/no_image.png',
      title: 'Small Stout',
      price: '£0.00',
      buttonText: 'Read More',
    },
    {
      id: 13,
      image: 'https://www.rosemacsales.com/assets/images/no_image.png',
      title: 'Trophy',
      price: '£0.00',
      buttonText: 'Read More',
    },
    {
      id: 14,
      image: 'https://www.rosemacsales.com/assets/images/no_image.png',
      title: 'Origin beer',
      price: '£0.00',
      buttonText: 'Read More',
    },
    {
      id: 15,
      image: 'https://www.rosemacsales.com/assets/images/no_image.png',
      title: 'Origin bitter',
      price: '£0.00',
      buttonText: 'Read More',
    },
    {
      id: 16,
      image: 'https://www.rosemacsales.com/assets/images/no_image.png',
      title: 'Big Origin bitter',
      price: '£0.00',
      buttonText: 'Read More',
    },
    {
      id: 17,
      image: 'https://www.rosemacsales.com/assets/images/no_image.png',
      title: 'Alomo bitter',
      price: '£0.00',
      buttonText: 'Read More',
    },
    {
      id: 18,
      image: 'https://www.rosemacsales.com/assets/images/no_image.png',
      title: 'Big Alomo bitter',
      price: '£0.00',
      buttonText: 'Read More',
    },
    {
      id: 19,
      image: 'https://www.rosemacsales.com/assets/images/no_image.png',
      title: 'Mudet',
      price: '£0.00',
      buttonText: 'Read More',
    },
    {
      id: 20,
      image: 'https://www.rosemacsales.com/assets/images/no_image.png',
      title: 'Jekanmo',
      price: '£0.00',
      buttonText: 'Read More',
    },
    {
      id: 21,
      image: 'https://www.rosemacsales.com/assets/images/no_image.png',
      title: 'Teems',
      price: '£0.00',
      buttonText: 'Read More',
    },
  ]
  return (
    <div className="bg-gray-100">
        <Header />

        <p className='ml-5 italic mt-5 text-xs cursor-pointer'>
        <span>Home</span>
        <span className="text-gray-500"> {`>`} </span>
        <span className="text-rg_pink-light">Groceries</span>
        <span className="text-gray-500"> {`>`} </span>
        <span className="text-rg_pink-light">Drinks</span>
      </p>

      <h1 className="text-3xl ml-5 mt-5 border-b pb-4 font-mono font-black">Drinks</h1>

        <main className="grid grid-flow-row-dense md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mx-auto bg-gray-200 p-5">
            <div className='relative flex flex-col m-5 bg-white z-30 p-10 shadow-md hover:shadow-2xl cursor-pointer'>
                <p className='absolute top-2 right-2 text-xs italic text-gray-400'>drinks</p>
                <img src={drinkProducts[0].image} height={200} width={200} objectfit='contain' alt='product image' />
                <h4 className='my-3'>{drinkProducts[0].title}</h4>
                <h4 className='my-3 font-extrabold'>{drinkProducts[0].price}</h4>
                <button className='mt-3 view' onClick={() => router.push('./')}>View Product</button>
            </div>

            <div className='relative flex flex-col m-5 bg-white z-30 p-10 shadow-md hover:shadow-2xl cursor-pointer'>
                <p className='absolute top-2 right-2 text-xs italic text-gray-400'>drinks</p>
                <img src={drinkProducts[1].image} height={200} width={200} objectfit='contain' alt='product image' />
                <h4 className='my-3'>{drinkProducts[1].title}</h4>
                <h4 className='my-3 font-extrabold'>{drinkProducts[1].price}</h4>
                <button className='mt-3 view' onClick={() => router.push('./')}>View Product</button>
            </div>

            <div className='relative flex flex-col m-5 bg-white z-30 p-10 shadow-md hover:shadow-2xl cursor-pointer'>
                <p className='absolute top-2 right-2 text-xs italic text-gray-400'>drinks</p>
                <img src={drinkProducts[2].image} height={200} width={200} objectfit='contain' alt='product image' />
                <h4 className='my-3'>{drinkProducts[2].title}</h4>
                <h4 className='my-3 font-extrabold'>{drinkProducts[2].price}</h4>
                <button className='mt-3 view' onClick={() => router.push('./')}>View Product</button>
            </div>

            <div className='relative flex flex-col m-5 bg-white z-30 p-10 shadow-md hover:shadow-2xl cursor-pointer'>
                <p className='absolute top-2 right-2 text-xs italic text-gray-400'>drinks</p>
                <img src={drinkProducts[3].image} height={200} width={200} objectfit='contain' alt='product image' />
                <h4 className='my-3'>{drinkProducts[3].title}</h4>
                <h4 className='my-3 font-extrabold'>{drinkProducts[3].price}</h4>
                <button className='mt-3 view' onClick={() => router.push('./')}>View Product</button>
            </div>

            <div className='relative flex flex-col m-5 bg-white z-30 p-10 shadow-md hover:shadow-2xl cursor-pointer'>
                <p className='absolute top-2 right-2 text-xs italic text-gray-400'>drinks</p>
                <img src={drinkProducts[4].image} height={200} width={200} objectfit='contain' alt='product image' />
                <h4 className='my-3'>{drinkProducts[4].title}</h4>
                <h4 className='my-3 font-extrabold'>{drinkProducts[4].price}</h4>
                <button className='mt-3 view' onClick={() => router.push('./')}>View Product</button>
            </div>

            <div className='relative flex flex-col m-5 bg-white z-30 p-10 shadow-md hover:shadow-2xl cursor-pointer'>
                <p className='absolute top-2 right-2 text-xs italic text-gray-400'>drinks</p>
                <img src={drinkProducts[5].image} height={200} width={200} objectfit='contain' alt='product image' />
                <h4 className='my-3'>{drinkProducts[5].title}</h4>
                <h4 className='my-3 font-extrabold'>{drinkProducts[5].price}</h4>
                <button className='mt-3 view' onClick={() => router.push('./')}>View Product</button>
            </div>

            <div className='relative flex flex-col m-5 bg-white z-30 p-10 shadow-md hover:shadow-2xl cursor-pointer'>
                <p className='absolute top-2 right-2 text-xs italic text-gray-400'>drinks</p>
                <img src={drinkProducts[6].image} height={200} width={200} objectfit='contain' alt='product image' />
                <h4 className='my-3'>{drinkProducts[6].title}</h4>
                <h4 className='my-3 font-extrabold'>{drinkProducts[6].price}</h4>
                <button className='mt-3 view' onClick={() => router.push('./')}>View Product</button>
            </div>

            <div className='relative flex flex-col m-5 bg-white z-30 p-10 shadow-md hover:shadow-2xl cursor-pointer'>
                <p className='absolute top-2 right-2 text-xs italic text-gray-400'>drinks</p>
                <img src={drinkProducts[7].image} height={200} width={200} objectfit='contain' alt='product image' />
                <h4 className='my-3'>{drinkProducts[7].title}</h4>
                <h4 className='my-3 font-extrabold'>{drinkProducts[7].price}</h4>
                <button className='mt-3 view' onClick={() => router.push('./')}>View Product</button>
            </div>

            <div className='relative flex flex-col m-5 bg-white z-30 p-10 shadow-md hover:shadow-2xl cursor-pointer'>
                <p className='absolute top-2 right-2 text-xs italic text-gray-400'>drinks</p>
                <img src={drinkProducts[8].image} height={200} width={200} objectfit='contain' alt='product image' />
                <h4 className='my-3'>{drinkProducts[8].title}</h4>
                <h4 className='my-3 font-extrabold'>{drinkProducts[8].price}</h4>
                <button className='mt-3 view' onClick={() => router.push('./')}>View Product</button>
            </div>

            <div className='relative flex flex-col m-5 bg-white z-30 p-10 shadow-md hover:shadow-2xl cursor-pointer'>
                <p className='absolute top-2 right-2 text-xs italic text-gray-400'>drinks</p>
                <img src={drinkProducts[9].image} height={200} width={200} objectfit='contain' alt='product image' />
                <h4 className='my-3'>{drinkProducts[9].title}</h4>
                <h4 className='my-3 font-extrabold'>{drinkProducts[9].price}</h4>
                <button className='mt-3 view' onClick={() => router.push('./')}>View Product</button>
            </div>

            <div className='relative flex flex-col m-5 bg-white z-30 p-10 shadow-md hover:shadow-2xl cursor-pointer'>
                <p className='absolute top-2 right-2 text-xs italic text-gray-400'>drinks</p>
                <img src={drinkProducts[10].image} height={200} width={200} objectfit='contain' alt='product image' />
                <h4 className='my-3'>{drinkProducts[10].title}</h4>
                <h4 className='my-3 font-extrabold'>{drinkProducts[10].price}</h4>
                <button className='mt-3 view' onClick={() => router.push('./')}>View Product</button>
            </div>

            <div className='relative flex flex-col m-5 bg-white z-30 p-10 shadow-md hover:shadow-2xl cursor-pointer'>
                <p className='absolute top-2 right-2 text-xs italic text-gray-400'>drinks</p>
                <img src={drinkProducts[11].image} height={200} width={200} objectfit='contain' alt='product image' />
                <h4 className='my-3'>{drinkProducts[11].title}</h4>
                <h4 className='my-3 font-extrabold'>{drinkProducts[11].price}</h4>
                <button className='mt-3 view' onClick={() => router.push('./')}>View Product</button>
            </div>

            <div className='relative flex flex-col m-5 bg-white z-30 p-10 shadow-md hover:shadow-2xl cursor-pointer'>
                <p className='absolute top-2 right-2 text-xs italic text-gray-400'>drinks</p>
                <img src={drinkProducts[12].image} height={200} width={200} objectfit='contain' alt='product image' />
                <h4 className='my-3'>{drinkProducts[12].title}</h4>
                <h4 className='my-3 font-extrabold'>{drinkProducts[12].price}</h4>
                <button className='mt-3 view' onClick={() => router.push('./')}>View Product</button>
            </div>

            <div className='relative flex flex-col m-5 bg-white z-30 p-10 shadow-md hover:shadow-2xl cursor-pointer'>
                <p className='absolute top-2 right-2 text-xs italic text-gray-400'>drinks</p>
                <img src={drinkProducts[13].image} height={200} width={200} objectfit='contain' alt='product image' />
                <h4 className='my-3'>{drinkProducts[13].title}</h4>
                <h4 className='my-3 font-extrabold'>{drinkProducts[13].price}</h4>
                <button className='mt-3 view' onClick={() => router.push('./')}>View Product</button>
            </div>

            <div className='relative flex flex-col m-5 bg-white z-30 p-10 shadow-md hover:shadow-2xl cursor-pointer'>
                <p className='absolute top-2 right-2 text-xs italic text-gray-400'>drinks</p>
                <img src={drinkProducts[14].image} height={200} width={200} objectfit='contain' alt='product image' />
                <h4 className='my-3'>{drinkProducts[14].title}</h4>
                <h4 className='my-3 font-extrabold'>{drinkProducts[14].price}</h4>
                <button className='mt-3 view' onClick={() => router.push('./')}>View Product</button>
            </div>

            <div className='relative flex flex-col m-5 bg-white z-30 p-10 shadow-md hover:shadow-2xl cursor-pointer'>
                <p className='absolute top-2 right-2 text-xs italic text-gray-400'>drinks</p>
                <img src={drinkProducts[15].image} height={200} width={200} objectfit='contain' alt='product image' />
                <h4 className='my-3'>{drinkProducts[15].title}</h4>
                <h4 className='my-3 font-extrabold'>{drinkProducts[15].price}</h4>
                <button className='mt-3 view' onClick={() => router.push('./')}>View Product</button>
            </div>

            <div className='relative flex flex-col m-5 bg-white z-30 p-10 shadow-md hover:shadow-2xl cursor-pointer'>
                <p className='absolute top-2 right-2 text-xs italic text-gray-400'>drinks</p>
                <img src={drinkProducts[16].image} height={200} width={200} objectfit='contain' alt='product image' />
                <h4 className='my-3'>{drinkProducts[16].title}</h4>
                <h4 className='my-3 font-extrabold'>{drinkProducts[16].price}</h4>
                <button className='mt-3 view' onClick={() => router.push('./')}>View Product</button>
            </div>

            <div className='relative flex flex-col m-5 bg-white z-30 p-10 shadow-md hover:shadow-2xl cursor-pointer'>
                <p className='absolute top-2 right-2 text-xs italic text-gray-400'>drinks</p>
                <img src={drinkProducts[17].image} height={200} width={200} objectfit='contain' alt='product image' />
                <h4 className='my-3'>{drinkProducts[17].title}</h4>
                <h4 className='my-3 font-extrabold'>{drinkProducts[17].price}</h4>
                <button className='mt-3 view' onClick={() => router.push('./')}>View Product</button>
            </div>

            <div className='relative flex flex-col m-5 bg-white z-30 p-10 shadow-md hover:shadow-2xl cursor-pointer'>
                <p className='absolute top-2 right-2 text-xs italic text-gray-400'>drinks</p>
                <img src={drinkProducts[18].image} height={200} width={200} objectfit='contain' alt='product image' />
                <h4 className='my-3'>{drinkProducts[18].title}</h4>
                <h4 className='my-3 font-extrabold'>{drinkProducts[18].price}</h4>
                <button className='mt-3 view' onClick={() => router.push('./')}>View Product</button>
            </div>

            <div className='relative flex flex-col m-5 bg-white z-30 p-10 shadow-md hover:shadow-2xl cursor-pointer'>
                <p className='absolute top-2 right-2 text-xs italic text-gray-400'>drinks</p>
                <img src={drinkProducts[19].image} height={200} width={200} objectfit='contain' alt='product image' />
                <h4 className='my-3'>{drinkProducts[19].title}</h4>
                <h4 className='my-3 font-extrabold'>{drinkProducts[19].price}</h4>
                <button className='mt-3 view' onClick={() => router.push('./')}>View Product</button>
            </div>

            <div className='relative flex flex-col m-5 bg-white z-30 p-10 shadow-md hover:shadow-2xl cursor-pointer'>
                <p className='absolute top-2 right-2 text-xs italic text-gray-400'>drinks</p>
                <img src={drinkProducts[20].image} height={200} width={200} objectfit='contain' alt='product image' />
                <h4 className='my-3'>{drinkProducts[20].title}</h4>
                <h4 className='my-3 font-extrabold'>{drinkProducts[20].price}</h4>
                <button className='mt-3 view' onClick={() => router.push('./')}>View Product</button>
            </div>
        </main>

        <Footer />
    </div>
  )
}

export default drinks
