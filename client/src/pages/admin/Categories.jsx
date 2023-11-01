import React, { useEffect, useState } from "react";
import { CardCategoryRow } from "../../components/CardCategoryRow";
import axios from "axios";

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
    </>
  );
};
