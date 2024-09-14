import React from 'react';
import { FaMapMarkerAlt, FaEnvelope } from 'react-icons/fa';
import { FaPhone } from 'react-icons/fa6';

function ContactSection() {
  return (
    <div className="bg-white rounded-lg p-6 md:px-12 md:py-12 lg:px-20 lg:py-20 flex flex-col lg:flex-row justify-center items-center space-y-8 lg:space-y-0 lg:space-x-8">
      {/* Card 1 */}
      <div className="flex flex-col items-center border min-h-[175px] border-gray-400 p-6 rounded-lg w-full max-w-xs md:max-w-sm lg:max-w-md cursor-pointer">
        <FaMapMarkerAlt className="text-green-600 text-3xl mb-4" />
        <p className="text-gray-700 font-bold text-xl md:text-2xl mb-2 text-center">Visit Us Anytime</p>
        <p className="text-gray-500 text-center">C55, 3rd Floor, Sector 2, Noida 201301</p>
      </div>

      {/* Card 2 */}
      <div className="flex flex-col items-center min-h-[175px] border border-gray-400 p-6 rounded-lg w-full max-w-xs md:max-w-sm lg:max-w-md cursor-pointer">
        <FaEnvelope className="text-green-600 text-3xl mb-4" />
        <p className="text-gray-700 font-bold text-xl md:text-2xl mb-2 text-center">Send an Email</p>
        <p className="text-gray-500 text-center">kalpdreamsrealitypvt@gmail.com</p>
      </div>

      {/* Card 3 */}
      <div className="flex flex-col items-center min-h-[175px] border border-gray-400 p-6 rounded-lg w-full max-w-xs md:max-w-sm lg:max-w-md cursor-pointer">
        <FaPhone className="text-green-600 text-3xl mb-4" />
        <p className="text-gray-700 font-bold text-xl md:text-2xl mb-2 text-center">Call Us</p>
        <p className="text-gray-500 text-center">+91-9711545956</p>
      </div>
    </div>
  );
}

export default ContactSection;
