import React from "react";
import SwipeToSlide from "./SwipeToSlide";

const FashionTips = () => {
 

  return (
    <div
      name="fashiontips"
      className="bg-gradient-to-b from-black to-gray-800 w-full   h-fit"
    >
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center center w-full text-white">
       
        <div>
          <p className="text-4xl font-bold border-b-4 border-gray-500 p-2 inline">
            FashionTips
          </p>
          <h2 className="py-6">Here are some of my FashionTips </h2>
        
        </div>
        <div>
          <SwipeToSlide />
        </div>
      </div>
    </div>
  );
};

export default FashionTips;
