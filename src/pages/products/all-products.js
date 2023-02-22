import React from 'react'
import Header from '../../components/Header'
import { useRouter } from 'next/router'
import Footer from '../../components/Footer'
import Link from 'next/link'

const allProducts = () => {
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
    
  const ethnicFoodsList = [
   {
     id: 1,
     image: 'https://www.rosemacsales.com/assets/images/no_image.png',
     title: 'Dried ugba',
     price: '£0.00',
   },
   {
     id: 2,
     image: 'https://www.rosemacsales.com/assets/images/no_image.png',
     title: 'Abacha',
     price: '£0.00',
   },
   {
     id: 3,
     image: 'https://www.rosemacsales.com/assets/images/no_image.png',
     title: 'Achi',
     price: '£0.00',
   },
   {
     id: 4,
     image: 'https://www.rosemacsales.com/assets/images/no_image.png',
     title: 'Alligator pepper',
     price: '£0.00',
   },
   {
     id: 5,
     image: 'https://www.rosemacsales.com/assets/images/no_image.png',
     title: 'Pepper soup spice',
     price: '£0.00',
   },
   {
     id: 6,
     image: 'https://www.rosemacsales.com/assets/images/no_image.png',
     title: 'Dried Utazi',
     price: '£0.00',
   },
   {
     id: 7,
     image: 'https://www.rosemacsales.com/assets/images/no_image.png',
     title: 'Dried Okazi',
     price: '£0.00',
   },
   {
     id: 8,
     image: 'https://www.rosemacsales.com/assets/images/no_image.png',
     title: 'Dried bitter leaf',
     price: '£0.00',
   },
 ]

 const oilProducts = [
   {
     id: 1,
     image: 'https://www.rosemacsales.com/assets/images/no_image.png',
     title: '1ltr Nigeria palm oil',
     price: '£0.00',
     buttonText: 'Read More',
   },
   {
     id: 2,
     image: 'https://www.rosemacsales.com/assets/images/no_image.png',
     title: '2litres Nigeria Palm oil',
     price: '£0.00',
     buttonText: 'Read More',
   },
   {
     id: 3,
     image: 'https://www.rosemacsales.com/assets/images/no_image.png',
     title: '4litres Nigeria Palm oil',
     price: '£0.00',
     buttonText: 'Read More',
   },
   {
     id: 4,
     image: 'https://www.rosemacsales.com/assets/images/no_image.png',
     title: '2litres Ayamase oil',
     price: '£0.00',
     buttonText: 'Read More',
   },
   {
     id: 5,
     image: 'https://www.rosemacsales.com/assets/images/no_image.png',
     title: '4litres Ayamase oil',
     price: '£0.00',
     buttonText: 'Read More',
   },
   {
     id: 6,
     image: 'https://www.rosemacsales.com/assets/images/no_image.png',
     title: 'Ghana oil',
     price: '£0.00',
     buttonText: 'Read More',
   },
   {
     id: 7,
     image: 'https://www.rosemacsales.com/assets/images/no_image.png',
     title: '5litres KTC oil',
     price: '£0.00',
     buttonText: 'Read More',
   },
   {
     id: 8,
     image: 'https://www.rosemacsales.com/assets/images/no_image.png',
     title: '10litres KTC oil',
     price: '£0.00',
     buttonText: 'Read More',
   },
 ]


  return (
    <div>
        <Header />

        <p className='ml-5 italic mt-5 text-xs cursor-pointer'>
        <span>Home</span>
        <span className="text-gray-500"> {`>`} </span>
        <span className="text-rg_pink-light">All Products</span>
      </p>

      <h1 className="text-3xl ml-5 mt-5 border-b pb-4 font-mono font-black">Groceries</h1>


        <main className='bg-gray-100'>
        <div className="grid xl:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-4 p-5 ">
        <div className='relative flex flex-col m-5 bg-white z-30 p-10 shadow-md hover:shadow-2xl cursor-pointer'>
            <p className='absolute top-2 right-2 text-xs italic text-gray-400'>groceries</p>
            <img src={groceriesProduct[0].image} height={200} width={200} objectfit='contain' alt='product image' />
            <h4 className='my-3'>{groceriesProduct[0].title}</h4>
            <button className='mt-3 view' onClick={() => router.push('./spices-seasonings')}>View Product</button>
        </div>

        <div className='relative flex flex-col m-5 bg-white z-30 p-10 shadow-md hover:shadow-2xl cursor-pointer'>
            <p className='absolute top-2 right-2 text-xs italic text-gray-400'>groceries</p>
            <img src={groceriesProduct[1].image} height={200} width={200} objectfit='contain' alt='product image' />
            <h4 className='my-3'>{groceriesProduct[1].title}</h4>
            <button className='mt-3 view' onClick={() => router.push('./cooking-ingredients')}>View Product</button>
        </div>

        <div className='relative flex flex-col m-5 bg-white z-30 p-10 shadow-md hover:shadow-2xl cursor-pointer'>
            <p className='absolute top-2 right-2 text-xs italic text-gray-400'>groceries</p>
            <img src={groceriesProduct[2].image} height={200} width={200} objectfit='contain' alt='product image' />
            <h4 className='my-3'>{groceriesProduct[2].title}</h4>
            <button className='mt-3 view' onClick={() => router.push('./oil')}>View Product</button>
        </div>

        <div className='relative flex flex-col m-5 bg-white z-30 p-10 shadow-md hover:shadow-2xl cursor-pointer'>
            <p className='absolute top-2 right-2 text-xs italic text-gray-400'>groceries</p>
            <img src={groceriesProduct[3].image} height={200} width={200} objectfit='contain' alt='product image' />
            <h4 className='my-3'>{groceriesProduct[3].title}</h4>
            <button className='mt-3 view' onClick={() => router.push('./beverages')}>View Product</button>
        </div>

        <div className='relative flex flex-col m-5 bg-white z-30 p-10 shadow-md hover:shadow-2xl cursor-pointer'>
            <p className='absolute top-2 right-2 text-xs italic text-gray-400'>groceries</p>
            <img src={groceriesProduct[4].image} height={200} width={200} objectfit='contain' alt='product image' />
            <h4 className='my-3'>{groceriesProduct[4].title}</h4>
            <button className='mt-3 view' onClick={() => router.push('./rice-pasta-beans')}>View Product</button>
        </div>

        <div className='relative flex flex-col m-5 bg-white z-30 p-10 shadow-md hover:shadow-2xl cursor-pointer'>
            <p className='absolute top-2 right-2 text-xs italic text-gray-400'>groceries</p>
            <img src={groceriesProduct[5].image} height={200} width={200} objectfit='contain' alt='product image' />
            <h4 className='my-3'>{groceriesProduct[5].title}</h4>
            <button className='mt-3 view' onClick={() => router.push('./drinks')}>View Product</button>
        </div>

        <div className='relative flex flex-col m-5 bg-white z-30 p-10 shadow-md hover:shadow-2xl cursor-pointer'>
            <p className='absolute top-2 right-2 text-xs italic text-gray-400'>groceries</p>
            <img src={groceriesProduct[6].image} height={200} width={200} objectfit='contain' alt='product image' />
            <h4 className='my-3'>{groceriesProduct[6].title}</h4>
            <button className='mt-3 view' onClick={() => router.push('./garri')}>View Product</button>
        </div>

        <div className='relative flex flex-col m-5 bg-white z-30 p-10 shadow-md hover:shadow-2xl cursor-pointer'>
            <p className='absolute top-2 right-2 text-xs italic text-gray-400'>groceries</p>
            <img src={groceriesProduct[7].image} height={200} width={200} objectfit='contain' alt='product image' />
            <h4 className='my-3'>{groceriesProduct[7].title}</h4>
            <button className='mt-3 view' onClick={() => router.push('./snacks')}>View Product</button>
        </div>
         </div>

         <h1 className="text-3xl ml-5 mt-5 border-b pb-4 font-mono font-black">Ethnic Foods</h1>

         <div className="grid xl:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-4 p-5">
         <div className='relative flex flex-col m-5 bg-white z-30 p-10 shadow-md hover:shadow-2xl cursor-pointer'>
                <p className='absolute top-2 right-2 text-xs italic text-gray-400'>ethnic foods</p>
                <img src={ethnicFoodsList[0].image} height={200} width={200} objectfit='contain' alt='product image' />
                <h4 className='my-3'>{ethnicFoodsList[0].title}</h4>
                <h4 className='my-3 font-extrabold'>{ethnicFoodsList[0].price}</h4>
                <button className='mt-3 view' onClick={() => router.push('./')}>View Product</button>
            </div>

            <div className='relative flex flex-col m-5 bg-white z-30 p-10 shadow-md hover:shadow-2xl cursor-pointer'>
                <p className='absolute top-2 right-2 text-xs italic text-gray-400'>ethnic foods</p>
                <img src={ethnicFoodsList[1].image} height={200} width={200} objectfit='contain' alt='product image' />
                <h4 className='my-3'>{ethnicFoodsList[1].title}</h4>
                <h4 className='my-3 font-extrabold'>{ethnicFoodsList[0].price}</h4>
                <button className='mt-3 view' onClick={() => router.push('./')}>View Product</button>
            </div>

            <div className='relative flex flex-col m-5 bg-white z-30 p-10 shadow-md hover:shadow-2xl cursor-pointer'>
                <p className='absolute top-2 right-2 text-xs italic text-gray-400'>ethnic foods</p>
                <img src={ethnicFoodsList[2].image} height={200} width={200} objectfit='contain' alt='product image' />
                <h4 className='my-3'>{ethnicFoodsList[2].title}</h4>
                <h4 className='my-3 font-extrabold'>{ethnicFoodsList[2].price}</h4>
                <button className='mt-3 view' onClick={() => router.push('./')}>View Product</button>
            </div>

            <div className='relative flex flex-col m-5 bg-white z-30 p-10 shadow-md hover:shadow-2xl cursor-pointer'>
                <p className='absolute top-2 right-2 text-xs italic text-gray-400'>ethnic foods</p>
                <img src={ethnicFoodsList[3].image} height={200} width={200} objectfit='contain' alt='product image' />
                <h4 className='my-3'>{ethnicFoodsList[3].title}</h4>
                <h4 className='my-3 font-extrabold'>{ethnicFoodsList[3].price}</h4>
                <button className='mt-3 view' onClick={() => router.push('./')}>View Product</button>
            </div>

            <div className='relative flex flex-col m-5 bg-white z-30 p-10 shadow-md hover:shadow-2xl cursor-pointer'>
                <p className='absolute top-2 right-2 text-xs italic text-gray-400'>ethnic foods</p>
                <img src={ethnicFoodsList[4].image} height={200} width={200} objectfit='contain' alt='product image' />
                <h4 className='my-3'>{ethnicFoodsList[4].title}</h4>
                <h4 className='my-3 font-extrabold'>{ethnicFoodsList[4].price}</h4>
                <button className='mt-3 view' onClick={() => router.push('./')}>View Product</button>
            </div>

            <div className='relative flex flex-col m-5 bg-white z-30 p-10 shadow-md hover:shadow-2xl cursor-pointer'>
                <p className='absolute top-2 right-2 text-xs italic text-gray-400'>ethnic foods</p>
                <img src={ethnicFoodsList[5].image} height={200} width={200} objectfit='contain' alt='product image' />
                <h4 className='my-3'>{ethnicFoodsList[5].title}</h4>
                <h4 className='my-3 font-extrabold'>{ethnicFoodsList[5].price}</h4>
                <button className='mt-3 view' onClick={() => router.push('./')}>View Product</button>
            </div>

            <div className='relative flex flex-col m-5 bg-white z-30 p-10 shadow-md hover:shadow-2xl cursor-pointer'>
                <p className='absolute top-2 right-2 text-xs italic text-gray-400'>ethnic foods</p>
                <img src={ethnicFoodsList[6].image} height={200} width={200} objectfit='contain' alt='product image' />
                <h4 className='my-3'>{ethnicFoodsList[6].title}</h4>
                <h4 className='my-3 font-extrabold'>{ethnicFoodsList[6].price}</h4>
                <button className='mt-3 view' onClick={() => router.push('./')}>View Product</button>
            </div>

            <div className='relative flex flex-col m-5 bg-white z-30 p-10 shadow-md hover:shadow-2xl cursor-pointer'>
                <p className='absolute top-2 right-2 text-xs italic text-gray-400'>ethnic foods</p>
                <img src={ethnicFoodsList[7].image} height={200} width={200} objectfit='contain' alt='product image' />
                <h4 className='my-3'>{ethnicFoodsList[7].title}</h4>
                <h4 className='my-3 font-extrabold'>{ethnicFoodsList[7].price}</h4>
                <button className='mt-3 view' onClick={() => router.push('./')}>View Product</button>
            </div>

         </div>

         <h2 className="text-3xl ml-5 mt-5 border-b pb-4">Oil</h2>

        <div className="grid xl:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-4 p-5">
        <div className='relative flex flex-col m-5 bg-white z-30 p-10 shadow-md hover:shadow-2xl cursor-pointer'>
                <p className='absolute top-2 right-2 text-xs italic text-gray-400'>oil</p>
                <img src={oilProducts[0].image} height={200} width={200} objectfit='contain' alt='product image' />
                <h4 className='my-3'>{oilProducts[0].title}</h4>
                <h4 className='my-3 font-extrabold'>{oilProducts[0].price}</h4>
                <button className='mt-3 view' onClick={() => router.push('./')}>View Product</button>
             </div>

             <div className='relative flex flex-col m-5 bg-white z-30 p-10 shadow-md hover:shadow-2xl cursor-pointer'>
                <p className='absolute top-2 right-2 text-xs italic text-gray-400'>oil</p>
                <img src={oilProducts[1].image} height={200} width={200} objectfit='contain' alt='product image' />
                <h4 className='my-3'>{oilProducts[1].title}</h4>
                <h4 className='my-3 font-extrabold'>{oilProducts[1].price}</h4>
                <button className='mt-3 view' onClick={() => router.push('./')}>View Product</button>
             </div>

             <div className='relative flex flex-col m-5 bg-white z-30 p-10 shadow-md hover:shadow-2xl cursor-pointer'>
                <p className='absolute top-2 right-2 text-xs italic text-gray-400'>oil</p>
                <img src={oilProducts[2].image} height={200} width={200} objectfit='contain' alt='product image' />
                <h4 className='my-3'>{oilProducts[2].title}</h4>
                <h4 className='my-3 font-extrabold'>{oilProducts[2].price}</h4>
                <button className='mt-3 view' onClick={() => router.push('./')}>View Product</button>
             </div>

             <div className='relative flex flex-col m-5 bg-white z-30 p-10 shadow-md hover:shadow-2xl cursor-pointer'>
                <p className='absolute top-2 right-2 text-xs italic text-gray-400'>oil</p>
                <img src={oilProducts[3].image} height={500} width={500} objectfit='contain' alt='product image' />
                <h4 className='my-3'>{oilProducts[3].title}</h4>
                <h4 className='my-3 font-extrabold'>{oilProducts[3].price}</h4>
                <button className='mt-3 view' onClick={() => router.push('./')}>View Product</button>
             </div>

             <div className='relative flex flex-col m-5 bg-white z-30 p-10 shadow-md hover:shadow-2xl cursor-pointer'>
                <p className='absolute top-2 right-2 text-xs italic text-gray-400'>oil</p>
                <img src={oilProducts[4].image} height={500} width={500} objectfit='contain' alt='product image' />
                <h4 className='my-3'>{oilProducts[4].title}</h4>
                <h4 className='my-3 font-extrabold'>{oilProducts[4].price}</h4>
                <button className='mt-3 view' onClick={() => router.push('./')}>View Product</button>
             </div>

             <div className='relative flex flex-col m-5 bg-white z-30 p-10 shadow-md hover:shadow-2xl cursor-pointer'>
                <p className='absolute top-2 right-2 text-xs italic text-gray-400'>oil</p>
                <img src={oilProducts[5].image} height={500} width={500} objectfit='contain' alt='product image' />
                <h4 className='my-3'>{oilProducts[5].title}</h4>
                <h4 className='my-3 font-extrabold'>{oilProducts[5].price}</h4>
                <button className='mt-3 view' onClick={() => router.push('./')}>View Product</button>
             </div>

             <div className='relative flex flex-col m-5 bg-white z-30 p-10 shadow-md hover:shadow-2xl cursor-pointer'>
                <p className='absolute top-2 right-2 text-xs italic text-gray-400'>oil</p>
                <img src={oilProducts[6].image} height={500} width={500} objectfit='contain' alt='product image' />
                <h4 className='my-3'>{oilProducts[6].title}</h4>
                <h4 className='my-3 font-extrabold'>{oilProducts[6].price}</h4>
                <button className='mt-3 view' onClick={() => router.push('./')}>View Product</button>
             </div>

             <div className='relative flex flex-col m-5 bg-white z-30 p-10 shadow-md hover:shadow-2xl cursor-pointer'>
                <p className='absolute top-2 right-2 text-xs italic text-gray-400'>oil</p>
                <img src={oilProducts[7].image} height={500} width={500} objectfit='contain' alt='product image' />
                <h4 className='my-3'>{oilProducts[7].title}</h4>
                <h4 className='my-3 font-extrabold'>{oilProducts[7].price}</h4>
                <button className='mt-3 view' onClick={() => router.push('./')}>View Product</button>
             </div>
         </div>   
    </main>
        
    <div className="flex justify-center mt-5">
  <nav aria-label="Page navigation example">
    <ul className="list-style-none flex">
      <li>
      <Link href="/">
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
        <Link href="all-products-2">
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

export default allProducts