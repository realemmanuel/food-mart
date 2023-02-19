import { useRouter } from 'next/router'
import React from 'react'
import Footer from '../../../components/Footer'
import Header from '../../../components/Header'

const flour = () => {
    const router = useRouter();
    const flourProducts = [
        {
            id: 1,
            image: 'https://www.rgafrocaribbeanfoods.com/wp-content/uploads/2020/08/rg-afro-caribbean-yamflour_4kg-300x300.jpg',
            title: 'Yam flour (elubo dudu) 4kg',
            price: '£6.99',
            buttonText: 'Read More',
        },
        {
            id: 2,
            image: 'https://www.rgafrocaribbeanfoods.com/wp-content/uploads/2020/08/rg-afro-caribbean-yamflour_5kg-300x300.jpg',
            title: 'Yam flour (elubo dudu) 5kg',
            price: '£7.99',
            buttonText: 'Read More',
        },
        {
            id: 3,
            image: 'https://www.rgafrocaribbeanfoods.com/wp-content/uploads/2020/08/rg-afro-caribbean-yamflour_20kg-300x300.jpg',
            title: 'Yam flour (elubo dudu) 20kg',
            price: '£31.99',
            buttonText: 'Read More',
        },
        {
            id: 4,
            image: 'https://www.rgafrocaribbeanfoods.com/wp-content/uploads/2020/08/rg-afro-caribbean-foods-elubo-garri-elubo-ogede4kg-300x300.jpg',
            title: 'Plantain Flour – Elubo Ogede – 5kg',
            price: '£8.99',
            buttonText: 'Read More',
        },
        {
            id: 5,
            image: 'https://www.rgafrocaribbeanfoods.com/wp-content/uploads/2020/07/rg-afro-caribbean-foods-fufu-flour-e1596043393500.jpg',
            title: 'Fufu Flour - 20kg',
            price: '£0.00',
            buttonText: 'Read More',
        },
        {
            id: 6,
            image: 'https://www.rgafrocaribbeanfoods.com/wp-content/uploads/2020/07/rg-afro-caribbean-foods-fufu-flour-e1596043393500.jpg',
            title: 'Fufu flour 10kg',
            price: '£0.00',
            buttonText: 'Read More',
        },
        {
            id: 7,
            image: 'https://www.rgafrocaribbeanfoods.com/wp-content/uploads/2020/07/rg-afro-caribbean-foods-fufu-flour-e1596043393500.jpg',
            title: 'Fufu flour 5kg',
            price: '£0.00',
            buttonText: 'Read More',
        },
        {
            id: 8,
            image: 'https://www.rgafrocaribbeanfoods.com/wp-content/uploads/2020/07/rg-afro-caribbean-foods-fufu-flour-e1596043393500.jpg',
            title: 'Fufu flour 4kg',
            price: '£0.00',
            buttonText: 'Read More',
        },
        {
            id: 9,
            image: 'https://www.rgafrocaribbeanfoods.com/wp-content/uploads/2020/07/rg-afro-caribbean-foods-elubo-lafu4kg-300x300.jpg',
            title: 'Elubo Lafu / Cassava flour – 4 Kg',
            price: '£0.00',
            buttonText: 'Read More',
        },
        {
            id: 10,
            image: 'https://www.rgafrocaribbeanfoods.com/wp-content/uploads/2020/07/rg-afro-caribbean-foods-elubo-lafu5kg-300x300.jpg',
            title: 'Elubo Lafu / Cassava flour – 5 Kg',
            price: '£0.00',
            buttonText: 'Read More',
        },
        {
            id: 11,
            image: 'https://www.rgafrocaribbeanfoods.com/wp-content/uploads/2020/07/rg-afro-caribbean-foods-elubo-lafu10kg-300x300.jpg',
            title: 'Yam flour (elubo dudu) 4kg',
            price: '£6.99',
            buttonText: 'Read More',
        },
        {
            id: 12,
            image: 'https://www.rgafrocaribbeanfoods.com/wp-content/uploads/2020/08/rg-afro-caribbean-yamflour_4kg-300x300.jpg',
            title: 'Elubo Lafu / Cassava flour – 10 Kg',
            price: '£6.99',
            buttonText: 'Read More',
        },
        {
            id: 13,
            image: 'https://www.rgafrocaribbeanfoods.com/wp-content/uploads/2020/07/rg-afro-caribbean-foods-elubo-lafu-20kg-300x300.jpg',
            title: 'Elubo Lafu / Cassava flour – 20 Kg',
            price: '£6.99',
            buttonText: 'Read More',
        }
    ]
  return (
    <div>
        <Header />
        <h1 className="text-3xl ml-5 mt-5 border-b pb-4">Flour</h1>

        <main className="grid xl:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-4 p-5 ">
        <div className='bg-gray-100 mt-9 cursor-pointer mx-auto border-b pb-9 hover:border-black p-5' onClick={() => router.push('/snacks/groundnut')}>
            <img src={flourProducts[0].image} width={200} height={200}/>
            <p className='text-gray-400 hover:text-gray-500 cursor-pointer'>{flourProducts[0].title}</p>
            <p className='text-gray-400 hover:text-gray-500 cursor-pointer'>{flourProducts[0].price}</p>
            <button className='button'>{flourProducts[0].buttonText}</button>
         </div>
         <div className='bg-gray-100 mt-9 cursor-pointer mx-auto border-b pb-9 hover:border-black p-5' onClick={() => router.push('/snacks/groundnut')}>
            <img src={flourProducts[1].image} width={200} height={200}/>
            <p className='text-gray-400 hover:text-gray-500 cursor-pointer'>{flourProducts[1].title}</p>
            <p className='text-gray-400 hover:text-gray-500 cursor-pointer'>{flourProducts[1].price}</p>
            <button className='button'>{flourProducts[1].buttonText}</button>
         </div>
         <div className='bg-gray-100 mt-9 cursor-pointer mx-auto border-b pb-9 hover:border-black p-5' onClick={() => router.push('/snacks/groundnut')}>
            <img src={flourProducts[2].image} width={200} height={200}/>
            <p className='text-gray-400 hover:text-gray-500 cursor-pointer'>{flourProducts[2].title}</p>
            <p className='text-gray-400 hover:text-gray-500 cursor-pointer'>{flourProducts[2].price}</p>
            <button className='button'>{flourProducts[2].buttonText}</button>
         </div>
         <div className='bg-gray-100 mt-9 cursor-pointer mx-auto border-b pb-9 hover:border-black p-5' onClick={() => router.push('/snacks/groundnut')}>
            <img src={flourProducts[3].image} width={200} height={200}/>
            <p className='text-gray-400 hover:text-gray-500 cursor-pointer'>{flourProducts[3].title}</p>
            <p className='text-gray-400 hover:text-gray-500 cursor-pointer'>{flourProducts[3].price}</p>
            <button className='button'>{flourProducts[3].buttonText}</button>
         </div>
         <div className='bg-gray-100 mt-9 cursor-pointer mx-auto border-b pb-9 hover:border-black p-5' onClick={() => router.push('/snacks/groundnut')}>
            <img src={flourProducts[4].image} width={200} height={200}/>
            <p className='text-gray-400 hover:text-gray-500 cursor-pointer'>{flourProducts[4].title}</p>
            <p className='text-gray-400 hover:text-gray-500 cursor-pointer'>{flourProducts[4].price}</p>
            <button className='button'>{flourProducts[4].buttonText}</button>
         </div>
         <div className='bg-gray-100 mt-9 cursor-pointer mx-auto border-b pb-9 hover:border-black p-5' onClick={() => router.push('/snacks/groundnut')}>
            <img src={flourProducts[5].image} width={200} height={200}/>
            <p className='text-gray-400 hover:text-gray-500 cursor-pointer'>{flourProducts[5].title}</p>
            <p className='text-gray-400 hover:text-gray-500 cursor-pointer'>{flourProducts[5].price}</p>
            <button className='button'>{flourProducts[5].buttonText}</button>
         </div>
         <div className='bg-gray-100 mt-9 cursor-pointer mx-auto border-b pb-9 hover:border-black p-5' onClick={() => router.push('/snacks/groundnut')}>
            <img src={flourProducts[6].image} width={200} height={200}/>
            <p className='text-gray-400 hover:text-gray-500 cursor-pointer'>{flourProducts[6].title}</p>
            <p className='text-gray-400 hover:text-gray-500 cursor-pointer'>{flourProducts[6].price}</p>
            <button className='button'>{flourProducts[6].buttonText}</button>
         </div>
         <div className='bg-gray-100 mt-9 cursor-pointer mx-auto border-b pb-9 hover:border-black p-5' onClick={() => router.push('/snacks/groundnut')}>
            <img src={flourProducts[7].image} width={200} height={200}/>
            <p className='text-gray-400 hover:text-gray-500 cursor-pointer'>{flourProducts[7].title}</p>
            <p className='text-gray-400 hover:text-gray-500 cursor-pointer'>{flourProducts[7].price}</p>
            <button className='button'>{flourProducts[7].buttonText}</button>
         </div>
         <div className='bg-gray-100 mt-9 cursor-pointer mx-auto border-b pb-9 hover:border-black p-5' onClick={() => router.push('/snacks/groundnut')}>
            <img src={flourProducts[8].image} width={200} height={200}/>
            <p className='text-gray-400 hover:text-gray-500 cursor-pointer'>{flourProducts[8].title}</p>
            <p className='text-gray-400 hover:text-gray-500 cursor-pointer'>{flourProducts[8].price}</p>
            <button className='button'>{flourProducts[8].buttonText}</button>
         </div>
         <div className='bg-gray-100 mt-9 cursor-pointer mx-auto border-b pb-9 hover:border-black p-5' onClick={() => router.push('/snacks/groundnut')}>
            <img src={flourProducts[9].image} width={200} height={200}/>
            <p className='text-gray-400 hover:text-gray-500 cursor-pointer'>{flourProducts[9].title}</p>
            <p className='text-gray-400 hover:text-gray-500 cursor-pointer'>{flourProducts[9].price}</p>
            <button className='button'>{flourProducts[9].buttonText}</button>
         </div>
         <div className='bg-gray-100 mt-9 cursor-pointer mx-auto border-b pb-9 hover:border-black p-5' onClick={() => router.push('/snacks/groundnut')}>
            <img src={flourProducts[10].image} width={200} height={200}/>
            <p className='text-gray-400 hover:text-gray-500 cursor-pointer'>{flourProducts[10].title}</p>
            <p className='text-gray-400 hover:text-gray-500 cursor-pointer'>{flourProducts[10].price}</p>
            <button className='button'>{flourProducts[10].buttonText}</button>
         </div>
         <div className='bg-gray-100 mt-9 cursor-pointer mx-auto border-b pb-9 hover:border-black p-5' onClick={() => router.push('/snacks/groundnut')}>
            <img src={flourProducts[11].image} width={200} height={200}/>
            <p className='text-gray-400 hover:text-gray-500 cursor-pointer'>{flourProducts[11].title}</p>
            <p className='text-gray-400 hover:text-gray-500 cursor-pointer'>{flourProducts[11].price}</p>
            <button className='button'>{flourProducts[11].buttonText}</button>
         </div>
         <div className='bg-gray-100 mt-9 cursor-pointer mx-auto border-b pb-9 hover:border-black p-5' onClick={() => router.push('/snacks/groundnut')}>
            <img src={flourProducts[12].image} width={200} height={200}/>
            <p className='text-gray-400 hover:text-gray-500 cursor-pointer'>{flourProducts[12].title}</p>
            <p className='text-gray-400 hover:text-gray-500 cursor-pointer'>{flourProducts[12].price}</p>
            <button className='button'>{flourProducts[12].buttonText}</button>
         </div>
        </main>

        <Footer />
    </div>
  )
}

export default flour