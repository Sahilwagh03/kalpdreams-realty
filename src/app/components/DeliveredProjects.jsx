'use client'
import React, { useState } from 'react';
import Image from 'next/image';

// Array of image URLs for demonstration
const images = [
    '/assets/DeliveredP_1.jpeg',
    '/assets/DeliveredP_2.jpeg',
    '/assets/DeliveredP_3.jpeg',
    '/assets/DeliveredP_4.jpeg',
];

const DeliveredProjects = ({title}) => {
    const [selectedImage, setSelectedImage] = useState(null);

    const openModal = (image) => {
        setSelectedImage(image);
    };

    const closeModal = () => {
        setSelectedImage(null);
    };

    return (
        <div className='py-16 px-10 bg-green-100 text-center'>
            <h3 className='text-4xl font-bold text-[#966b34] mb-10'>{ title ||"Delivered Projects"}</h3>
            {/* Grid Layout */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {images.map((image, index) => (
                    <div key={index} className="relative w-full h-96 cursor-pointer overflow-hidden">
                        <Image
                            src={image}
                            layout="fill"
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
                        className="relative w-full max-w-4xl max-h-screen"
                        onClick={(e) => e.stopPropagation()} // Prevent click from closing modal
                    >
                        <Image
                            src={selectedImage}
                            layout="fill"
                            objectFit="contain"
                            alt="Selected"
                            className='rounded-lg'
                        />
                    </div>
                </div>
            )}
        </div>
    );
};

export default DeliveredProjects;
