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
            title: 'Food Ingredients / Spices & Seasonings',
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
            title: 'Flours, Pounded Yam, Garri',
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
        <Header />

        <h1 className="text-3xl ml-5 mt-5 border-b pb-4">All Products</h1>

        <main>
        <h3 className="text-3xl ml-9 mt-5 underline text-gray-500 cursor-pointer hover:text-gray-700" onClick={() => router.push('./groceries/groceries')}>Groceries</h3>
            <div className='grid xl:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-4 p-5 '>
            <div className='mt-9 cursor-pointer mx-auto border-b pb-9' onClick={() => router.push('./groceries/canfood')}>
            <img src={groceriesProduct[0].image} width={200} height={200}/>
            <p className='text-gray-400 hover:text-gray-500 cursor-pointer'>{groceriesProduct[0].title}</p>
         </div>
         <div className='mt-9 cursor-pointer mx-auto border-b pb-9' onClick={() => router.push('./groceries/food-ingredient-spices-seasonings')}>
            <img src={groceriesProduct[1].image} width={200} height={200}/>
            <p className='text-gray-400 hover:text-gray-500 cursor-pointer'>{groceriesProduct[1].title}</p>
         </div>
         <div className='mt-9 cursor-pointer mx-auto border-b pb-9' onClick={() => router.push('./groceries/oil')}>
            <img src={groceriesProduct[2].image} width={200} height={200}/>
            <p className='text-gray-400 hover:text-gray-500 cursor-pointer'>{groceriesProduct[2].title}</p>
         </div>
         <div className='mt-9 cursor-pointer mx-auto border-b pb-9' onClick={() => router.push('./groceries/beverages')}>
            <img src={groceriesProduct[3].image} width={200} height={200}/>
            <p className='text-gray-400 hover:text-gray-500 cursor-pointer'>{groceriesProduct[3].title}</p>
         </div>
         <div className='mt-9 cursor-pointer mx-auto border-b pb-9' onClick={() => router.push('./groceries/rice-pasta-beans')}>
            <img src={groceriesProduct[4].image} width={200} height={200}/>
            <p className='text-gray-400 hover:text-gray-500 cursor-pointer'>{groceriesProduct[4].title}</p>
         </div>
         <div className='mt-9 cursor-pointer mx-auto border-b pb-9' onClick={() => router.push('./groceries/drinks')}>
            <img src={groceriesProduct[5].image} width={200} height={200}/>
            <p className='text-gray-400 hover:text-gray-500 cursor-pointer'>{groceriesProduct[5].title}</p>
         </div>
         <div className='mt-9 cursor-pointer mx-auto border-b pb-9' onClick={() => router.push('./groceries/flours')}>
            <img src={groceriesProduct[6].image} width={200} height={200}/>
            <p className='text-gray-400 hover:text-gray-500 cursor-pointer'>{groceriesProduct[6].title}</p>
         </div>
         <div className='mt-9 cursor-pointer mx-auto border-b pb-9' onClick={() => router.push('./groceries/snacks')}>
            <img src={groceriesProduct[7].image} width={200} height={200}/>
            <p className='text-gray-400 hover:text-gray-500 cursor-pointer'>{groceriesProduct[7].title}</p>
         </div>
            </div>

            <h3 className="text-3xl ml-9 mt-5 underline text-gray-500 cursor-pointer hover:text-gray-700" onClick={() => router.push('./ethnic-foods/ethnic-foods')}>Ethnic Foods</h3>
            <div className='grid xl:grid-cols-5 md:grid-cols-2 sm:grid-cols-1 gap-1'>
            <div className='mt-9 cursor-pointer mx-auto pb-9 border-b' onClick={() => router.push('./ethnic-foods/dried-vegetables')}>
            <img src={ethnicFoodsList[0].image} width={200} height={200}/>
            <p className='text-gray-400 hover:text-gray-500 cursor-pointer'>{ethnicFoodsList[0].title}</p>
         </div>
         <div className='mt-9 cursor-pointer mx-auto pb-9 border-b' onClick={() => router.push('./ethnic-foods/corn-starch')}>
            <img src={ethnicFoodsList[1].image} width={200} height={200}/>
            <p className='text-gray-400 hover:text-gray-500 cursor-pointer'>{ethnicFoodsList[1].title}</p>
         </div>
            </div>
        </main>



        <Footer />
    </div>
  )
}

export default allProducts