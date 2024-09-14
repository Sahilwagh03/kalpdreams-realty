import Image from 'next/image';
import React from 'react';

function DistanceFromImportantLandmarks() {
    return (
        <div className="container mx-auto py-8 pb-16">

            <div className="grid grid-cols-1 lg:grid-cols-2 justify-start items-center md:px-20 gap-8">
                <div>
                    <h2 className="text-3xl font-bold text-center mb-8">Distance From Important Landmarks</h2>
                    <ul className="list-disc font-semibold">
                        <li>Kailash Hospital - 2.5 km</li>
                        <li>Pragyaan International School - 1.5 km</li>
                        <li>Assaka Hospital - 3 km</li>
                        <li>Maharaja Agresen Polytechnic College - 2 km</li>
                        <li>Shri Krishna Inter College - 3 km</li>
                        <li>Mumbai expressway interchange - 1.5 km</li>
                        <li>Proposed Palwal khurja expressway interchange - 2 km</li>
                        <li>Proposed pragyaan international school - 500 meter</li>
                    </ul>
                </div>
                <div className='flex justify-center'>
                    <Image src='/assets/kalpdreams_logo.png' width={1000} height={1000} alt='kalpdreams logo' className='w-96 h-auto' />
                </div>
            </div>
        </div>
    );
}

export default DistanceFromImportantLandmarks;