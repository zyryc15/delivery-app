import React from "react";
import { Button } from "../components/Button";
import { Link } from "react-router-dom";

export const CardStore = ({ store }) => {
  return (
    <Link to="/store-profile">
      <div className="bg-white rounded-lg shadow-lg p-8">
        <div className="relative overflow-hidden">
          <img
            className="h-80 w-100 object-cover rounded-t-xl"
            src={store.image}
            alt="Product"
          />
          <div className="absolute inset-0 bg-black opacity-40"></div>
          <div className="absolute inset-0 flex items-center justify-center">
            <button className="bg-white text-gray-900 py-2 px-6 rounded-full font-bold hover:bg-gray-300">
              View Store
            </button>
          </div>
        </div>
        <h3 className="text-xl font-bold text-gray-900 mt-4">{store.name}</h3>
        <p className="text-gray-500 text-sm mt-2">{store.description}</p>
        <div className="flex items-center justify-between mt-4">
          <span className="text-gray-900 font-bold text-lg">
            Time: {store.preparationTime}
          </span>
          <Button text="Open" />
        </div>
      </div>
    </Link>
  );
};
