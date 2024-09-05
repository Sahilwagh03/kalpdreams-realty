import { FaPhoneAlt, FaMapMarkerAlt } from 'react-icons/fa';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="bg-green-600 text-white py-6">
      <div className="container mx-auto px-6 md:px-12 lg:px-16 flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
        {/* Logo Section */}
        <div className="flex items-center space-x-4">
          <Image
            src="/assets/kalpdreams_logo.png"
            alt="Kalpdreams Logo"
            width={100}
            height={100}
            className="object-contain"
          />
        </div>

        {/* Contact Section */}
        <div className="text-center md:text-left space-y-2">
          <h2 className="text-xl font-bold">Contact Us</h2>
          <div className="flex items-center space-x-3 justify-center md:justify-start">
            <FaMapMarkerAlt />
            <span>C55, 3rd Floor, Sector 2, Noida 201301</span>
          </div>
          <div className="flex items-center space-x-3 justify-center md:justify-start">
            <FaPhoneAlt />
            <span>+91-9711545956</span>
          </div>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="pt-5">
        <p className="text-center">&copy; {new Date().getFullYear()} Kalpdreams Reality Pvt. Ltd. All Rights Reserved.</p>
      </div>
    </footer>
  );
}
