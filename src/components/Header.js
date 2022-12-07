import React from 'react'
import Image from 'next/image'

const Header = () => {
  return (
    <header>
        {/* Top nav */}
        <div>
            <Image 
                src='https://links.papareact.com/f90'
                width={150}
                height={40}
                objectFit='contain'
                className='cursor-pointer'
            />
        </div>

        {/* Bottom nav */}
        <div>

        </div>
    </header>
  )
}

export default Header