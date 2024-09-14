'use client'
import Image from 'next/image'
import React, { useState } from 'react'
import Button from './Button/Button'
import { FaPhoneAlt, FaBars, FaTimes } from "react-icons/fa";
import NavItems from './NavItems';
import Link from 'next/link';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className='flex flex-row justify-between items-center px-4 md:px-10'>
      {/* Logo section for larger screens */}
      <div className='hidden lg:flex flex-row gap-5 items-center'>
        <Image src='/assets/approved_1.jpg' width={100} height={100} alt='kalpdreams logo' className='w-20 h-auto' />
        <Image src='/assets/approved_2.jpg' width={100} height={100} alt='kalpdreams logo' className='w-20 h-auto' />
        <Image src='/assets/approved_3.jpg' width={100} height={100} alt='kalpdreams logo' className='w-20 h-auto' />
      </div>

      {/* Main logo and nav items */}
      <div className=' contents md:flex flex-row gap-9 items-center w-full lg:w-fit'>
        <Image src='/assets/kalpdreams_logo.png' width={100} height={100} alt='kalpdreams logo' className='w-24 h-auto' />
        <div className='hidden md:flex w-full'>
          <NavItems />
        </div>
      </div>

      {/* Contact and Phone Icon */}
      <nav className='flex flex-row items-center gap-2 text-xs mr-2 md:mr-0'>
        <div className='flex flex-row items-center'>
          <Button className='bg-green-600 !text-white font-semibold'>
            <Link
              href="/contact">
              Booking Online
            </Link>
          </Button>
        </div>
        <div className='flex flex-row items-center'>
          <Button className='bg-green-600 !text-white font-semibold'>
            <Link
              href="https://drive.google.com/file/d/1Myt0d-zwqPQomUk4N2pKe1ISvmfbSaoh/view?usp=sharing"
              target='_blank'>
              Download Catalogue
            </Link>
          </Button>
        </div>
      </nav>


      {/* Mobile Menu Button */}
      <div className='md:hidden'>
        <button onClick={toggleMenu} className='text-2xl text-green-600'>
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className='absolute z-50 top-24 left-0 w-full bg-white flex flex-col items-center md:hidden'>
          <Link href="/" className='p-4 text-green-600'>Home</Link>
          <Link href="/about" className='p-4 text-green-600'>About Us</Link>
          <Link href="/contact" className='p-4 text-green-600'>Contact</Link>
          <Link href="/projects" className='p-4 text-green-600'>Our Projects</Link>
        </div>
      )}
    </div>
  );
}

export default Navbar;
