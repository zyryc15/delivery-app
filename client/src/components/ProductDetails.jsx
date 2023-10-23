import React from "react";
import { Button } from "./Button";
import { products } from "./Products";
import { CardProducts } from "./CardProducts";

export const ProductDetails = () => {
  return (
    <div className="container my-8 mx-auto px-6">
      <div className="md:flex md:items-center">
        <div className="w-full h-64 md:w-1/2 lg:h-96">
          <img
            className="h-full w-full rounded-md object-cover max-w-lg mx-auto"
            src="https://images.unsplash.com/photo-1649261191606-cb2496e97eee?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8NDR8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
            alt="Juice"
          />
        </div>
        <div className="w-full max-w-lg mx-auto mt-5 md:ml-8 md:mt-0 md:w-1/2">
          <h3 className="font-bold text-gray-700 uppercase text-xl">Juice</h3>
          <span className="text-lg font-semibold text-black cursor-auto my-3">
            $12
          </span>
          <hr className="my-3" />

          <div className="mt-3">
            <span className="font-bold text-gray-700 dark:text-gray-300">
              Product Description:
            </span>
            <p className="text-gray-600 dark:text-gray-300 text-sm mt-2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed
              ante justo. Integer euismod libero id mauris malesuada tincidunt.
              Vivamus commodo nulla ut lorem rhoncus aliquet. Duis dapibus augue
              vel ipsum pretium, et venenatis sem blandit. Quisque ut erat vitae
              nisi ultrices placerat non eget velit. Integer ornare mi sed ipsum
              lacinia, non sagittis mauris blandit. Morbi fermentum libero vel
              nisl suscipit, nec tincidunt mi consectetur.
            </p>
          </div>
          <div className="mt-2">
            <span className="font-bold text-gray-700 dark:text-gray-300">
              Quantity:
            </span>
            <div className="flex items-center mt-1">
              <button className="text-gray-500 focus:outline-none focus:text-gray-600">
                <svg
                  className="h-5 w-5"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M12 9v3m0 0v3m0-3h3m-3 0H9"></path>
                </svg>
              </button>
              <span className="text-gray-700 text-lg mx-2" id="count">
                20
              </span>
              <button className="text-gray-500 focus:outline-none focus:text-gray-600">
                <svg
                  className="h-5 w-5"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0"></path>
                </svg>
              </button>
            </div>
          </div>
          <div className="flex items-center mt-6">
            <Button text="Buy Now" type="button" />
            <button className="mx-2 text-gray-600 border rounded-md p-2 hover:bg-gray-200 focus:outline-none">
              <svg
                className="h-5 w-5"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0"></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
      <div className="mt-16">
        <h3 className="text-gray-600 text-2xl font-medium">More Products</h3>
        <div className="w-fit mx-auto grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 justify-items-center justify-center gap-y-20 gap-x-14 mt-10 mb-5">
          {products.map((product, index) => (
            <CardProducts key={index} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
};
