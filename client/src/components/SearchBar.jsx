import React from "react";

export const SearchBar = ({ placeholder, title }) => {
  return (
    <div className="dark:bg-gray-800">
      <div className="dark:bg-transparent">
        <div className="mx-auto flex flex-col items-center py-4 sm:py-8">
          <div className="w-11/12 sm:w-2/3 lg:flex justify-center items-center flex-col mb-5 sm:mb-10">
            <h1 className="text-4xl sm:text-5xl md:text-5xl lg:text-5xl xl:text-6xl text-center text-gray-800 dark:text-white font-black leading-10">
              {title}{" "}
              <span className="text-orange-500 dark:text-violet-500">
                FJ GOO
              </span>
              !
            </h1>
            <p className="mt-5 sm:mt-10 lg:w-10/12 text-gray-600 dark:text-gray-300 font-normal text-center text-xl">
              The place that can satisfy your crave.
            </p>
          </div>
          <div className="flex w-11/12 md:w-8/12 xl:w-6/12">
            <div className="flex rounded-md w-full">
              <input
                type="text"
                name="q"
                className="w-full p-3 rounded-md rounded-r-none  border-2 border-gray-300 placeholder-current dark:bg-gray-500  dark:text-gray-300 dark:border-none "
                placeholder={placeholder}
              />
              <button className="inline-flex items-center gap-2 bg-violet-700 text-white text-lg font-semibold py-3 px-6 rounded-r-md">
                <span>Find</span>
                <svg
                  className="text-gray-200 h-5 w-5 p-0 fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  version="1.1"
                  x="0px"
                  y="0px"
                  viewBox="0 0 56.966 56.966"
                  style={{ enableBackground: "new 0 0 56.966 56.966" }}
                  xmlSpace="preserve"
                >
                  <path d="M55.146,51.887L41.588,37.786c3.486-4.144,5.396-9.358,5.396-14.786c0-12.682-10.318-23-23-23s-23,10.318-23,23  s10.318,23,23,23c4.761,0,9.298-1.436,13.177-4.162l13.661,14.208c0.571,0.593,1.339,0.92,2.162,0.92  c0.779,0,1.518-0.297,2.079-0.837C56.255,54.982,56.293,53.08,55.146,51.887z M23.984,6c9.374,0,17,7.626,17,17s-7.626,17-17,17  s-17-7.626-17-17S14.61,6,23.984,6z" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
