import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import noImage from "../../assets/images/noimage.png";

export const DeleteCategory = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [retrievedImage, setRetrievedImage] = useState({});

  const fetchData = () => {
    axios
      .get(`http://localhost:8000/api/categories/${id}`)
      .then((response) => {
        setTitle(response.data.title);
        setRetrievedImage(response.data.image);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    fetchData();
  });

  const handleDeleteCategory = (e) => {
    e.preventDefault();
    axios
      .delete(`http://localhost:8000/api/categories/delete/${id}`)
      .then(() => {
        console.log("Category Successfully Daleted!");
        navigate("/categories");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className="p-4">
      <div className="flex flex-col items-center border-2 border-orange-500 rounded-xl w-[600px] p-8 mx-auto">
        <h3 className="text-2xl pb-4">
          {`Are You Sure You want to delete ${title} Category?`}
        </h3>
        {/* image container */}
        <div className="flex justify-center w-128 h-64">
          <img
            src={retrievedImage ? retrievedImage.url : noImage}
            alt="image"
            className="h-full w-full object-cover object-center"
          />
        </div>
        <button
          className="p-4 bg-red-600 text-white m-8 w-full rounded-full"
          onClick={handleDeleteCategory}
        >
          Yes, Delete it
        </button>
      </div>
    </div>
  );
};
