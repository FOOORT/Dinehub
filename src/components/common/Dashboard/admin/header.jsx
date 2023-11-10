"use client";

import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import Sidebar from "../sidebar";
import SearchInput from "../../SearchInput";

const Header = ({ Navs }) => {
  const [sidebar, setSidebar] = useState(false);
  const handleSideBar = () => {
    setSidebar((prev) => !prev);
  };
  return (
    <div className="flex justify-between rounded-xl items-center pt-4 w-full">
      <div className="flex items-center justify-center gap-4">
        <button
          className="lg:hidden flex items-center justify-center bg-slate-200 p-3 rounded-md border border-black"
          onClick={handleSideBar}
        >
          {sidebar ? <FaTimes /> : <FaBars />}
        </button>
        <h1 className="flex items-center gap-2 text-slate-800">
          <span className="hidden lg:block">Welcome to </span>Obinasom Dashboard
        </h1>
      </div>
      <SearchInput />
      {sidebar && (
        <div className="absolute top-0 mt-[8vh] rounded-xl bg-white p-4 shadow-md z-50 w-[95vw] md:w-[67.4vw] flex lg:hidden">
          <Sidebar Navs={Navs} />
        </div>
      )}
    </div>
  );
};

export default Header;
