import Head from "next/head";
import React from 'react'
import { useSelector } from 'react-redux'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { selectItems, selectTotal } from '../slices/basketSlice'
import CheckoutProduct from '../components/CheckoutProduct'
import Currency from 'react-currency-formatter'
import { useSession } from 'next-auth/react'

const Checkout = () => {
    const items = useSelector(selectItems);
    const total = useSelector(selectTotal);
    const { data: session } = useSession();

  return (
    <div className='bg-gray-100'>
        <Head>
        <title>R&G AFROCARRIBEAN FOODS - CHECKOUT</title>
      </Head>
        <Header />

        <main className='lg:flex max-w-screen-2xl mx-auto'>
            {/* Left */}
            <div className='flex-grow m-5 shadow-sm'>
            <img
            src="https://img.freepik.com/free-vector/checkout-supermarket-composition_1284-73059.jpg?size=626&ext=jpg"
             width={1020}
             height={250}
             objectfit='contain'
             />

            <div className='flex flex-col p-5 space-y-10 bg-white'>
                <h1 className='text-3xl border-b pb-4'>
                    {items.length === 0 ? 'Your Cart is empty' : 'Your Shopping Cart'}
                </h1>


                {items.map((item, i) => (
                    <CheckoutProduct
                        key={item.id}
                        id={item.id}
                        title={item.title}
                        price={item.price}
                        description={item.description}
                        category={item.category}
                        image={item.image}
                    />
                ))}

            </div>
            </div>


            {/* Right */}
            <div className='flex flex-col bg-white p-10 shadow-md'>
                {items.length > 0 && (
                    <>
                        <h2 className='whitespace-nowrap'>Subtotal ({items.length} items): 
                        <span className='font-bold'>
                        <Currency quantity={total} currency='GBP' />
                        </span>
                        </h2>

                        <button
                        disabled={!session}
                        className={`button mt-2 ${!session && 'from-gray-300 to-gray-500 border-gray-200 text-gray-300 cursor-not-allowed active:bg-none'}`}>
                            {!session ? 'Sign in to checkout' : 'Proceed to Checkout'}
                        </button>
                    </>
                )}
            </div>
        </main>
        <Footer/>
    </div>
  )
}

export default Checkout