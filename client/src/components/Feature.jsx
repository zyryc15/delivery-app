import { CardTrendingProd } from "./CardTrendingProd";

import sampleFood1 from "../assets/images/sampleBurger.jpg";
import sampleFood2 from "../assets/images/sampleSabaw.jpg";
import sampleFood3 from "../assets/images/sampleItlog.jpg";
import sampleFood4 from "../assets/images/sampleSandwich.jpg";

const trendingProducts = [
  {
    name: "Burger",
    picture: sampleFood1,
    price: 24,
  },
  {
    name: "Sabaw",
    picture: sampleFood2,
    price: 50,
  },
  {
    name: "Itlog",
    picture: sampleFood3,
    price: 5,
  },
  {
    name: "Sandwich",
    picture: sampleFood4,
    price: 30,
  },
];

export const Feature = () => {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-10 sm:px-6 sm:py-12 lg:max-w-6xl lg:px-10">
        <h2 className="text-4xl md:text-5xl font-medium text-slate-700 text-center pt-12">
          Trending Products
        </h2>

        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {trendingProducts.map((product, index) => (
            <CardTrendingProd key={index} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
};
