import Image from 'next/image';
import React from 'react';

const ProjectDetailsSection = () => {
  return (
    <section className='py-8 px-4 md:px-8 bg-white text-center'>
      <h1 className="text-4xl font-bold text-[#966b34] mb-4">Our Project Details</h1>
      <div className='flex flex-col md:flex-row gap-4 items-center justify-center'>
        {/* Image container with rounded corners */}
        <div className='w-full max-w-xs md:max-w-sm rounded-lg overflow-hidden shadow-lg'>
          <Image src='/assets/b.png' width={1000} height={1000} alt='b' className='w-full h-auto cursor-pointer' />
        </div>
        <div className='w-full max-w-xs md:max-w-sm rounded-lg overflow-hidden shadow-lg'>
          <Image src='/assets/map.png' width={1000} height={1000} alt='m' className='w-full h-auto cursor-pointer' />
        </div>
        <div className='w-full max-w-xs md:max-w-sm rounded-lg overflow-hidden shadow-lg'>
          <Image src='/assets/p.png' width={1000} height={1000} alt='p' className='w-full h-auto cursor-pointer' />
        </div>
      </div>
    </section>
  );
}

export default ProjectDetailsSection;
