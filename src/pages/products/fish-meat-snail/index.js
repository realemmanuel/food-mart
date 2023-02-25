import React from 'react'
import Footer from '../../../components/Footer'
import Header from '../../../components/Header'

const fishMeatSnail = () => {
  const fishMeatSnailProducts = [
    {
      id: 1,
      image: 'https://www.rosemacsales.com/assets/images/no_image.png',
      title: 'smoked catfish',
      buttonText: 'Read More',
      price: '£0.00',
    },
    {
      id: 2,
      image: 'https://www.rosemacsales.com/assets/images/no_image.png',
      title: 'smoked mackerel',
      buttonText: 'Read More',
      price: '£0.00',
    },
    {
      id: 3,
      image: 'https://www.rosemacsales.com/assets/images/no_image.png',
      title: 'smoked barracuda fillet',
      buttonText: 'Read More',
      price: '£0.00',
    },
    {
      id: 4,
      image: 'https://www.rosemacsales.com/assets/images/no_image.png',
      title: 'dried stockfish',
      buttonText: 'Read More',
      price: '£0.00',
    },
    {
      id: 5,
      image: 'https://www.rosemacsales.com/assets/images/no_image.png',
      title: 'ground crayfish',
      buttonText: 'Read More',
      price: '£0.00',
    },
    {
      id: 6,
      image: 'https://www.rosemacsales.com/assets/images/no_image.png',
      title: 'red prawns',
      buttonText: 'Read More',
      price: '£0.00',
    },
    {
      id: 7,
      image: 'https://www.rosemacsales.com/assets/images/no_image.png',
      title: 'boneless stock fish',
      buttonText: 'Read More',
      price: '£0.00',
    },
    {
      id: 8,
      image: 'https://www.rosemacsales.com/assets/images/no_image.png',
      title: 'osuka egun',
      buttonText: 'Read More',
      price: '£0.00',
    },
    {
      id: 9,
      image: 'https://www.rosemacsales.com/assets/images/no_image.png',
      title: 'Abo fish',
      buttonText: 'Read More',
      price: '£0.00',
    },
    {
      id: 10,
      image: 'https://www.rosemacsales.com/assets/images/no_image.png',
      title: 'Snails',
      buttonText: 'Read More',
      price: '£0.00',
    },
  ]
  return (
    <div>
        <Header />
        <p className='ml-5 italic mt-5 text-xs cursor-pointer'>
        <span>Home</span>
        <span className="text-gray-500"> {`>`} </span>
        <span className="text-rg_pink-light">Fish, Meat & Snail</span>
      </p>

      <h1 className="text-3xl ml-5 mt-5 border-b pb-4 font-mono font-black">Fish, Meat & Snail</h1>

        <main className="grid grid-flow-row-dense md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mx-auto bg-gray-200">
            <div className='relative flex flex-col m-5 bg-white z-30 p-10 shadow-md hover:shadow-2xl cursor-pointer'>
                <p className='absolute top-2 right-2 text-xs italic text-gray-400'>fish, meat & snail</p>
                <img src={fishMeatSnailProducts[0].image} height={200} width={200} objectfit='contain' alt='product image' />
                <h4 className='my-3'>{fishMeatSnailProducts[0].title}</h4>
                <h4 className='my-3 font-extrabold'>{fishMeatSnailProducts[0].price}</h4>
                <button className='mt-3 view' onClick={() => router.push('./')}>View Product</button>
            </div>
            <div className='relative flex flex-col m-5 bg-white z-30 p-10 shadow-md hover:shadow-2xl cursor-pointer'>
                <p className='absolute top-2 right-2 text-xs italic text-gray-400'>fish, meat & snail</p>
                <img src={fishMeatSnailProducts[1].image} height={200} width={200} objectfit='contain' alt='product image' />
                <h4 className='my-3'>{fishMeatSnailProducts[1].title}</h4>
                <h4 className='my-3 font-extrabold'>{fishMeatSnailProducts[1].price}</h4>
                <button className='mt-3 view' onClick={() => router.push('./')}>View Product</button>
            </div>
            <div className='relative flex flex-col m-5 bg-white z-30 p-10 shadow-md hover:shadow-2xl cursor-pointer'>
                <p className='absolute top-2 right-2 text-xs italic text-gray-400'>fish, meat & snail</p>
                <img src={fishMeatSnailProducts[2].image} height={200} width={200} objectfit='contain' alt='product image' />
                <h4 className='my-3'>{fishMeatSnailProducts[2].title}</h4>
                <h4 className='my-3 font-extrabold'>{fishMeatSnailProducts[2].price}</h4>
                <button className='mt-3 view' onClick={() => router.push('./')}>View Product</button>
            </div>
            <div className='relative flex flex-col m-5 bg-white z-30 p-10 shadow-md hover:shadow-2xl cursor-pointer'>
                <p className='absolute top-2 right-2 text-xs italic text-gray-400'>fish, meat & snail</p>
                <img src={fishMeatSnailProducts[3].image} height={200} width={200} objectfit='contain' alt='product image' />
                <h4 className='my-3'>{fishMeatSnailProducts[3].title}</h4>
                <h4 className='my-3 font-extrabold'>{fishMeatSnailProducts[3].price}</h4>
                <button className='mt-3 view' onClick={() => router.push('./')}>View Product</button>
            </div>
            <div className='relative flex flex-col m-5 bg-white z-30 p-10 shadow-md hover:shadow-2xl cursor-pointer'>
                <p className='absolute top-2 right-2 text-xs italic text-gray-400'>fish, meat & snail</p>
                <img src={fishMeatSnailProducts[4].image} height={200} width={200} objectfit='contain' alt='product image' />
                <h4 className='my-3'>{fishMeatSnailProducts[4].title}</h4>
                <h4 className='my-3 font-extrabold'>{fishMeatSnailProducts[4].price}</h4>
                <button className='mt-3 view' onClick={() => router.push('./')}>View Product</button>
            </div>
            <div className='relative flex flex-col m-5 bg-white z-30 p-10 shadow-md hover:shadow-2xl cursor-pointer'>
                <p className='absolute top-2 right-2 text-xs italic text-gray-400'>fish, meat & snail</p>
                <img src={fishMeatSnailProducts[5].image} height={200} width={200} objectfit='contain' alt='product image' />
                <h4 className='my-3'>{fishMeatSnailProducts[5].title}</h4>
                <h4 className='my-3 font-extrabold'>{fishMeatSnailProducts[5].price}</h4>
                <button className='mt-3 view' onClick={() => router.push('./')}>View Product</button>
            </div>
            <div className='relative flex flex-col m-5 bg-white z-30 p-10 shadow-md hover:shadow-2xl cursor-pointer'>
                <p className='absolute top-2 right-2 text-xs italic text-gray-400'>fish, meat & snail</p>
                <img src={fishMeatSnailProducts[6].image} height={200} width={200} objectfit='contain' alt='product image' />
                <h4 className='my-3'>{fishMeatSnailProducts[6].title}</h4>
                <h4 className='my-3 font-extrabold'>{fishMeatSnailProducts[6].price}</h4>
                <button className='mt-3 view' onClick={() => router.push('./')}>View Product</button>
            </div>
            <div className='relative flex flex-col m-5 bg-white z-30 p-10 shadow-md hover:shadow-2xl cursor-pointer'>
                <p className='absolute top-2 right-2 text-xs italic text-gray-400'>fish, meat & snail</p>
                <img src={fishMeatSnailProducts[7].image} height={200} width={200} objectfit='contain' alt='product image' />
                <h4 className='my-3'>{fishMeatSnailProducts[7].title}</h4>
                <h4 className='my-3 font-extrabold'>{fishMeatSnailProducts[7].price}</h4>
                <button className='mt-3 view' onClick={() => router.push('./')}>View Product</button>
            </div>
            <div className='relative flex flex-col m-5 bg-white z-30 p-10 shadow-md hover:shadow-2xl cursor-pointer'>
                <p className='absolute top-2 right-2 text-xs italic text-gray-400'>fish, meat & snail</p>
                <img src={fishMeatSnailProducts[8].image} height={200} width={200} objectfit='contain' alt='product image' />
                <h4 className='my-3'>{fishMeatSnailProducts[8].title}</h4>
                <h4 className='my-3 font-extrabold'>{fishMeatSnailProducts[8].price}</h4>
                <button className='mt-3 view' onClick={() => router.push('./')}>View Product</button>
            </div>
            <div className='relative flex flex-col m-5 bg-white z-30 p-10 shadow-md hover:shadow-2xl cursor-pointer'>
                <p className='absolute top-2 right-2 text-xs italic text-gray-400'>fish, meat & snail</p>
                <img src={fishMeatSnailProducts[9].image} height={200} width={200} objectfit='contain' alt='product image' />
                <h4 className='my-3'>{fishMeatSnailProducts[9].title}</h4>
                <h4 className='my-3 font-extrabold'>{fishMeatSnailProducts[9].price}</h4>
                <button className='mt-3 view' onClick={() => router.push('./')}>View Product</button>
            </div>
        </main>

        <Footer />
    </div>
  )
}

export default fishMeatSnail

