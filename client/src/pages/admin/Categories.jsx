import React, { useEffect, useState } from "react";
import { CardCategoryRow } from "../../components/CardCategoryRow";
import axios from "axios";
import { Link } from "react-router-dom";

export const Categories = () => {
  const [categoryList, SetCategoryList] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/categories")
      .then((response) => {
        SetCategoryList(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  });
  return (
    <>
      <div className="flex justify-center pt-8 pb-4 text-2xl font-bold">
        <h1>Categories</h1>
      </div>
      <div className="w-full flex justify-center">
        <div className="w-[720px] flex flex-col">
          <div className="w-full flex">
            <div className="w-1/2 bg-gray-200 p-2 text-center">
              Category Name
            </div>
            <div className="w-1/2 bg-gray-200 p-2 text-center">Actions</div>
          </div>
          {categoryList.map((category, _id) => (
            <CardCategoryRow key={_id} category={category} />
          ))}
        </div>
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
            <span className="ml-1 font-bold text-lg text-orange-500">Back</span>
          </Link>
          <Link
            to="/category/create"
            className="inline-flex items-center border  border-orange-500 px-3 py-1.5 rounded-md text-indigo-500 hover:bg-indigo-50"
          >
            <span className="mr-1 font-bold text-lg text-orange-500">
              Create
            </span>
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
    </>
  );
};
