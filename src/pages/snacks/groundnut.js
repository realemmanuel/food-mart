import React from 'react'
import Footer from '../../components/Footer'
import Header from '../../components/Header'
import Currency from 'react-currency-formatter';
import { useDispatch } from 'react-redux';
import { addToBasket } from '../../slices/basketSlice';

const groundnut = () => {
    const dispatch = useDispatch();

    let id = 1
    let title = 'R&G Groundnut'
    let price = 0.00
    let description = 'R&G Groundnut'
    let category = 'snacks'
    let image = 'https://www.rgafrocaribbeanfoods.com/wp-content/uploads/2020/07/rg-afro-caribbean-foods-groundnut-2.jpg'

    const addItemToBasket = () => {
        const product = {
            id,
            title,
            price,
            description,
            category,
            image,
        };

        //Sending the product as an action to the redux store
        dispatch(addToBasket(product));
    }
  return (
    <div>
        <Header />

        <main className='bg-gray-100 grid grid-cols-4 p-5 ml-auto mr-auto'>
            {/* Left */}
            <div className='relative flex flex-col m-5 bg-white z-30 p-10'>
        <p className='absolute top-2 right-2 text-xs italic text-gray-400'>{category}</p>

        <img src={image} height={200} width={200} objectfit='contain' alt='product image' />

        <h4 className='my-3'>{title}</h4>
        
        
        <p className='text-sx mt-2 my-2 line-clamp-3'>{description}</p>

        <div className='mb-5'>
            <Currency quantity={price} currency='GBP' />
        </div>
        
        <button onClick={addItemToBasket} className='mt-auto button'>Add to Cart </button>
    </div>

            {/* Right */}
            <div className='p-10'>
                <h1>R&G GROUNDNUT</h1>
                <Currency quantity={0.00} currency='GBP' />
                <h1>R&G GROUNDNUT</h1>
                <p className='text-gray-400'>category: snacks</p>
                <p className='text-gray-400'>tag: groundnut</p>
            </div>
        </main>

        <Footer />
    </div>
  )
}

export default groundnut