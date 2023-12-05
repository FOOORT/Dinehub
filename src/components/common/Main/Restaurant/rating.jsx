import React from "react";
import { FaStar } from "react-icons/fa";

const Rating = () => {
  return (
    <button className="flex justify-center items-center gap-2">
      <div className="flex justify-center items-center bg-blue-700 text-white gap-2 p-1 px-2 rounded-lg">
        <span className="text-lg">4.2</span>
        <FaStar />
      </div>
      <div className="flex flex-col">
        <h4 className="text-xl font-semibold">771</h4>
        <h3 className="text-sm -mt-1">Reviews</h3>
      </div>
    </button>
  );
};

export default Rating;
