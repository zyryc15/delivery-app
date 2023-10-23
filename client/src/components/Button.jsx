import React from "react";

export const Button = ({ type, text }) => {
  return (
    <button
      type={type}
      className="text-white bg-orange-400 hover:bg-orange-500 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm px-8 py-2 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover-bg-blue-700 dark:focus:ring-blue-800"
    >
      {text}
    </button>
  );
};
