import React from "react";
import { Link } from "react-router-dom";
export const TagsCard = ({ tagList }) => {
  return (
    <div className="w-72 md:w-[480px] lg:w-[600px] mx-auto rounded-lg">
      <div className="p-3 flex items-center justify-between border-t cursor-pointer hover:bg-gray-200">
        <div className="flex items-center">
          <img className="rounded-full h-10 w-10" src={tagList.image?.url} />
          <div className="ml-2 flex flex-col">
            <div className="leading-snug text-sm text-gray-900 font-bold">
              {tagList.title}
            </div>
            <div className="leading-snug text-xs text-gray-600">
              {tagList.title}
            </div>
          </div>
        </div>
        <div className="flex gap-4">
          <Link
            to={`/tags/edit/${tagList._id}`}
            className="font-medium text-red-600 hover:underline dark:text-red-500"
          >
            Edit
          </Link>
          <Link
            to={`/categories/delete/`}
            className="font-medium text-red-600 hover:underline dark:text-red-500"
          >
            Delete
          </Link>
        </div>
      </div>
    </div>
  );
};
