import React from "react";
import { CardProducts } from "./CardProducts";

export const products = [
  {
    productID: "1",
    imageSrc:
      "https://images.unsplash.com/photo-1646753522408-077ef9839300?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8NjZ8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    storeName: "storeName",
    productName: "Product Name",
    price: "$149",
    discountPrice: "$199",
  },
  {
    productID: "2",
    imageSrc:
      "https://images.unsplash.com/photo-1651950519238-15835722f8bb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8Mjh8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    storeName: "storeName",
    productName: "Product Name",
    price: "$149",
    discountPrice: "$199",
  },
  {
    productID: "3",
    imageSrc:
      "https://images.unsplash.com/photo-1651950537598-373e4358d320?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8MjV8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    storeName: "storeName",
    productName: "Product Name",
    price: "$149",
    discountPrice: "$199",
  },
  {
    productID: "4",
    imageSrc:
      "https://images.unsplash.com/photo-1651950540805-b7c71869e689?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8Mjl8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    storeName: "storeName",
    productName: "Product Name",
    price: "$149",
    discountPrice: "$199",
  },
  {
    productID: "5",
    imageSrc:
      "https://images.unsplash.com/photo-1649261191624-ca9f79ca3fc6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8NDd8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    storeName: "storeName",
    productName: "Product Name",
    price: "$149",
    discountPrice: "$199",
  },
  {
    productID: "6",
    imageSrc:
      "https://images.unsplash.com/photo-1649261191606-cb2496e97eee?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8NDR8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    storeName: "storeName",
    productName: "Product Name",
    price: "$149",
    discountPrice: "$199",
  },
];

export const Products = () => {
  return (
    <>
      <div className="text-center p-10">
        <h1 className="font-bold text-4xl mb-4">Fast and Delicious Food</h1>
        <h1 className="text-3xl">We have got everything here.</h1>
      </div>
      <section className="w-fit mx-auto grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 justify-items-center justify-center gap-y-20 gap-x-14 mt-10 mb-5">
        {products.map((product, index) => (
          <CardProducts key={index} product={product} />
        ))}
      </section>
    </>
  );
};
