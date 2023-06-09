import React from 'react'
import Footer from '../../components/Footer'
import Header from '../../components/Header'
import Link from 'next/link'

const allProductsThree = () => {
    const flourProducts = [
        {
            id: 1,
            image: 'https://www.rosemacsales.com/assets/images/no_image.png',
            title: '1.5kg yam flour',
            price: '£0.00',
        },
        {
            id: 2,
            image: 'https://www.rosemacsales.com/assets/images/no_image.png',
            title: '2kg yam flour',
            price: '£0.00',
        },
        {
            id: 3,
            image: 'https://www.rosemacsales.com/assets/images/no_image.png',
            title: '5kg yam flour',
            price: '£0.00',
        },
        {
            id: 4,
            image: 'https://www.rosemacsales.com/assets/images/no_image.png',
            title: '20kg yam flour',
            price: '£0.00',
        },
        {
            id: 5,
            image: 'https://www.rosemacsales.com/assets/images/no_image.png',
            title: '1.5kg Ijebu gari',
            price: '£0.00',
        },
        {
            id: 6,
            image: 'https://www.rosemacsales.com/assets/images/no_image.png',
            title: '2kg Ijebu gari',
            price: '£0.00',
        },
        {
            id: 7,
            image: 'https://www.rosemacsales.com/assets/images/no_image.png',
            title: '5kg Ijebu gari',
            price: '£0.00',
        },
        {
            id: 8,
            image: 'https://www.rosemacsales.com/assets/images/no_image.png',
            title: '20kg Ijebu gari',
            price: '£0.00',
        },
        {
            id: 9,
            image: 'https://www.rosemacsales.com/assets/images/no_image.png',
            title: 'Ijebu gari',
            price: '£0.00',
        },
        {
            id: 10,
            image: 'https://www.rosemacsales.com/assets/images/no_image.png',
            title: '2kg Nigeria plantain flour ',
            price: '£0.00',
        },
        {
            id: 11,
            image: 'https://www.rosemacsales.com/assets/images/no_image.png',
            title: '5kg Nigeria plantain flour',
            price: '£0.00',
        },
        {
            id: 12,
            image: 'https://www.rosemacsales.com/assets/images/no_image.png',
            title: '20kg Ijebu gari',
            price: '£0.00',
        },
        {
            id: 13,
            image: 'https://www.rosemacsales.com/assets/images/no_image.png',
            title: 'Ijebu gari',
            price: '£0.00',
        },
        {
            id: 14,
            image: 'https://www.rosemacsales.com/assets/images/no_image.png',
            title: '5kg pounded yam',
            price: '£0.00',
        },
        {
            id: 15,
            image: 'https://www.rosemacsales.com/assets/images/no_image.png',
            title: '10kg pounded yam',
            price: '£0.00',
        },
        {
            id: 16,
            image: 'https://www.rosemacsales.com/assets/images/no_image.png',
            title: '2kg cassava flour (Lafun)',
            price: '£0.00',
        },
        {
            id: 17,
            image: 'https://www.rosemacsales.com/assets/images/no_image.png',
            title: '5kg cassava flour (Lafun)',
            price: '£0.00',
        },
        {
            id: 18,
            image: 'https://www.rosemacsales.com/assets/images/no_image.png',
            title: '20kg cassava flour (Lafun)',
            price: '£0.00',
        },
     ]
     
     const foodItems = [
        {
          id: 1,
          image: 'https://www.rosemacsales.com/assets/images/no_image.png',
          title: '4kg Ofada rice',
          price: '£0.00',
        },
        {
          id: 2,
          image: 'https://www.rosemacsales.com/assets/images/no_image.png',
          title: '4kg honey beans',
          price: '£0.00',
        },
        {
          id: 3,
          image: 'https://www.rosemacsales.com/assets/images/no_image.png',
          title: '20kg honey beans',
          price: '£0.00',
        },
        {
          id: 4,
          image: 'https://www.rosemacsales.com/assets/images/no_image.png',
          title: 'Indomie chicken noodles',
          price: '£0.00',
        },
        {
          id: 5,
          image: 'https://www.rosemacsales.com/assets/images/no_image.png',
          title: 'Indomie noodles onion',
          price: '£0.00',
        },
        {
          id: 6,
          image: 'https://www.rosemacsales.com/assets/images/no_image.png',
          title: 'Indomie noodles hungry man',
          price: '£0.00',
        },
        {
          id: 7,
          image: 'https://www.rosemacsales.com/assets/images/no_image.png',
          title: 'Indomie noodles chicken pepper soup',
          price: '£0.00',
        },
        {
          id: 8,
          image: 'https://www.rosemacsales.com/assets/images/no_image.png',
          title: 'Peeled beans',
          price: '£0.00',
        },
     
      ]
     
  return (
    <div>
        <Header />

        <p className='ml-5 italic mt-5 text-xs cursor-pointer'>
        <span>Home</span>
        <span className="text-gray-500"> {`>`} </span>
        <span className="text-rg_pink-light">All Products</span>
        <span className="text-gray-500"> {`>`} </span>
        <span className="text-rg_pink-light">3</span>
      </p>

        <main className='bg-gray-100'>
        <h1 className="text-3xl ml-5 mt-5 border-b pb-4 font-mono font-black">Flour</h1>

<div className="grid xl:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-4 p-5">
<div className='relative flex flex-col m-5 bg-white z-30 p-10 shadow-md hover:shadow-2xl cursor-pointer'>
       <p className='absolute top-2 right-2 text-xs italic text-gray-400'>flour</p>
       <img src={flourProducts[0].image} height={200} width={200} objectfit='contain' alt='product image' />
       <h4 className='my-3'>{flourProducts[0].title}</h4>
       <h4 className='my-3 font-extrabold'>{flourProducts[0].price}</h4>
       <button className='mt-3 view' onClick={() => router.push('./')}>View Product</button>
   </div>

   <div className='relative flex flex-col m-5 bg-white z-30 p-10 shadow-md hover:shadow-2xl cursor-pointer'>
       <p className='absolute top-2 right-2 text-xs italic text-gray-400'>flour</p>
       <img src={flourProducts[1].image} height={200} width={200} objectfit='contain' alt='product image' />
       <h4 className='my-3'>{flourProducts[1].title}</h4>
       <h4 className='my-3 font-extrabold'>{flourProducts[1].price}</h4>
       <button className='mt-3 view' onClick={() => router.push('./')}>View Product</button>
   </div>

   <div className='relative flex flex-col m-5 bg-white z-30 p-10 shadow-md hover:shadow-2xl cursor-pointer'>
       <p className='absolute top-2 right-2 text-xs italic text-gray-400'>flour</p>
       <img src={flourProducts[2].image} height={200} width={200} objectfit='contain' alt='product image' />
       <h4 className='my-3'>{flourProducts[2].title}</h4>
       <h4 className='my-3 font-extrabold'>{flourProducts[2].price}</h4>
       <button className='mt-3 view' onClick={() => router.push('./')}>View Product</button>
   </div>

   <div className='relative flex flex-col m-5 bg-white z-30 p-10 shadow-md hover:shadow-2xl cursor-pointer'>
       <p className='absolute top-2 right-2 text-xs italic text-gray-400'>flour</p>
       <img src={flourProducts[3].image} height={200} width={200} objectfit='contain' alt='product image' />
       <h4 className='my-3'>{flourProducts[3].title}</h4>
       <h4 className='my-3 font-extrabold'>{flourProducts[3].price}</h4>
       <button className='mt-3 view' onClick={() => router.push('./')}>View Product</button>
   </div>

   <div className='relative flex flex-col m-5 bg-white z-30 p-10 shadow-md hover:shadow-2xl cursor-pointer'>
       <p className='absolute top-2 right-2 text-xs italic text-gray-400'>flour</p>
       <img src={flourProducts[4].image} height={200} width={200} objectfit='contain' alt='product image' />
       <h4 className='my-3'>{flourProducts[4].title}</h4>
       <h4 className='my-3 font-extrabold'>{flourProducts[4].price}</h4>
       <button className='mt-3 view' onClick={() => router.push('./')}>View Product</button>
   </div>

   <div className='relative flex flex-col m-5 bg-white z-30 p-10 shadow-md hover:shadow-2xl cursor-pointer'>
       <p className='absolute top-2 right-2 text-xs italic text-gray-400'>flour</p>
       <img src={flourProducts[5].image} height={200} width={200} objectfit='contain' alt='product image' />
       <h4 className='my-3'>{flourProducts[5].title}</h4>
       <h4 className='my-3 font-extrabold'>{flourProducts[5].price}</h4>
       <button className='mt-3 view' onClick={() => router.push('./')}>View Product</button>
   </div>

   <div className='relative flex flex-col m-5 bg-white z-30 p-10 shadow-md hover:shadow-2xl cursor-pointer'>
       <p className='absolute top-2 right-2 text-xs italic text-gray-400'>flour</p>
       <img src={flourProducts[6].image} height={200} width={200} objectfit='contain' alt='product image' />
       <h4 className='my-3'>{flourProducts[6].title}</h4>
       <h4 className='my-3 font-extrabold'>{flourProducts[6].price}</h4>
       <button className='mt-3 view' onClick={() => router.push('./')}>View Product</button>
   </div>

   <div className='relative flex flex-col m-5 bg-white z-30 p-10 shadow-md hover:shadow-2xl cursor-pointer'>
       <p className='absolute top-2 right-2 text-xs italic text-gray-400'>flour</p>
       <img src={flourProducts[7].image} height={200} width={200} objectfit='contain' alt='product image' />
       <h4 className='my-3'>{flourProducts[7].title}</h4>
       <h4 className='my-3 font-extrabold'>{flourProducts[7].price}</h4>
       <button className='mt-3 view' onClick={() => router.push('./')}>View Product</button>
   </div>

   <div className='relative flex flex-col m-5 bg-white z-30 p-10 shadow-md hover:shadow-2xl cursor-pointer'>
       <p className='absolute top-2 right-2 text-xs italic text-gray-400'>flour</p>
       <img src={flourProducts[8].image} height={200} width={200} objectfit='contain' alt='product image' />
       <h4 className='my-3'>{flourProducts[8].title}</h4>
       <h4 className='my-3 font-extrabold'>{flourProducts[8].price}</h4>
       <button className='mt-3 view' onClick={() => router.push('./')}>View Product</button>
   </div>

   <div className='relative flex flex-col m-5 bg-white z-30 p-10 shadow-md hover:shadow-2xl cursor-pointer'>
       <p className='absolute top-2 right-2 text-xs italic text-gray-400'>flour</p>
       <img src={flourProducts[9].image} height={200} width={200} objectfit='contain' alt='product image' />
       <h4 className='my-3'>{flourProducts[9].title}</h4>
       <h4 className='my-3 font-extrabold'>{flourProducts[9].price}</h4>
       <button className='mt-3 view' onClick={() => router.push('./')}>View Product</button>
   </div>

   <div className='relative flex flex-col m-5 bg-white z-30 p-10 shadow-md hover:shadow-2xl cursor-pointer'>
       <p className='absolute top-2 right-2 text-xs italic text-gray-400'>flour</p>
       <img src={flourProducts[10].image} height={200} width={200} objectfit='contain' alt='product image' />
       <h4 className='my-3'>{flourProducts[10].title}</h4>
       <h4 className='my-3 font-extrabold'>{flourProducts[10].price}</h4>
       <button className='mt-3 view' onClick={() => router.push('./')}>View Product</button>
   </div>

   <div className='relative flex flex-col m-5 bg-white z-30 p-10 shadow-md hover:shadow-2xl cursor-pointer'>
       <p className='absolute top-2 right-2 text-xs italic text-gray-400'>flour</p>
       <img src={flourProducts[11].image} height={200} width={200} objectfit='contain' alt='product image' />
       <h4 className='my-3'>{flourProducts[11].title}</h4>
       <h4 className='my-3 font-extrabold'>{flourProducts[11].price}</h4>
       <button className='mt-3 view' onClick={() => router.push('./')}>View Product</button>
   </div>

   <div className='relative flex flex-col m-5 bg-white z-30 p-10 shadow-md hover:shadow-2xl cursor-pointer'>
       <p className='absolute top-2 right-2 text-xs italic text-gray-400'>flour</p>
       <img src={flourProducts[12].image} height={200} width={200} objectfit='contain' alt='product image' />
       <h4 className='my-3'>{flourProducts[12].title}</h4>
       <h4 className='my-3 font-extrabold'>{flourProducts[12].price}</h4>
       <button className='mt-3 view' onClick={() => router.push('./')}>View Product</button>
   </div>

   <div className='relative flex flex-col m-5 bg-white z-30 p-10 shadow-md hover:shadow-2xl cursor-pointer'>
       <p className='absolute top-2 right-2 text-xs italic text-gray-400'>flour</p>
       <img src={flourProducts[13].image} height={200} width={200} objectfit='contain' alt='product image' />
       <h4 className='my-3'>{flourProducts[13].title}</h4>
       <h4 className='my-3 font-extrabold'>{flourProducts[13].price}</h4>
       <button className='mt-3 view' onClick={() => router.push('./')}>View Product</button>
   </div>

   <div className='relative flex flex-col m-5 bg-white z-30 p-10 shadow-md hover:shadow-2xl cursor-pointer'>
       <p className='absolute top-2 right-2 text-xs italic text-gray-400'>flour</p>
       <img src={flourProducts[14].image} height={200} width={200} objectfit='contain' alt='product image' />
       <h4 className='my-3'>{flourProducts[14].title}</h4>
       <h4 className='my-3 font-extrabold'>{flourProducts[14].price}</h4>
       <button className='mt-3 view' onClick={() => router.push('./')}>View Product</button>
   </div>

   <div className='relative flex flex-col m-5 bg-white z-30 p-10 shadow-md hover:shadow-2xl cursor-pointer'>
       <p className='absolute top-2 right-2 text-xs italic text-gray-400'>flour</p>
       <img src={flourProducts[15].image} height={200} width={200} objectfit='contain' alt='product image' />
       <h4 className='my-3'>{flourProducts[15].title}</h4>
       <h4 className='my-3 font-extrabold'>{flourProducts[15].price}</h4>
       <button className='mt-3 view' onClick={() => router.push('./')}>View Product</button>
   </div>

   <div className='relative flex flex-col m-5 bg-white z-30 p-10 shadow-md hover:shadow-2xl cursor-pointer'>
       <p className='absolute top-2 right-2 text-xs italic text-gray-400'>flour</p>
       <img src={flourProducts[16].image} height={200} width={200} objectfit='contain' alt='product image' />
       <h4 className='my-3'>{flourProducts[16].title}</h4>
       <h4 className='my-3 font-extrabold'>{flourProducts[16].price}</h4>
       <button className='mt-3 view' onClick={() => router.push('./')}>View Product</button>
   </div>

   <div className='relative flex flex-col m-5 bg-white z-30 p-10 shadow-md hover:shadow-2xl cursor-pointer'>
       <p className='absolute top-2 right-2 text-xs italic text-gray-400'>flour</p>
       <img src={flourProducts[17].image} height={200} width={200} objectfit='contain' alt='product image' />
       <h4 className='my-3'>{flourProducts[17].title}</h4>
       <h4 className='my-3 font-extrabold'>{flourProducts[17].price}</h4>
       <button className='mt-3 view' onClick={() => router.push('./')}>View Product</button>
   </div>
</div>


<h1 className="text-3xl ml-5 mt-5 border-b pb-4 font-mono font-black">Foods</h1>

<div className="grid xl:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-4 p-5">
<div className='relative flex flex-col m-5 bg-white z-30 p-10 shadow-md hover:shadow-2xl cursor-pointer'>
   <p className='absolute top-2 right-2 text-xs italic text-gray-400'>foods</p>
   <img src={foodItems[0].image} height={200} width={200} objectfit='contain' alt='product image' />
   <h4 className='my-3'>{foodItems[0].title}</h4>
   <h4 className='my-3 font-extrabold'>{foodItems[0].price}</h4>
   <button className='mt-3 view' onClick={() => router.push('./')}>View Product</button>
 </div>

 <div className='relative flex flex-col m-5 bg-white z-30 p-10 shadow-md hover:shadow-2xl cursor-pointer'>
   <p className='absolute top-2 right-2 text-xs italic text-gray-400'>foods</p>
   <img src={foodItems[1].image} height={200} width={200} objectfit='contain' alt='product image' />
   <h4 className='my-3'>{foodItems[1].title}</h4>
   <h4 className='my-3 font-extrabold'>{foodItems[1].price}</h4>
   <button className='mt-3 view' onClick={() => router.push('./')}>View Product</button>
 </div>

 <div className='relative flex flex-col m-5 bg-white z-30 p-10 shadow-md hover:shadow-2xl cursor-pointer'>
   <p className='absolute top-2 right-2 text-xs italic text-gray-400'>foods</p>
   <img src={foodItems[2].image} height={200} width={200} objectfit='contain' alt='product image' />
   <h4 className='my-3'>{foodItems[2].title}</h4>
   <h4 className='my-3 font-extrabold'>{foodItems[2].price}</h4>
   <button className='mt-3 view' onClick={() => router.push('./')}>View Product</button>
 </div>

 <div className='relative flex flex-col m-5 bg-white z-30 p-10 shadow-md hover:shadow-2xl cursor-pointer'>
   <p className='absolute top-2 right-2 text-xs italic text-gray-400'>foods</p>
   <img src={foodItems[3].image} height={200} width={200} objectfit='contain' alt='product image' />
   <h4 className='my-3'>{foodItems[3].title}</h4>
   <h4 className='my-3 font-extrabold'>{foodItems[3].price}</h4>
   <button className='mt-3 view' onClick={() => router.push('./')}>View Product</button>
 </div>

 <div className='relative flex flex-col m-5 bg-white z-30 p-10 shadow-md hover:shadow-2xl cursor-pointer'>
   <p className='absolute top-2 right-2 text-xs italic text-gray-400'>foods</p>
   <img src={foodItems[4].image} height={200} width={200} objectfit='contain' alt='product image' />
   <h4 className='my-3'>{foodItems[4].title}</h4>
   <h4 className='my-3 font-extrabold'>{foodItems[4].price}</h4>
   <button className='mt-3 view' onClick={() => router.push('./')}>View Product</button>
 </div>

 <div className='relative flex flex-col m-5 bg-white z-30 p-10 shadow-md hover:shadow-2xl cursor-pointer'>
   <p className='absolute top-2 right-2 text-xs italic text-gray-400'>foods</p>
   <img src={foodItems[5].image} height={200} width={200} objectfit='contain' alt='product image' />
   <h4 className='my-3'>{foodItems[5].title}</h4>
   <h4 className='my-3 font-extrabold'>{foodItems[5].price}</h4>
   <button className='mt-3 view' onClick={() => router.push('./')}>View Product</button>
 </div>

 <div className='relative flex flex-col m-5 bg-white z-30 p-10 shadow-md hover:shadow-2xl cursor-pointer'>
   <p className='absolute top-2 right-2 text-xs italic text-gray-400'>foods</p>
   <img src={foodItems[6].image} height={200} width={200} objectfit='contain' alt='product image' />
   <h4 className='my-3'>{foodItems[6].title}</h4>
   <h4 className='my-3 font-extrabold'>{foodItems[6].price}</h4>
   <button className='mt-3 view' onClick={() => router.push('./')}>View Product</button>
 </div>

 <div className='relative flex flex-col m-5 bg-white z-30 p-10 shadow-md hover:shadow-2xl cursor-pointer'>
   <p className='absolute top-2 right-2 text-xs italic text-gray-400'>foods</p>
   <img src={foodItems[7].image} height={200} width={200} objectfit='contain' alt='product image' />
   <h4 className='my-3'>{foodItems[7].title}</h4>
   <h4 className='my-3 font-extrabold'>{foodItems[7].price}</h4>
   <button className='mt-3 view' onClick={() => router.push('./')}>View Product</button>
 </div>
</div>

        </main>

        <div className="flex justify-center mt-5">
  <nav aria-label="Page navigation example">
    <ul className="list-style-none flex">
      <li>
      <Link href="all-products-2">
         <p className="relative block rounded bg-transparent py-1.5 px-3 text-sm text-neutral-600 transition-all duration-300 hover:bg-neutral-100 dark:text-white dark:hover:bg-neutral-700 dark:hover:text-white">Previous</p>
        </Link>
      </li>
      <li>
      <Link href="all-products">
         <p className="relative block rounded bg-transparent py-1.5 px-3 text-sm text-neutral-600 transition-all duration-300 hover:bg-neutral-100 dark:text-white dark:hover:bg-neutral-700 dark:hover:text-white">1</p>
        </Link>
      </li>
      <li aria-current="page">
      <Link href="all-products-2">
         <p className="relative block rounded bg-transparent py-1.5 px-3 text-sm text-neutral-600 transition-all duration-300 hover:bg-neutral-100 dark:text-white dark:hover:bg-neutral-700 dark:hover:text-white">2</p>
        </Link>
      </li>
      <li>
      <Link href="all-products-3">
         <p className="relative block rounded bg-transparent py-1.5 px-3 text-sm text-neutral-600 transition-all duration-300 hover:bg-neutral-100 dark:text-white dark:hover:bg-neutral-700 dark:hover:text-white">3</p>
        </Link>
      </li>
      <li>
        <Link href="all-products">
         <p className="relative block rounded bg-transparent py-1.5 px-3 text-sm text-neutral-600 transition-all duration-300 hover:bg-neutral-100 dark:text-white dark:hover:bg-neutral-700 dark:hover:text-white">Next</p>
        </Link>
      </li>
    </ul>
  </nav>
</div>


        <Footer />
    </div>
  )
}

export default allProductsThree