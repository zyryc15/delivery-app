import React from "react";

export const CardCategory = ({ category }) => {
  return (
    <div className="flex flex-col items-center justify-center w-64 h-full bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 mt-5 mx-2 md:mx-1">
      <div className="p-5 text-center">
        <div>
          <a href="#" className="flex flex-col items-center justify-center">
            <img
              className="w-32 rounded-lg"
              src={category.picture}
              alt={category.name}
            />
          </a>
        </div>
        <a href="#">
          <h5 className="my-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {category.name}
          </h5>
        </a>
        <p className="text-justify my-3 font-normal text-gray-700 dark:text-gray-400">
          In the new era of technology we look in the future with certainty and
          pride for our life.
        </p>
        <a
          href="#"
          className="inline-flex items-center px-5 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-full hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Explore Menu
        </a>
      </div>
    </div>
  );
};
