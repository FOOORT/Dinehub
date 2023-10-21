import React from "react";
import { FaSearch } from "react-icons/fa";

const SearchInput = () => {
  return (
    <div className="bg-white flex items-center rounded-md p-[1px] group justify-between">
      <input
        type="text"
        placeholder="Search ..."
        className="px-3 py-2 outline-none active:outline-none rounded-md text-sm"
      />
      <span className="bg-white p-3 rounded-md group-hover:bg-black group-hover:text-white duration-100 active:scale-90">
        <FaSearch className="" />
      </span>
    </div>
  );
};

export default SearchInput;
