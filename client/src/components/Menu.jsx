import React, { useEffect, useState } from "react";
import { CardCategory } from "./CardCategory";
import axios from "axios";

export const Menu = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const showCategory = () => {
      axios
        .get("http://localhost:8000/api/categories")
        .then((response) => {
          setCategories(response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    };

    showCategory();
  }, []);

  return (
    <div className="flex flex-col items-center">
      <h1 className="text-4xl md:text-5xl font-medium text-slate-700 text-center pt-12">
        Food Categories
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 py-4 gap-y-2">
        {categories.map((category, index) => (
          <CardCategory key={index} category={category} />
        ))}
      </div>
    </div>
  );
};
