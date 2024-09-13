import React from 'react';

function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-6">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between space-y-6 md:space-y-0 md:space-x-6">
          
          {/* About Us Section */}
          <div className="flex-1 md:w-1/4">
            <h3 className="text-2xl font-bold mb-4">About Us</h3>
            <p className="text-sm">
              We are a group of highly integrated professionals with versatile experience
              in the real estate sector for over a decade. We present ourselves as one of the
              leading land bankers in Noida, engaged in promoting and developing real estate projects.
            </p>
          </div>
          
          {/* Pages Section */}
          <div className="flex-1 md:w-1/4">
            <h3 className="text-2xl font-bold mb-4">Pages</h3>
            <ul className="text-sm space-y-2">
              <li><a href="/" className="hover:underline">Home</a></li>
              <li><a href="/about" className="hover:underline">About Us</a></li>
              <li><a href="/media" className="hover:underline">Media</a></li>
              <li><a href="/contact" className="hover:underline">Contact Us</a></li>
            </ul>
          </div>
          
          {/* Useful Links Section */}
          <div className="flex-1 md:w-1/4">
            <h3 className="text-2xl font-bold mb-4">Useful Links</h3>
            <ul className="text-sm space-y-2">
              <li><a href="/privacy-policy" className="hover:underline">Privacy Policy</a></li>
              <li><a href="/terms-and-conditions" className="hover:underline">Terms & Conditions</a></li>
              <li><a href="/disclaimer" className="hover:underline">Disclaimer</a></li>
            </ul>
          </div>
          
          {/* Contact Us Section */}
          <div className="flex-1 md:w-1/4">
            <h3 className="text-2xl font-bold mb-4">Contact Us</h3>
            <ul className="text-sm space-y-2">
              <li><a href="tel:+91-9711545956" className="hover:underline">+91-9711545956</a></li>
              {/* <li><a href="mailto:jdinfratechh@gmail.com" className="hover:underline">jdinfratechh@gmail.com</a></li> */}
              <li>C55, 3rd Floor, Sector 2, Noida 201301</li>
              <li><a href="http://www.kalpdreams.in" className="hover:underline">www.kalpdreams.in</a></li>
            </ul>
          </div>
          
        </div>
      </div>
    </footer>
  );
}

export default Footer;
