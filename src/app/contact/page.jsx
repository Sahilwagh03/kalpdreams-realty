import Image from 'next/image'
import React from 'react'
import ContactForm from '../components/ContactForm/ContactForm'

const Contact = () => {
    return (
        <section className='relative'>
            <Image src='/assets/Hero_img.jpg' width={1000} height={1000} alt='Hero_img' className='w-full h-full' />
            <div className='absolute top-10 right-5'>
                <ContactForm heading='Contact Form'/>
            </div>
        </section>
    )
}

export default Contact