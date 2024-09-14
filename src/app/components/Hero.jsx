import Image from 'next/image'
import React from 'react'
import ContactForm from './ContactForm/ContactForm'
import Button from './Button/Button'
import Link from 'next/link'

const Hero = () => {
    return (
        <section className='relative'>
            <div className='md:min-h-[500px] lg:min-h-full'>
                <Image src='/assets/Hero_img.jpg' width={1000} height={1000} alt='Hero_img' className='w-full h-full' />
                <div className='absolute top-10 right-3 md:right-5'>
                    <ContactForm />
                </div>
            </div>
            <p className='py-8 px-20 text-center'>
                Experience housing comfort, affordability and connectivity with property near Jewar Airport, one of the prime property locations in India: The Yamuna Expressway. The Yamuna Expressway is one of the most desirable and highly sought-after property locations in India due to its proximity to important landmarks surrounding it.
            </p>
            <div className='relative '>
                <Image src='/assets/bg_below_hero.jpg' width={1000} height={1000} alt='Hero_img' className='w-full h-full' />
                <div className='hidden md:flex rounded-md absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white/80 px-6 py-10 text-center max-w-xl md:max-w-5xl w-full'>
                    <h3 className='text-2xl md:text-3xl font-bold text-[#966b34]'>
                        Why invest in the
                        <br />
                        Jewar Airport Residential Plots through the Yamuna Expressway
                        <br />
                        Plots Scheme?
                    </h3>
                </div>
            </div>

            <div className='absolute top-28 right-80 hidden lg:flex flex-col items-center justify-center'>
                <Image src='/assets/location.png' alt='location' width={1000} height={1000} className='w-64 h-auto' />
                <Link target='_blank' href='https://www.google.com/maps?q=28.5825884,77.3143798'>
                    <Button className='bg-green-600 text-white'>View More</Button>
                </Link>
            </div>
        </section>
    )
}

export default Hero