import { useEffect, useState } from "react";
import { CardStore } from "../../components/CardStore";
import { SearchBar } from "../../components/SearchBar";
import axios from "axios";

export const StorePage = () => {
  const [stores, setStores] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:8000/api/stores")
      .then((response) => {
        setStores(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  });
  return (
    <>
      <SearchBar
        placeholder="Search for your trusted store..."
        title="Just Relax, Let "
        subtitle="The place that can satisfy your crave."
      />
      <div className="pt-4">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-white mb-8">
            Shop from this Stores
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {stores.map((store, index) => (
              <CardStore key={index} store={store} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
