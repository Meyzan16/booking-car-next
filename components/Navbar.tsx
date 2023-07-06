import React from 'react'
import Link from 'next/link';
import Image from 'next/image';

import CustomButton from './Button/CustomButton';

const Navbar = () => {
  return (
    <header className='w-full absolute z-10'>
        <nav className='max-w-[1440px] mx-auto
        flex justify-between items-center
        sm:px-16 px-6 py-4'>

            <Link href="/" className='flex justify-center items-center'>
                <Image src="/logo.svg"  alt='icon-header' width={118} height={18}
                className='object-contain'/>
            </Link>

            <CustomButton 
              title="Sign In"
              btnType="button"
              containerStyles="rounded-full 
              bg-primary-blue text-white 
              lg:bg-white lg:hover:bg-primary-blue 
              lg:text-primary-blue lg:hover:text-white px-2"

            />

        </nav>
      
    </header>
  )
}

export default Navbar
