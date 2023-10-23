import React from "react";
import foodBG from "../assets/images/foodBg.png";
import { Button } from "../components/Button";

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
          <Button type="button" text="Explore Stores" />
        </div>
      </div>
    </div>
  );
};
