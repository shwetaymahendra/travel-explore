import React from "react";
import SwipeToSlide from "./SwipeToSlide";

const Travel = () => {
  return (
    <div
      name="travel"
      className="bg-gradient-to-b from-gray-800 to-black w-full text-white 2xl:h-screen container max-w-full"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full ">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Travel
          </p>
          <p className="py-6">Check out some of my work right here</p>
        </div>
        <SwipeToSlide />
      </div>
    </div>
  );
};

export default Travel;
