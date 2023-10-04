"use client";

import React, { useState } from "react";
import { FaBars, FaSearch, FaTimes } from "react-icons/fa";
import Sidebar from "./sidebar";

const Header = () => {
  const [sidebar, setSidebar] = useState(false);
  const handleSideBar = () => {
    setSidebar((prev) => !prev);
  };
  return (
    <div className="flex justify-between rounded-xl items-center pt-4">
      <div className="flex items-center justify-center gap-4">
        <button
          className="lg:hidden flex items-center justify-center bg-slate-200 p-3 rounded-md border border-black"
          onClick={handleSideBar}
        >
          {sidebar ? <FaTimes /> : <FaBars />}
        </button>
        <h1 className="flex items-center gap-2 text-slate-800">
          <span className="hidden lg:block">Welcome to </span>Obinasom
          Restaurant Dashboard
        </h1>
      </div>
      <div className="bg-white flex items-center rounded-md p-[1px] group">
        <input
          type="text"
          placeholder="Search ..."
          className="px-3 py-2 outline-none active:outline-none rounded-md text-sm"
        />
        <span className="bg-white p-3 rounded-md group-hover:bg-black group-hover:text-white duration-100 active:scale-90">
          <FaSearch className="" />
        </span>
      </div>
      {sidebar && (
        <div className="absolute top-0 mt-[8vh] rounded-xl bg-white p-4 shadow-md z-50 w-[95vw] md:w-[67.4vw] flex lg:hidden">
          <Sidebar />
        </div>
      )}
    </div>
  );
};

export default Header;
