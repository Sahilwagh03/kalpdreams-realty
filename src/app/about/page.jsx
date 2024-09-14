
import React from 'react'
import Image from 'next/image'
import AboutUsSection_1 from '../components/AboutUsPageComponent/AboutSection_1'
import AboutSection_2 from '../components/AboutUsPageComponent/AboutSection_2'
import WhyChooseUs from '../components/WhyChooseUs'
import ContactSection from '../components/ContactUsSection'
import VideoShowCase from '../components/VideoShowCase'
import ProjectCarousel from '../components/ProjectCarouel'
import Amenities_2 from '../components/Amenities_2'
import DistanceFromImportantLandmarks from '../components/Landmark'

const About = () => {
    return (
        <section className='relative'>
            <Image src='/assets/Hero_img.jpg' width={1000} height={1000} alt='Hero_img' className='w-full h-full' />
            <div className='relative md:absolute md:top-20 md:right-5 right-0 md:px-0 px-4'>
                <div className="bg-white py-6 mb-5 max-w-md min-w-[350px] w-full rounded-2xl">
                    <div className="container mx-auto px-6 md:px-12 lg:px-16">
                        {/* Introduction div */}
                        <div className="text-center mb-10">
                            <h2 className="text-4xl font-bold text-[#966b34] mb-4">About Us</h2>
                            <p className="text-lg text-gray-700 leading-relaxed">
                                KALPDREAMS realty PVT. LTD. working in real estate since 2019. Our developer project is Near Lal
                                Kuan ghaziabad the name of the colony is Mansarovar park in which we have delivered more than
                                1500+ independent houses and plot also
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <AboutUsSection_1/>
            <AboutSection_2/>
            <WhyChooseUs/>
            <VideoShowCase/>
            <ProjectCarousel/>
            <Amenities_2/>
            <ContactSection/>
            <DistanceFromImportantLandmarks/>
        </section>
    )
}

export default About