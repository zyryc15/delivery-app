import React, { useEffect, useState } from "react";
import { Button } from "../../components/Button";
import axios from "axios";

export const CreateStore = () => {
  const [storeName, setStoreName] = useState("");
  const [storePhone, setStorePhone] = useState("");
  const [storeImage, setStoreImage] = useState({});
  const [storeAddress, setStoreAddress] = useState("");
  const [file, setFile] = useState(null);

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
          setStoreImage(response.data);
        })
        .catch((error) => {
          console.error("Error uploading file:", error);
        });
    }
  };

  const handleSaveStore = (e) => {
    e.preventDefault();

    const storeData = {
      name: storeName,
      phone: storePhone,
      image: storeImage,
      address: storeAddress,
    };
    axios
      .post("http://localhost:8000/api/store", storeData)
      .then(() => {
        console.log("Store successfully created.");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    uploadImage();
  }, [file]);

  return (
    <div className="flex items-center justify-center p-12">
      <div className="mx-auto w-full max-w-[550px] bg-white">
        <form>
          <div className="mb-5">
            <label
              htmlFor="name"
              className="mb-3 block text-base font-medium text-[#07074D]"
            >
              Store Name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Full Name"
              className="w-full rounded-md border border-[#e0e0e0] bg-white px-6 py-3 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
              value={storeName}
              onChange={(e) => setStoreName(e.target.value)}
            />
          </div>
          <div className="mb-5">
            <label
              htmlFor="phone"
              className="mb-3 block text-base font-medium text-[#07074D]"
            >
              Phone Number
            </label>
            <input
              type="text"
              name="phone"
              id="phone"
              placeholder="Enter your phone number"
              className="w-full rounded-md border border-[#e0e0e0] bg-white px-6 py-3 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
              value={storePhone}
              onChange={(e) => setStorePhone(e.target.value)}
            />
          </div>
          <div className="mb-5">
            <label
              className="mb-3 block text-base font-medium text-[#07074D]"
              htmlFor="file"
            >
              Store Photo
            </label>
            <input
              className="w-full rounded-md border border-[#e0e0e0] bg-white px-6 py-3 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
              id="file"
              type="file"
              name="file"
              onChange={(e) => setFile(e.target.files[0])}
            />
          </div>

          <div className="mb-5 pt-3">
            <label className="mb-5 block text-base font-semibold text-[#07074D] sm:text-xl">
              Address Details
            </label>
            <div className="-mx-3 flex flex-wrap">
              <div className="w-full px-3">
                <div className="mb-5">
                  <input
                    type="text"
                    name="city"
                    id="city"
                    placeholder="Enter city"
                    className="w-full rounded-md border border-[#e0e0e0] bg-white px-6 py-3 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                    value={storeAddress}
                    onChange={(e) => setStoreAddress(e.target.value)}
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-center">
            <button
              onClick={handleSaveStore}
              className="hover:shadow-form w-full rounded-md bg-[#6A64F1] py-3 px-8 text-center text-base font-semibold text-white outline-none"
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
