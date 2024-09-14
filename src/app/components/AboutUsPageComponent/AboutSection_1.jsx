import Image from 'next/image';
import React from 'react';

function AboutUsSection_1() {
  return (
    <div className="relative w-full text-white lg:mt-10" >
      <Image src="/assets/meeting-banner.jpg" width={1000} height={1000} alt='meet'/>
      <div className="relative md:absolute justify-center h-full flex right-0 top-0 p-4 bg-black/50 w-fit md:w-[600px] flex-col md:flex-col gap-8">
        <div>
          <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
          <p>
            Our vision is to redefine urban living by creating sustainable, aesthetically pleasing,
            and functional spaces that cater to the evolving needs of modern communities. We
            aim to be at the forefront of real estate development, setting new standards in design,
            construction, and customer satisfaction.
          </p>
        </div>
        <div>
          <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
          <p>
            Our mission is to provide our clients with premium properties that offer unmatched
            value and quality. We strive to exceed expectations through meticulous planning,
            state-of-the-art infrastructure, and a customer-centric approach. At JD infratech, we
            believe in building lasting relationships based on trust, transparency, and integrity.
          </p>
        </div>
      </div>
    </div>
  );
}

export default AboutUsSection_1;