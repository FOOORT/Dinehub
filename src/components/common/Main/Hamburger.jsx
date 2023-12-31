"use client";

import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { TbUserCircle } from "react-icons/tb";
import SmSearchFilter from "../SmSearchFilter";
import Link from "next/link";

const Hamburger = () => {
  const [menu, setMenu] = useState(false);

  const handleMenu = () => {
    setMenu((prev) => !prev);
  };

  return (
    <div className="block lg:hidden">
      <button
        className="bg-black text-white rounded-md px-6 border-black border py-2 duration-300 hover:scale-105 flex gap-2 items-center text-sm "
        onClick={handleMenu}
      >
        {menu ? <FaTimes /> : <FaBars />}
        Menu
      </button>
      {menu && (
        <ul className="bg-white w-2/3 p-8 fixed top-0 right-0 mt-16 mr-4 flex lg:hidden flex-col justify-end items-end rounded-md border z-50">
          <Link href="/home">
            <li className="py-2 px-6 bg-transparent hover:bg-slate-100 duration-300 hover:scale-105 rounded-md">
              Home
            </li>
          </Link>
          <SmSearchFilter />
          <div className="flex w-full gap-4 mt-4">
            <button className=" bg-transparent border-black border rounded-md px-6 py-2 duration-300 hover:scale-105 w-1/2">
              Sign in
            </button>
            <button className="bg-black text-white rounded-md px-6 border-black border py-2 duration-300 hover:scale-105 flex gap-2 items-center w-1/2">
              <TbUserCircle />
              Sign up
            </button>
          </div>
        </ul>
      )}
    </div>
  );
};

export default Hamburger;
