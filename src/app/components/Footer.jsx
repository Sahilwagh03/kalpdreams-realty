// components/Footer.js
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-green-600 text-white py-4">
      <div className="container mx-auto text-center">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} KalpDreams Realty Private Ltd. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
