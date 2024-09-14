'use client'
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import Image from 'next/image';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const ProjectCarousel = () => {
    return (
        <div className="container mx-auto py-16 px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
                {/* Carousel Section */}
                <div className="w-full">
                    <Swiper
                        modules={[Navigation, Pagination, Autoplay]}
                        spaceBetween={30}
                        slidesPerView={1}
                        pagination={{ clickable: true }}
                        autoplay={{ delay: 3000 }}
                        loop
                        grabCursor
                        className="rounded-lg shadow-lg"
                    >
                        <SwiperSlide>
                            <div className="relative w-full h-64 md:h-[400px]">
                                <Image
                                    src="/assets/DeliveredP_1.jpeg"
                                    alt="Image 1"
                                    fill
                                    className="object-cover rounded-lg"
                                />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="relative w-full h-64 md:h-[400px]">
                                <Image
                                    src="/assets/DeliveredP_2.jpeg"
                                    alt="Image 2"
                                    fill
                                    className="object-cover rounded-lg"
                                />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="relative w-full h-64 md:h-[400px]">
                                <Image
                                    src="/assets/DeliveredP_3.jpeg"
                                    alt="Image 3"
                                    fill
                                    className="object-cover rounded-lg"
                                />
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </div>

                {/* Description Section */}
                <div className="flex flex-col justify-center px-4">
                    <h2 className="text-3xl font-bold mb-4">Description</h2>
                    <p>KALPDREAMS REALTY PVT. LTD. working in real estate since 2019.
                        Our developer project is Near Lal Kuan ghaziabad the name of the
                        colony is Mansarovar park in which we have delivered more than
                        1500+ independent houses and plot also
                        KALPDREAMS REALTY PVT. LTD. stands as a beacon of excellence in
                        the real estate sector. Our foundation is built on the principles of
                        trust, transparency, and innovation. With years of expertise and a
                        team of dedicated professionals, we pride ourselves on creating
                        properties that blend modern architecture with timeless elegance.
                        Our mission is to transform the real estate landscape by providing
                        superior quality homes and commercial spaces that meet the
                        highest standards of comfort, convenience, and sustainability. We
                        aim to exceed client expectations by delivering projects that are not
                        just aestheticallypleasing but also environmentallyresponsible.</p>
                </div>
            </div>
        </div>
    );
};

export default ProjectCarousel;
