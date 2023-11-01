import React from "react";
import { Link } from "react-router-dom";

export const CardCategoryRow = ({ category }) => {
  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
      <div className="flex items-center justify-between bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
        <div className="w-1/2 flex items-center">
          <div className="w-32 h-32 p-4">
            <img
              src={category.image?.url}
              alt={category.title}
              className="object-cover w-full h-full"
            />
          </div>
          <div className="px-6 py-4 font-semibold text-gray-900 dark:text-white">
            {category.title}
          </div>
        </div>
        <div className="w-1/2 flex justify-center gap-6 items-center px-6 py-4">
          <Link
            to={`/categories/edit/${category._id}`}
            className="font-medium text-red-600 hover:underline dark:text-red-500"
          >
            Edit
          </Link>
          <Link
            to={`/categories/delete/${category._id}`}
            href="#"
            className="font-medium text-red-600 hover:underline dark:text-red-500"
          >
            Delete
          </Link>
        </div>
      </div>
    </div>
  );
};
