import React from "react";
import { FaFileAudio } from "react-icons/fa";

const StatsCard = () => {
  return (
    <div className="bg-white p-2 rounded-md flex gap-4 items-center">
      <div className="bg-slate-100 rounded-full flex justify-center items-center p-5">
        <FaFileAudio className="text-base text-blue-600" />
      </div>
      <div className="flex flex-col">
        <h3 className="text-xl font-semibold">64,000 rwf</h3>
        <p className="text-sm font-light">Active subscription</p>
      </div>
    </div>
  );
};

export default StatsCard;
