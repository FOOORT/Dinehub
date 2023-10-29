import React from "react";
import { FaTimes } from "react-icons/fa";

const AddStock = ({ click }) => {
  return (
    <div className="w-2/6 h-5/6 bg-white rounded-2xl p-4 flex justify-end items-start">
      <button onClick={click} className="bg-black text-white p-4 rounded-full">
        <FaTimes />
      </button>
    </div>
  );
};

export default AddStock;
