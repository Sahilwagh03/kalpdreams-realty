'use client'
import Image from 'next/image'
import React from 'react'
import Button from './Button/Button'
import { FaPhoneAlt } from "react-icons/fa";

const Navbar = () => {
  return (
    <div className='flex flex-row justify-between items-center px-4 md:px-10'>
      <div className='hidden md:flex flex-row gap-5 items-center'>
        <Image src='/assets/approved_1.jpg' width={100} height={100} alt='kalpdreams logo' className='w-20 h-auto'/>
        <Image src='/assets/approved_2.jpg' width={100} height={100} alt='kalpdreams logo' className='w-20 h-auto'/>
        <Image src='/assets/approved_3.jpg' width={100} height={100} alt='kalpdreams logo' className='w-20 h-auto'/>
      </div>
      <div>
        <Image src='/assets/kalpdreams_logo.png' width={100} height={100} alt='kalpdreams logo' className='w-24 h-auto' />
      </div>
      <nav className='flex flex-row items-center '>
        <Button className='bg-green-600 !text-white font-semibold !rounded-tr-none !rounded-br-none'>
          Contact Us
        </Button>
        <div className='bg-orange-600 p-3 rounded-tr-md rounded-br-md'>
          <FaPhoneAlt className='text-white' />
        </div>
      </nav>
    </div>
  )
}

export default Navbar