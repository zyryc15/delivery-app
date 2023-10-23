import React from "react";

export const CardTrendingProd = ({ product }) => {
  return (
    <div className="flex space-x-2 mx-auto max-w-2xl relative">
      <div className="w-52 h-64 rounded-xl overflow-hidden flex flex-col group cursor-pointer relative">
        <img
          className="w-full h-4/5 object-cover transition duration-300 ease-in-out transform group-hover:scale-105"
          src={product.picture}
          alt={product.name}
        />
        <div className="bg-orange-500 relative flex-1 flex flex-col">
          <div className="flex-1 pb-1 text-white text-sm font-semibold capitalize flex justify-center items-end">
            <p>
              {product.name} <span>Php. {product.price}</span>
            </p>
          </div>
        </div>

        <div className="absolute inset-0 bg-black opacity-0 transition duration-300 ease-in-out group-hover:opacity-20"></div>
      </div>
    </div>
  );
};
