import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { StoreTable } from "../../components/StoreTable";

export const Store = () => {
  const [storeLists, setStoreLists] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/stores")
      .then((response) => {
        setStoreLists(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className="w-full flex justify-center">
      <div className="w-[720px] mt-8">
        <table className="min-w-full bg-white font-[sans-serif]">
          <thead className="whitespace-nowrap">
            <tr>
              <th className="px-6 py-4 text-left text-sm font-semibold text-black">
                Name
              </th>
              <th className="px-6 py-4 text-left text-sm font-semibold text-black">
                Phone Number
              </th>
              <th className="px-6 py-4 text-left text-sm font-semibold text-black">
                Address
              </th>
              <th className="px-6 py-4 text-left text-sm font-semibold text-black">
                Action
              </th>
            </tr>
          </thead>
          {storeLists.map((store) => (
            <StoreTable key={store._id} store={store} />
          ))}
        </table>
      </div>
    </div>
  );
};
