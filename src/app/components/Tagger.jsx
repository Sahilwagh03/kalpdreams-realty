'use client'
import React, { useState } from 'react';
import Image from 'next/image';

// Array of image URLs for demonstration
const images = [
    { src: '/assets/catalog_1.jpg', name: 'Location' },
    { src: '/assets/price.jpg', name: 'Price' },
    { src: '/assets/catalog_2.jpg', name: 'Map' },
];

const Tagger = () => {
    const [selectedImage, setSelectedImage] = useState(null);

    const openModal = (image) => {
        setSelectedImage(image);
    };

    const closeModal = () => {
        setSelectedImage(null);
    };

    return (
        <div className='py-10 px-10 text-center'>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {images.map(({ src, name }, index) => (
                    <div className='relative'>
                        <div key={index} className="relative w-full cursor-pointer">
                            <Image
                                src={src}
                                width={1000}
                                height={1000}
                                alt={`Image ${index}`}
                                objectFit="cover"
                                onClick={() => openModal(src)}
                                className='rounded-lg'
                            />
                        </div>
                        <div className='absolute bottom-0 bg-green-600 w-full h-fit p-2 text-white text-center rounded-br-md rounded-bl-md font-medium text-xl'>
                            <p>{name}</p>
                        </div>
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

export default Tagger;
