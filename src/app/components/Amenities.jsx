import Image from 'next/image'
import React from 'react'

const Amenities = () => {
    return (
        <section className='py-8 px-4 md:px-8 bg-white text-center'>
            <h3 className='text-4xl font-bold text-[#966b34] mb-4'>World-Class Amenities</h3>
            <p className='text-xl text-gray-700 mb-6'>
                The Kalpdreams RealityPlots Scheme offers modern amenities like:
            </p>
            <div className='relative'>
                <Image 
                    src='/assets/amenities.jpg' 
                    width={1000} 
                    height={1000} 
                    alt='Hero_img' 
                    className='w-full h-auto rounded-md shadow-lg' 
                />
            </div>
        </section>
    )
}

export default Amenities
