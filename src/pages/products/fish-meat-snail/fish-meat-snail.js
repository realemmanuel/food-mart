import React from 'react'
import Footer from '../../../components/Footer'
import Header from '../../../components/Header'

const fishMeatSnail = () => {
  const fishMeatSnailProducts = [
    {
      id: 1,
      image: 'https://www.rgafrocaribbeanfoods.com/wp-content/uploads/2020/07/rg-afro-caribbean-foods-catfish.jpg',
      title: 'Fish Products',
      buttonText: 'Read More',
    },
    {
      id: 2,
      image: 'https://www.rgafrocaribbeanfoods.com/wp-content/uploads/2020/07/rg-afro-caribbean-foods-cowskin.jpg',
      title: 'Smoked Cow skin',
      buttonText: 'Read More',
    },
    {
      id: 3,
      image: 'https://www.rgafrocaribbeanfoods.com/wp-content/uploads/2020/07/snail.jpg',
      title: 'Jumbo Snail',
      buttonText: 'Read More',
    },
  ]
  return (
    <div>
        <Header />
        <h1 className="text-3xl ml-5 mt-5 border-b pb-4">Fish, Meat and Snail</h1>

        <main className="grid xl:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-4 p-5 ">
        <div className='bg-gray-100 mt-9 cursor-pointer mx-auto border-b pb-9 hover:border-black p-5' onClick={() => router.push('/snacks/groundnut')}>
            <img src={fishMeatSnailProducts[0].image} width={200} height={200}/>
            <p className='text-gray-400 hover:text-gray-500 cursor-pointer'>{fishMeatSnailProducts[0].title}</p>
            <p className='text-gray-400 hover:text-gray-500 cursor-pointer'>{fishMeatSnailProducts[0].price}</p>
            <button className='button'>{fishMeatSnailProducts[0].buttonText}</button>
         </div>
         <div className='bg-gray-100 mt-9 cursor-pointer mx-auto border-b pb-9 hover:border-black p-5' onClick={() => router.push('/snacks/groundnut')}>
            <img src={fishMeatSnailProducts[1].image} width={200} height={200}/>
            <p className='text-gray-400 hover:text-gray-500 cursor-pointer'>{fishMeatSnailProducts[1].title}</p>
            <p className='text-gray-400 hover:text-gray-500 cursor-pointer'>{fishMeatSnailProducts[1].price}</p>
            <button className='button'>{fishMeatSnailProducts[1].buttonText}</button>
         </div>
         <div className='bg-gray-100 mt-9 cursor-pointer mx-auto border-b pb-9 hover:border-black p-5' onClick={() => router.push('/snacks/groundnut')}>
            <img src={fishMeatSnailProducts[2].image} width={200} height={200}/>
            <p className='text-gray-400 hover:text-gray-500 cursor-pointer'>{fishMeatSnailProducts[2].title}</p>
            <p className='text-gray-400 hover:text-gray-500 cursor-pointer'>{fishMeatSnailProducts[2].price}</p>
            <button className='button'>{fishMeatSnailProducts[2].buttonText}</button>
         </div>

        </main>

        <Footer />
    </div>
  )
}

export default fishMeatSnail