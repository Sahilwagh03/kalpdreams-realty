import React from 'react';

function StatsSection() {
  return (
    <section className="p-6 md:px-20 md:py-16 md:my-10 lg:bg-no-repeat object-fill w-full bg-gray-100" style={{backgroundSize:'100%',backgroundImage: `url('/assets/banner.png')`}}>
      <div className="flex flex-col flex-wrap lg:flex-nowrap md:gap-10 lg:gap-10 md:flex-row justify-center items-center space-y-8 md:space-y-0 lg:space-x-8 md::space-x-0">
        <div className="text-black p-6 rounded-lg text-center border border-gray-300 bg-white h-full flex flex-col justify-center min-h-[200px] min-w-[250px] flex-1 w-full">
          <h2 className="text-4xl font-extrabold">5</h2>
          <p className="text-lg font-medium">Years of Experience</p>
        </div>
        <div className="text-black p-6 rounded-lg text-center border border-gray-300 bg-white h-full flex flex-col justify-center min-h-[200px] min-w-[250px] flex-1 w-full">
          <h2 className="text-4xl font-extrabold">1,230+</h2>
          <p className="text-lg font-medium">Plots / Independent Houses Sold</p>
        </div>
        <div className="text-black p-6 rounded-lg text-center border border-gray-300 bg-white h-full flex flex-col justify-center min-h-[200px] min-w-[250px] flex-1 w-full">
          <h2 className="text-4xl font-extrabold">4+</h2>
          <p className="text-lg font-medium">Total Projects</p>
        </div>
        <div className="text-black p-6 rounded-lg text-center border border-gray-300 bg-white h-full flex flex-col justify-center min-h-[200px] min-w-[250px] flex-1 w-full">
          <h2 className="text-4xl font-extrabold">1,040+</h2>
          <p className="text-lg font-medium">Happy Clients</p>
        </div>
      </div>
    </section>
  );
}

export default StatsSection;