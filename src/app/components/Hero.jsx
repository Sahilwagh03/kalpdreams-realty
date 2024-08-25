import Image from 'next/image'
import React from 'react'
import ContactForm from './ContactForm/ContactForm'

const Hero = () => {
    return (
        <section className='relative'>
            <Image src='/assets/Hero_img.jpg' width={1000} height={1000} alt='Hero_img' className='w-full h-full' />
            <div className='absolute top-10 right-5'>
                <ContactForm />
            </div>
            <p className='py-8 px-20 text-center'>
                Experience housing comfort, affordability and connectivity with property near Jewar Airport, one of the prime property locations in India: The Yamuna Expressway. The Yamuna Expressway is one of the most desirable and highly sought-after property locations in India due to its proximity to important landmarks surrounding it.
            </p>
            <div className='relative '>
                <Image src='/assets/bg_below_hero.jpg' width={1000} height={1000} alt='Hero_img' className='w-full h-full' />
                <div className='rounded-md absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white/80 px-6 py-10 text-center max-w-xl md:max-w-5xl w-full'>
                    <h3 className='text-2xl md:text-3xl font-bold text-[#966b34]'>
                        Why invest in the
                        <br />
                        Jewar Airport Residential Plots through the Yamuna Expressway 
                        <br/>
                        Plots Scheme?
                    </h3>
                </div>
            </div>

        </section>
    )
}

export default Hero