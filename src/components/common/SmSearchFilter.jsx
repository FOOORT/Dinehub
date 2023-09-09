import React from "react";
import { LuSearch } from "react-icons/lu";

const SmSearchFilter = () => {
  return (
    <div className="bg-white px-1 py-1 flex flex-col md:hidden gap-1 rounded-md items-end justify-end duration-500 scale-95 hover:scale-100 border w-full">
      <button className="h-full text-sm w-full px-4 py-3 border-r rounded-md duration-300 scale-95 hover:scale-100 hover:bg-slate-100 text-right">
        Anywhere
      </button>
      <button className="h-full text-sm w-full px-4 py-3 border-r duration-300 scale-95 hover:scale-100 hover:bg-slate-100 text-right">
        Categories
      </button>
      <div className="flex items-center justify-center w-full">
        <input
          type="text"
          placeholder="Search ..."
          className="w-5/6 h-full text-sm px-4 py-3 duration-300 scale-95 hover:scale-100 hover:bg-slate-100 outline-none active:outline-none"
        />
        <div className="h-12 w-12 bg-black text-white flex justify-center items-center rounded-full duration-300 scale-95 hover:scale-100 active:scale-110">
          <LuSearch />
        </div>
      </div>
    </div>
  );
};

export default SmSearchFilter;
