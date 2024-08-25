import React from 'react'
import { FaRoad, FaUniversity, FaHospital, FaTrain, FaMapMarkerAlt, FaCity, FaBuilding, FaIndustry } from 'react-icons/fa'

const Show = () => {
    return (
        <section className="pt-0 pb-10">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold mb-4">High-Profit Margin: <br /> Government Plots Near Jewar Airport</h2>
                    <p className="text-gray-700">
                        The project is located in the vicinity of the international freight corridor. It also boasts a total <br /> of 7 universities nearby.
                    </p>
                </div>
                <div className="flex flex-wrap justify-between">
                    <div className="w-full lg:w-1/3 mb-8 lg:mb-0 px-4">
                        <div className="bg-white rounded-lg shadow-lg p-6">
                            <div className="flex justify-center mb-4">
                                <FaRoad className="text-4xl text-green-600" />
                            </div>
                            <h3 className="text-xl font-semibold text-center mb-4">Infrastructure</h3>
                            <ul className="text-gray-600 space-y-2">
                                <li>Wide Roads</li>
                                <li>Well-planned towns</li>
                                <li>Residential and Commercial Complexes</li>
                                <li><FaUniversity className="inline mr-2 text-green-600" /> Schools and World Class Universities</li>
                                <li><FaHospital className="inline mr-2 text-green-600" /> Hospitals and Entertainment</li>
                                <li><FaTrain className="inline mr-2 text-green-600" /> Metro connectivity</li>
                                <li>Night Safari</li>
                                <li>Railway with Cargo facility connecting via DMIC</li>
                            </ul>
                        </div>
                    </div>
                    <div className="w-full lg:w-1/3 mb-8 lg:mb-0 px-4">
                        <div className="bg-white rounded-lg shadow-lg p-6">
                            <div className="flex justify-center mb-4">
                                <FaMapMarkerAlt className="text-4xl text-green-600" />
                            </div>
                            <h3 className="text-xl font-semibold text-center mb-4">Strategic Location</h3>
                            <ul className="text-gray-600 space-y-2">
                                <li>Jewar City Property: Near Noida International Airport (Jewar Airport)</li>
                                <li>15 minutes distance from Noida Film City</li>
                                <li>Proximity to major cities like Delhi, Ghaziabad, and Noida</li>
                                <li>Yamuna Expressway connects Greater Noida to Agra</li>
                                <li>Connectivity with the Delhi-Mumbai Expressway</li>
                                <li>F1 Circuit Proximity</li>
                            </ul>
                        </div>
                    </div>
                    <div className="w-full lg:w-1/3 mb-8 lg:mb-0 px-4">
                        <div className="bg-white rounded-lg shadow-lg p-6">
                            <div className="flex justify-center mb-4">
                                <FaBuilding className="text-4xl text-green-600" />
                            </div>
                            <h3 className="text-xl font-semibold text-center mb-4">Industrial Development</h3>
                            <ul className="text-gray-600 space-y-2">
                                <li>Competitive land prices</li>
                                <li><FaCity className="inline mr-2 text-green-600" /> IT Parks</li>
                                <li>Establishment of factories</li>
                                <li>Commercial Complexes</li>
                                <li><FaIndustry className="inline mr-2 text-green-600" /> Special Economic Zone</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Show