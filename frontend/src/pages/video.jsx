import React from "react";

const Video = () => {
  return (
    <div className="px-16 py-4">
      <p className="text-3xl font-bold mb-8">
        See how this website works in our quick demo!
      </p>
      <video controls className="w-full h-full rounded-lg">
        <source src="./Vahan.mp4" type="video/mp4" />
      </video>
    </div>
  );
};

export default Video;
