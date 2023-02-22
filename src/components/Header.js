import React from 'react'
import {
  MenuIcon,
  SearchIcon,
  ShoppingCartIcon,
} from '@heroicons/react/outline'
import { signIn, signOut, useSession } from 'next-auth/react'
import { useRouter } from 'next/router'
import { useSelector } from 'react-redux'
import { selectItems } from '../slices/basketSlice'

const Header = () => {
  const { data: session } = useSession();
  const router = useRouter();
  const items = useSelector(selectItems);


  return (
    <header>
      <img src="https://i.ibb.co/xCGRp0w/R-AND-G.gif" alt="" />
        {/* Top nav */}
        <div className='flex items-center bg-rg_pink p-1 flex-grow py-2'>
          <div className='mt-2 flex items-center flex-grow sm:flex-grow-0'>

            <img 
            onClick={() => router.push('/')}
            src="https://api.logo.com/api/v2/images?format=webp&logo=logo_717ae50f-8c52-437f-9db3-45e2658be5b7&width=1000&primary=%23ffffff&secondary=%23ffffff&accent=%23ffffff&background=transparent&tertiary=%23ffffff&fit=contain&u=1670399832" 
            className='h-10 px-4 cursor-pointer object-contain' alt="Logo" />
        </div>

        {/* Search */}
        <div className='hidden sm:flex items-center h-10 rounded-md flex-grow cursor-pointer bg-yellow-200 hover:bg-yellow-300'>
          <input className='p-2 h-full w-6 flex-grow flex-shrink rounded-l-md focus:outline-none px-4' type="text" placeholder='Search for Items '/>

          <SearchIcon className='h-12 p-4' />
        </div>

        {/* Right */}

        <div className='text-white flex items-center text-xs space-x-6 mx-6 whitespace-nowrap'>
          <div onClick={!session ? signIn : signOut} className='link'>
            <p>
              {session ? `Hello, ${session.user.name}` : 'Sign In'}
            </p>
            <p className='font-extrabold md:text-sm'>Accounts </p>
          </div>

          <div className='link'>
            <p>My</p>
            <p  className='font-extrabold md:text-sm'>Orders </p>
          </div>

          <div onClick={() => router.push('/checkout')} className='relative link flex items-center'>
            <span className='absolute top-0 right-0 md:right-10 h-4 w-4 bg-yellow-200 text-center rounded-full text-black font-bold'>{items.length}</span>
            <ShoppingCartIcon className='h-10'/>
            <p className='hidden md:inline font-extrabold md:text-sm mt-2 '>Cart</p>
          </div>
        </div>
        </div>

        {/* Bottom nav */}
        <div className='flex items-center bg-rg_pink-light text-white text-sm space-x-4 h-11  pl-6 justify-center lg:space-x-9' onClick={() => router.push('/')}>
            <p className='link flex items-center sm:p-0 xl:pl-2 xl:pr-2 xl:pt-3 xl:pb-3 hover:bg-white hover:text-black transition-all duration-200' onClick={() => router.push('/products/all-products')}>
              <MenuIcon className='h-6 mr-1' />
              All
            </p>

            <p onClick={() =>router.push('/products/groceries/groceries')} className='link sm:p-0 xl:pl-2 xl:pr-2 xl:pt-3 xl:pb-3 hover:bg-white hover:text-black transition-all duration-200'>Groceries</p>

            <p className='link hidden sm:inline-flex sm:p-0 xl:pl-2 xl:pr-2 xl:pt-3 xl:pb-3 hover:bg-white hover:text-black transition-all duration-200' onClick={() => router.push('/products/ethnic-foods/ethnic-foods')}>Ethnic Foods</p>

            <p className='link sm:p-0 xl:pl-2 xl:pr-2 xl:pt-3 xl:pb-3 hover:bg-white hover:text-black transition-all duration-200' onClick={() => router.push('/products/groceries/oil')}>Oil</p>

            <p className='link hidden sm:inline-flex sm:p-0 xl:pl-2 xl:pr-2 xl:pt-3 xl:pb-3 hover:bg-white hover:text-black transition-all duration-200' onClick={() => router.push('/products/fish-meat-snail/fish-meat-snail')}>Fish, Meat & Snail</p>

            <p className='link sm:p-0 xl:pl-2 xl:pr-2 xl:pt-3 xl:pb-3 hover:bg-white hover:text-black transition-all duration-200' onClick={() => router.push('/products/food/foods')}>Foods </p>

            <p className='link sm:p-0 xl:pl-2 xl:pr-2 xl:pt-3 xl:pb-3 hover:bg-white hover:text-black transition-all duration-200' onClick={() => router.push('/products/groceries/snacks')}>Snack </p>

            <p className='link sm:p-0 xl:pl-2 xl:pr-2 xl:pt-3 xl:pb-3 hover:bg-white hover:text-black transition-all duration-200' onClick={() => router.push('/products/groceries/drinks')}>Drinks </p>

            <p className='link hidden lg:inline-flex sm:p-0 xl:pl-2 xl:pr-2 xl:pt-3 xl:pb-3 hover:bg-white hover:text-black transition-all duration-200' onClick={() => router.push('/products/flour/flour')}>Flour </p>
        </div>
    </header>
  )
}

export default Header