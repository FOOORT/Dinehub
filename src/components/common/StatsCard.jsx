import React from "react";
import { FaAirbnb } from "react-icons/fa";

const StatsCard = ({ icon, title, details }) => {
  return (
    <div
      className={`bg-white p-4 rounded-md flex gap-4 items-center border-l-2 border-transparent hover:border-blue-600 duration-300 cursor-pointer`}
    >
      <div
        className={`bg-blue-50 rounded-full flex justify-center items-center p-5`}
      >
        {/* {<FaAirbnb className={``} />} */}
        {icon}
      </div>
      <div className="flex flex-col">
        <h3 className="text-xl font-semibold text-slate-800">{title}</h3>
        <p className="text-sm font-normal text-slate-500">{details}</p>
      </div>
    </div>
  );
};

export default StatsCard;
