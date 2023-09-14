import React from "react";
import { FaMinus, FaPlus } from "react-icons/fa";

const ReserveOption = () => {
  return (
    <div className="flex gap-2 justify-center items-center">
      <input
        type="text"
        value="1"
        className="h-24 w-24 flex justify-center items-center text-3xl font-semibold border text-center outline-none active:outline-none scale-95 rounded-md"
      />
      <div className="flex flex-col gap-2">
        <button className="text-sm p-4 rounded-md bg-slate-300 h-10 w-10 flex justify-center items-center duration-100 active:scale-110">
          <FaPlus className="text-sm font-light" />
        </button>
        <button className="text-sm p-4 rounded-md bg-slate-300 h-10 w-10 flex justify-center items-center duration-100 active:scale-110">
          <FaMinus className="text-sm font-light" />
        </button>
      </div>
    </div>
  );
};

export default ReserveOption;
