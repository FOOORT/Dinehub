import React from "react";
import { FaAirbnb } from "react-icons/fa";

const StatsCard = () => {
  return (
    <div className="bg-white p-4 rounded-md flex gap-4 items-center">
      <div className="bg-slate-100 rounded-full flex justify-center items-center p-5">
        <FaAirbnb className="text-base text-blue-600" />
      </div>
      <div className="flex flex-col">
        <h3 className="text-xl font-semibold text-slate-800">64,000 rwf</h3>
        <p className="text-sm font-normal text-slate-500">Active subscription</p>
      </div>
    </div>
  );
};

export default StatsCard;
