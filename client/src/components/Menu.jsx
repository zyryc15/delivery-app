import React from "react";
import { CardCategory } from "./CardCategory";

import snackPic from "../assets/images/catSnacks.png";
import mealPic from "../assets/images/catMeals.png";
import beveragePic from "../assets/images/catBeverages.png";
import pastryPic from "../assets/images/catPastries.png";

const categories = [
  { name: "Snacks", picture: snackPic },
  { name: "Meals", picture: mealPic },
  { name: "Beverages", picture: beveragePic },
  { name: "Pastries", picture: pastryPic },
];

export const Menu = () => {
  return (
    <div className="flex flex-col items-center">
      <h1 className="text-4xl md:text-5xl font-medium text-slate-700 text-center pt-12">
        Food Categories
      </h1>
      <div className="flex flex-wrap justify-center md:justify-around max-w-screen-xl w-full px-5 md:px-24 pt-6 md:pt-5">
        {categories.map((category, index) => (
          <CardCategory key={index} category={category} />
        ))}
      </div>
    </div>
  );
};
