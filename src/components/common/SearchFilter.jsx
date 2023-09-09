import React from "react";
import { LuSearch } from "react-icons/lu";

const SearchFilter = () => {
  return (
    <div className="bg-white px-1 py-1 hidden md:flex gap-1 rounded-full items-center justify-center duration-500 scale-95 hover:scale-100 border">
      <button className="h-full text-sm w-1/3 px-4 py-3 border-r rounded-l-full duration-300 scale-95 hover:scale-100 hover:bg-slate-100">
        Anywhere
      </button>
      <button className="h-full text-sm w-1/3 px-4 py-3 border-r duration-300 scale-95 hover:scale-100 hover:bg-slate-100">
        Categories
      </button>
      <div className="flex items-center justify-center">
        <input
          type="text"
          placeholder="Search ..."
          className="h-full text-sm px-4 py-3 duration-300 scale-95 hover:scale-100 hover:bg-slate-100 outline-none active:outline-none"
        />
        <div className="h-12 w-12 bg-black text-white flex justify-center items-center rounded-full duration-300 scale-95 hover:scale-100 active:scale-110">
          <LuSearch />
        </div>
      </div>
    </div>
  );
};

export default SearchFilter;
