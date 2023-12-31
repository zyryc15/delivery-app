import React from "react";
import { Button } from "../components/Button";

export const CardCategory = ({ category }) => {
  return (
    <div className="flex flex-col items-center justify-center w-64 h-full bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 mt-5 mx-2 md:mx-1">
      <div className="p-5 text-center">
        <div>
          <a href="#" className="flex flex-col items-center justify-center">
            <img
              className="w-32 h-32 rounded-lg object-cover object-center"
              src={category.image.url}
              alt={category.title}
            />
          </a>
        </div>
        <a href="#">
          <h5 className="my-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {category.title}
          </h5>
        </a>

        <Button type="button" text="Explore Menu" />
      </div>
    </div>
  );
};
