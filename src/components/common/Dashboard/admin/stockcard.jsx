import React from "react";
import { FaStumbleuponCircle } from "react-icons/fa";

const StockCard = ({ icon, amount, title }) => {
  return (
    <div className="border-b-2 border-blue-700 p-2 flex gap-2 flex-col justify-start items-start">
      <span className="bg-blue-100/30 p-4 rounded-lg">{icon}</span>
      <div className="flex justify-between items-end w-full">
        <p className=" font-medium">{amount} rwf</p>
        <p className="text-sm">{title}</p>
      </div>
    </div>
  );
};

export default StockCard;
