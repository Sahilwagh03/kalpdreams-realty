'use client'
import React, { useState } from 'react';
import Image from 'next/image';

// Array of image URLs for demonstration
const images = [
    'https://harithomesresidentialplots.com/img/plot1.jpg',
    'https://harithomesresidentialplots.com/img/plot2.jpg',

];

const PlotSize = () => {
    const [selectedImage, setSelectedImage] = useState(null);

    const openModal = (image) => {
        setSelectedImage(image);
    };

    const closeModal = () => {
        setSelectedImage(null);
    };

    return (
        <div className='py-16 px-10 text-center'>
            <h3 className='text-4xl font-bold text-[#966b34] mb-10 '>Jewar Airport Plots Size</h3>
            {/* Grid Layout */}
            <div className="">
                {images.map((image, index) => (
                    <div key={index} className="relative w-full flex flex-col justify-center items-center cursor-pointer">
                        <Image
                            src={image}
                            width={1000}
                            height={1000}
                            alt={`Image ${index}`}
                            objectFit="cover"
                            onClick={() => openModal(image)}
                            className='rounded-lg'
                        />
                    </div>
                ))}
            </div>

            {/* Modal */}
            {selectedImage && (
                <div
                    className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center"
                    onClick={closeModal}
                >
                    <div
                        className="relative max-w-full max-h-full"
                        onClick={(e) => e.stopPropagation()} // Prevent click from closing modal
                    >
                        <Image
                            width={1000}
                            height={1000}
                            src={selectedImage}
                            alt="Selected"
                            className='w-full h-full'
                        />
                    </div>
                </div>
            )}
        </div>
    );
};

export default PlotSize;
