import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import noImage from "../../assets/images/noimage.png";

export const EditCategory = () => {
  const { id } = useParams();
  const [file, setFile] = useState(null);
  const [image, setImage] = useState(null);
  const navigate = useNavigate();

  const [categoryTitle, setCategoryTitle] = useState("");
  const [retrievedImage, setRetrievedImage] = useState({});

  //   fetching the data
  const fetchData = () => {
    axios
      .get(`http://localhost:8000/api/categories/${id}`)
      .then((response) => {
        setCategoryTitle(response.data.title);
        setRetrievedImage(response.data.image);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const uploadImage = () => {
    if (file) {
      const formData = new FormData();
      formData.append("image", file);

      axios
        .post("http://localhost:8000/api/upload-image", formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        })
        .then((response) => {
          console.log("File uploaded successfully:", response.data);
          setImage(response.data);
        })
        .catch((error) => {
          console.error("Error uploading file:", error);
        });
    }
  };

  useEffect(() => {
    if (file) {
      // automatically upload the image when 'file' changes
      uploadImage();
    } else {
      fetchData();
    }
  }, [file]);

  const handleUpdateCategory = (e) => {
    e.preventDefault();
    const noImage = {
      public_id: "gzu38k4e2jfgo7jgyubh",
      url: "http://res.cloudinary.com/forsale/image/upload/v1698857334/gzu38k4e2jfgo7jgyubh.png",
    };
    const categoryData = {
      title: categoryTitle,
      image: image || retrievedImage || noImage,
    };

    axios
      .patch(`http://localhost:8000/api/categories/${id}`, categoryData)
      .then(() => {
        console.log("Category has been updated.");
        navigate("/categories");
      })
      .catch((error) => {
        console.error("An error occurred:", error);
      });

    // console.log(`retrievedIImage: ${retrievedImage}`);
    // console.log(`image: ${image}`);
  };

  return (
    <div className="flex flex-col items-center justify-center">
      <div>
        <h1 className="text-xl font-semibold text-[#07074D] my-4 pt-4">
          Update Category
        </h1>
      </div>
      <div className="mx-auto w-full max-w-[550px] rounded-lg bg-white border border-solid border-slate-200">
        <form className="py-4 px-9">
          <div className="mb-5">
            <label
              htmlFor="title"
              className="mb-3 block text-xl font-semibold text-[#07074D]"
            >
              Category Name:
            </label>
            <input
              type="text"
              name="title"
              id="title"
              placeholder="Category name..."
              className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-orange-500 focus:shadow-md"
              value={categoryTitle}
              onChange={(e) => setCategoryTitle(e.target.value)}
            />
          </div>

          {/* image container */}
          <div className="flex justify-center w-128 h-64">
            <img
              src={retrievedImage ? retrievedImage.url : noImage}
              alt="image"
              className="h-full w-full object-cover object-center"
            />
          </div>

          {/* upload picture */}
          <div className="mb-6 pt-4">
            <span className="mb-5 block text-xl font-semibold text-[#07074D]">
              Change Image?
            </span>

            <div className="mb-8">
              <input
                type="file"
                name="file"
                id="file"
                className="sr-only"
                onChange={(e) => setFile(e.target.files[0])}
              />
              <label
                htmlFor="file"
                className="relative flex min-h-[80px] items-center justify-center rounded-md border border-dashed border-[#e0e0e0] p-8 text-center"
              >
                <div>
                  <span className="inline-flex rounded border border-[#e0e0e0] py-2 px-7 text-base font-medium text-[#07074D]">
                    Browse
                  </span>
                </div>
              </label>
            </div>

            {file && (
              <div className="mb-5 rounded-md bg-[#F5F7FB] py-4 px-8">
                <div className="flex items-center justify-between">
                  <span className="truncate pr-3 text-base font-medium text-[#07074D]">
                    {file ? file.name : "No file selected"}
                  </span>
                  <button className="text-[#07074D]">
                    <svg
                      width="10"
                      height="10"
                      viewBox="0 0 10 10"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M0.279337 0.279338C0.651787 -0.0931121 1.25565 -0.0931121 1.6281 0.279338L9.72066 8.3719C10.0931 8.74435 10.0931 9.34821 9.72066 9.72066C9.34821 10.0931 8.74435 10.0931 8.3719 9.72066L0.279337 1.6281C-0.0931125 1.25565 -0.0931125 0.651788 0.279337 0.279338Z"
                        fill="currentColor"
                      />
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M0.279337 9.72066C-0.0931125 9.34821 -0.0931125 8.74435 0.279337 8.3719L8.3719 0.279338C8.74435 -0.0931127 9.34821 -0.0931123 9.72066 0.279338C10.0931 0.651787 10.0931 1.25565 9.72066 1.6281L1.6281 9.72066C1.25565 10.0931 0.651787 10.0931 0.279337 9.72066Z"
                        fill="currentColor"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            )}
          </div>

          <div>
            <button
              onClick={handleUpdateCategory}
              className="hover:shadow-form w-full rounded-md bg-[#6A64F1] py-3 px-8 text-center text-base font-semibold text-white outline-none"
            >
              Update
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
