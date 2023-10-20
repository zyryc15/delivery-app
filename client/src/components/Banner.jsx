import React from "react";
import foodBG from "../assets/images/foodBg.png";

export const Banner = () => {
  const bannerStyle = {
    backgroundImage: `url(${foodBG})`,
  };

  return (
    <div
      className="bg-cover bg-no-repeat bg-center h-[360px] md:h-[480px] lg:h-[720px] flex justify-center items-center"
      style={bannerStyle}
    >
      <div className="flex flex-col w-96 md:w-[480px] h-96 justify-center items-center">
        <h1 className="text-3xl md:text-4xl lg:text-6xl text-center font-medium text-slate-700">
          Delivering your needs swiftly
        </h1>
        <p className="text-slate-700 text-center text-lg font-medium py-10 px-8">
          Discover delectable cuisine and unforgettable moments in our
          welcoming, culinary haven.
        </p>
        <div className="flex justify-center">
          <button className="text-white text-medium text-sm bg-orange-400 hover:bg-orange-500 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full px-8 py-2 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover-bg-blue-700 dark:focus:ring-blue-800">
            Explore Menu
          </button>
        </div>
      </div>
    </div>
  );
};
