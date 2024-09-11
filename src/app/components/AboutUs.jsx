import Image from 'next/image';
import { FaHome, FaHandsHelping } from 'react-icons/fa';

export default function AboutUs() {
    return (
        <section className="bg-green-100 py-6 mb-5">
            <div className="container mx-auto px-6 md:px-12 lg:px-16">
                {/* Introduction Section */}
                <div className="text-center mb-10">
                    <h2 className="text-4xl font-bold text-[#966b34] mb-4">About Us</h2>
                    <p className="text-lg text-gray-700 leading-relaxed">
                        KALPDREAMS REALTY PVT. LTD. working in real estate since 2019. Our developer project is Near Lal
                        Kuan ghaziabad the name of the colony is Mansarovar park in which we have delivered more than
                        1500+ independent houses and plot also
                    </p>
                </div>
            </div>
        </section>
    );
}
