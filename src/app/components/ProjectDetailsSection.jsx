'use client'
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';

const ProjectDetailsSection = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const openModal = (image) => {
    setSelectedImage(image);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };
  return (
    <section className='py-10 px-4 md:px-8 bg-white text-center'>
      <h1 className="text-4xl font-bold text-[#966b34] mb-10">Our Project Details</h1>
      <div className='flex flex-col md:flex-row gap-4 items-center justify-center'>
        {/* Image container with rounded corners */}
        <div className='w-full max-w-xs md:max-w-sm rounded-lg overflow-hidden shadow-lg'>
          <Link href='https://drive.google.com/file/d/1Myt0d-zwqPQomUk4N2pKe1ISvmfbSaoh/view?usp=sharing' target='_blank'>
            <Image src='/assets/b.png' width={1000} height={1000} alt='b' className='w-full h-auto cursor-pointer' />
          </Link>
        </div>
        <div className='w-full max-w-xs md:max-w-sm rounded-lg overflow-hidden shadow-lg'>
          <Image src='/assets/map.png' width={1000} height={1000} alt='m' className='w-full h-auto cursor-pointer' onClick={() => openModal('/assets/catalog_2.jpg')} />
        </div>
        <div className='w-full max-w-xs md:max-w-sm rounded-lg overflow-hidden shadow-lg'>
          <Image src='/assets/p.png' width={1000} height={1000} alt='p' className='w-full h-auto cursor-pointer' onClick={() => openModal('/assets/price.jpg')} />
        </div>
      </div>
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
    </section>
  );
}

export default ProjectDetailsSection;
