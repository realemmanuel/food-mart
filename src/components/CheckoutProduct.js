import React from 'react'
import Image from 'next/image'
import Currency from 'react-currency-formatter'
import { useDispatch } from 'react-redux'
import { addToBasket, removeFromBasket } from '../slices/basketSlice'

const CheckoutProduct = ({id, title, price, description, category, image }) => {

    const dispatch = useDispatch();

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

    const removeItemFromBasket = () => {
        dispatch(removeFromBasket({ id }))
    }

  return (
    <div className='grid grid-cols-5 border-b pb-5'>
        <Image src={image} height={200} width={200} objectfit='contain' />

        {/* Middle */}
        <div className='col-span-3 mx-5'>
            <p className='border-b pb-2 '>{title}</p>
            <p className='text-xs mt-2 my-2 line-clamp-5'>{description}</p>
            <Currency quantity={price} currency='GBP' />
        </div>


        {/* Right add/remove button */}
        <div className='flex flex-col space-y-2 my-auto justify-self-end'>
        <button className='button' onClick={addItemToBasket}>Add to basket</button>
        <button className='button' onClick={removeItemFromBasket}>Remove from basket</button>
        </div>


    </div>
  )
}

export default CheckoutProduct