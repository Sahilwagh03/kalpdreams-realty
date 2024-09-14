import Image from 'next/image';
import React from 'react';

function Testimonials() {
    return (
        <section className="bg-gray-100 p-8">
            <h1 className="text-4xl text-center font-bold text-[#966b34] mb-4">Happy Clients</h1>
            <p className="text-gray-600 text-center mb-8">
                Our priority is to gain your confidence. Trust is something that matters most. We are not here to maximize profit.
            </p>
            <div className="flex flex-col md:flex-row justify-center items-stretch gap-8">
                <div className="bg-white p-6 rounded-lg shadow-md max-w-sm w-full flex flex-col justify-between">
                    <div className="w-20 h-20 mx-auto mb-4 overflow-hidden rounded-full">
                        <Image
                            src="/assets/testinomial_1.jpg"
                            alt="Sohan Kapoor"
                            width={1000}
                            height={1000}
                            className="w-full h-full object-cover"
                        />
                    </div>
                    <p className="text-gray-700 text-center mb-4 flex-grow">
                        The Broker has made selling and purchasing very smooth for me and my family. He has been able to provide correct information not only for the right purchase but to avoid the wrong purchase.
                    </p>
                    <h3 className="text-gray-900 font-semibold text-center">Sohan Kapoor</h3>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md max-w-sm w-full flex flex-col justify-between">
                    <div className="w-20 h-20 mx-auto mb-4 overflow-hidden rounded-full">
                        <Image
                            src="/assets/testinomial_2.jpg"
                            alt="Rohit Gupta"
                            width={1000}
                            height={1000}
                            className="w-full h-full object-cover"
                        />
                    </div>
                    <p className="text-gray-700 text-center mb-4 flex-grow">
                        Kalp Dreams realty Pvt Ltd provides excellent services and is the best in terms of consultant services. I highly recommend getting services from Kalp Dreams realty Pvt Ltd.
                    </p>
                    <h3 className="text-gray-900 font-semibold text-center">Rohit Gupta</h3>
                </div>
            </div>
        </section>
    );
}

export default Testimonials;
