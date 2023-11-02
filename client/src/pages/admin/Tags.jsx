import React, { useState } from "react";
import { TagsCard } from "../../components/TagsCard";
import axios from "axios";
import { Link } from "react-router-dom";
export const Tags = () => {
  const [tagLists, setTagLists] = useState([]);
  useState(() => {
    axios
      .get("http://localhost:8000/api/tags")
      .then((response) => {
        setTagLists(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <div className="flex flex-col justify-center items-center w-full">
      <div className="mt-8 mb-4 font-bold text-2xl">
        <h1>Tag Lists</h1>
      </div>
      <div className="w-72 md:w-[480px] lg:w-[600px] rounded-lg border border-solid border-slate-200">
        {tagLists.map((tagList) => (
          <TagsCard key={tagList._id} tagList={tagList} />
        ))}
      </div>
      <div className="flex justify-center py-8 mt-2">
        <div className="flex justify-between gap-8">
          <Link
            to="/"
            className="inline-flex items-center border border-orange-500 px-3 py-1.5 rounded-md text-indigo-500 hover:bg-indigo-50"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="h-6 w-6 text-orange-500"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M7 16l-4-4m0 0l4-4m-4 4h18"
              ></path>
            </svg>
            <span className="ml-1 font-medium text-orange-500">Back</span>
          </Link>
          <Link
            to="/tag/create"
            className="inline-flex items-center border  border-orange-500 px-3 py-1.5 rounded-md text-indigo-500 hover:bg-indigo-50"
          >
            <span className="mr-1 font-medium text-orange-500">Create</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="h-6 w-6 text-orange-500"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              ></path>
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
};
