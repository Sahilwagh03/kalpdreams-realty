import Image from 'next/image';
import React from 'react';

const VideoShowCase = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 justify-center items-center gap-4 container  mx-auto pt-16 pb-16">
      {/* Video Section */}
      <div className="flex justify-center px-4 md:px-2">
        <video 
          className="w-full h-auto max-w-lg rounded-lg shadow-md" 
          controls 
          src="/path-to-your-video.mp4" 
          alt="Kalpdreams showcase video"
        >
          Your browser does not support the video tag.
        </video>
      </div>

      {/* Image Section */}
      <div className="flex justify-center">
        <Image 
          src="/assets/kalpdreams_logo.png" 
          width={1000} 
          height={1000} 
          alt="kalpdreams logo" 
          className="w-96 h-auto" 
        />
      </div>
    </div>
  );
};

export default VideoShowCase;
