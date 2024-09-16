import React from 'react';
import Image from 'next/image';

// Define an array of objects for the amenities
const amenities = [
    {
        id: 1,
        title: 'Road',
        imageUrl: '/assets/road.jpg',
    },
    {
        id: 2,
        title: 'Electricity',
        imageUrl: '/assets/electricity.jpg',
    },
    {
        id: 3,
        title: 'Water Supply',
        imageUrl: '/assets/water.jpg', // Fixed image path
    },
    {
        id: 4,
        title: 'Sewage System',
        imageUrl: '/assets/sewage.webp',
    },
    {
        id: 5,
        title: 'Well Maintained Green Spaces',
        imageUrl: '/assets/park.jpg',
    },
    {
        id: 6,
        title: 'Surveillance Cameras',
        imageUrl: '/assets/camera.jpg',
    },
    {
        id: 7,
        title: 'Parks',
        imageUrl: '/assets/park_2.jpeg',
    },
    {
        id: 8,
        title: 'Clubhouse',
        imageUrl: '/assets/clubhouse.jpg',
    },
    {
        id: 9,
        title: 'Temple',
        imageUrl: '/assets/temple.jpg',
    },
];

const Amenities_2 = () => {
    return (
        <section className="bg-white py-16 px-4">
            <div className="container mx-auto">
                <h2 className="text-4xl font-bold text-green-600 mb-14 text-center">
                    Facilities & Amenities
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {amenities.map(({ id, title, imageUrl }) => (
                        <div
                            key={id}
                            className="relative bg-gray-100 rounded-lg overflow-hidden"
                        >
                            {/* Background Image */}
                            <div className="relative w-full h-40 md:h-48">
                                <Image
                                    src={imageUrl}
                                    alt={title}
                                    layout="fill"
                                    className="object-cover"
                                />
                            </div>
                            {/* Overlay */}
                            <div className="absolute inset-0 bg-black/50 flex items-center justify-center text-white">
                                <h2 className="text-lg md:text-2xl font-semibold p-4 rounded">{title}</h2>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Amenities_2;
