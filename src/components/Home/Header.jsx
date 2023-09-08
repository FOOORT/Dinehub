"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { FaBars, FaTimes, FaUser } from "react-icons/fa";

const Header = () => {
  const [menu, setMenu] = useState(false);

  const handleMenu = () => {
    setMenu((prev) => !prev);
  };

  return (
    <div className="w-full bg-white px-12 py-6 flex justify-between items-center fixed">
      <Image src="/image/png/Logo.png" alt="Logo" width={50} height={50} />
      <ul className="gap-4 hidden md:flex items-center justify-end">
        <li className="py-2 px-4 bg-transparent hover:bg-slate-100 duration-300 hover:scale-105 rounded-md">
          How we works
        </li>
        <li className="py-2 px-4 bg-transparent hover:bg-slate-100 duration-300 hover:scale-105 rounded-md">
          Subscription
        </li>
        <li className="py-2 px-4 bg-transparent hover:bg-slate-100 duration-300 hover:scale-105 rounded-md">
          About
        </li>
        <li className="py-2 px-4 bg-transparent hover:bg-slate-100 duration-300 hover:scale-105 rounded-md">
          Contact
        </li>
        <button className=" bg-transparent border-black border rounded-md px-4 py-2 duration-300 hover:scale-105">
          Sign in
        </button>
        <button className="bg-black text-white rounded-md px-4 border-black border py-2 duration-300 hover:scale-105 flex gap-2 items-center">
          <FaUser />
          Sign up
        </button>
      </ul>
      <button
        className="bg-black text-white rounded-md px-6 border-black border py-2 duration-300 hover:scale-105 flex md:hidden gap-2 items-center"
        onClick={handleMenu}
      >
        {menu ? <FaTimes /> : <FaBars />}
        Menu
      </button>
      {menu && (
        <ul className="bg-gray-200 w-2/3 p-8 fixed top-0 right-0 mt-20 mr-12 flex md:hidden flex-col justify-end items-end rounded-md">
          <li className="py-2 px-6 bg-transparent hover:bg-slate-100 duration-300 hover:scale-105 rounded-md">
            How we works
          </li>
          <li className="py-2 px-6 bg-transparent hover:bg-slate-100 duration-300 hover:scale-105 rounded-md">
            Subscription
          </li>
          <li className="py-2 px-6 bg-transparent hover:bg-slate-100 duration-300 hover:scale-105 rounded-md">
            About
          </li>
          <li className="py-2 px-6 bg-transparent hover:bg-slate-100 duration-300 hover:scale-105 rounded-md">
            Contact
          </li>
          <div className="flex w-full gap-4 mt-4">
            <button className=" bg-transparent border-black border rounded-md px-6 py-2 duration-300 hover:scale-105 w-1/2">
              Sign in
            </button>
            <button className="bg-black text-white rounded-md px-6 border-black border py-2 duration-300 hover:scale-105 flex gap-2 items-center w-1/2">
              <FaUser />
              Sign up
            </button>
          </div>
        </ul>
      )}
    </div>
  );
};

export default Header;
