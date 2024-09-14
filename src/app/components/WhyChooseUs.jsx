import React from 'react';

function WhyChooseUs() {
  return (
    <div className="container mx-auto pt-16 pb-16 bg-green-100">
      <h2 className="text-3xl font-bold text-center mb-8">Why Choose Us</h2>
      <div className="px-4 md:px-8 lg:px-12">
        <div className="mb-6">
          <p>
            <span className="font-semibold">Customer Focus: </span>
            At JD Infratech, our clients are at the heart of everything we do. We provide personalized services and support throughout the entire buying process and beyond.
          </p>
        </div>
        <div className="mb-6">
          <p>
            <span className="font-bold">Sustainability: </span>
            We are committed to eco-friendly practices and sustainable development. Our projects are designed to minimize environmental impact and promote a greener future.
          </p>
        </div>
        <div className="mb-6">
          <p>
            <span className="font-bold">Strategic Locations: </span>
            We carefully select locations that offer convenience, connectivity, and potential for growth, ensuring that our properties provide long-term value and a high quality of life.
          </p>
        </div>
      </div>
    </div>
  );
}

export default WhyChooseUs;
