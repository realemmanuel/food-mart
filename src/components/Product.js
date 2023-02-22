// import Image from 'next/image'
import React, { useState } from 'react'
import { StarIcon  } from '@heroicons/react/solid';
import Currency from 'react-currency-formatter';
import { useDispatch } from 'react-redux';
import { addToBasket } from '../slices/basketSlice' 

const MAX_RATING = 5;
const MIN_RATING = 1;

const Product = ({ id, title, price, description, category, image  }) => {
    const dispatch = useDispatch();

    const [rating] = useState(
        Math.floor(Math.random() * (MAX_RATING - MIN_RATING + 1)) + MIN_RATING
    );

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
    <div className='relative flex flex-col m-5 bg-white z-30 p-10 shadow-md hover:shadow-2xl cursor-pointer'>
        <p className='absolute top-2 right-2 text-xs italic text-gray-400'>{category}</p>

        <img src={image} height={200} width={200} objectfit='contain' alt='product image' />

        <h4 className='my-3'>{title}</h4>
        
        <div className='flex'>
            {Array(rating).fill().map((_, i) => (
                <StarIcon className='h-5 text-yellow-500' />
            )) }
        </div>
        
        <p className='text-sx mt-2 my-2 line-clamp-3'>{description}</p>

        <div className='mb-5'>
            <Currency quantity={price} currency='GBP' />
        </div>
        
        <button onClick={addItemToBasket} className='mt-auto button'>Add to Cart </button>
        <button className='mt-3 view'>View Product</button>
    </div>
  )
}

export default Product