import React from "react";
import SwipeToSlide from "./SwipeToSlide";

const Technology = () => {
  return (
    <div
      name="technology"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="flex flex-col p-4 justify-center max-w-screen-lg mx-auto">
        <div className="pb-2">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500 md:pt-5">
            Technology
          </p>
        </div>
        <SwipeToSlide/>
      </div>
    </div>
  );
};

export default Technology;
