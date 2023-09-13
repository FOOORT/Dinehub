"use client";

import React, { useState, useEffect } from "react";
import {
  FaFacebook,
  FaInstagram,
  FaShareAlt,
  FaTwitter,
  FaWhatsapp,
} from "react-icons/fa";

const Share = () => {
  const [shareMenu, setShareMenu] = useState(false);

  const handleShareBtn = () => {
    setShareMenu((prev) => !prev);
  };

  return (
    <div className="flex flex-col items-end gap-2">
      <button
        className="bg-black rounded-md px-6 py-3 text-sm flex justify-center items-center gap-2 text-white duration-300 scale-100 active:rounded-full"
        onClick={handleShareBtn}
      >
        <FaShareAlt />
        Share
      </button>

      {shareMenu && (
        <ul className="bg-slate-50 absolute mt-12 p-1 border rounded-md flex gap-1 flex-col">
          <li className="flex gap-4 items-center p-2 border border-transparent hover:border-slate-300 rounded-md group">
            <span className="h-8 w-8 rounded-full bg-black text-white flex justify-center items-center hover:scale-105">
              <FaInstagram className="group-hover:-rotate-45 duration-300 scale-100 group-hover:scale-110" />
            </span>
            <span>Instagram</span>
          </li>
          <li className="flex gap-4 items-center p-2 border border-transparent hover:border-slate-300 rounded-md group">
            <span className="h-8 w-8 rounded-full bg-black text-white flex justify-center items-center hover:scale-105">
              <FaTwitter className="group-hover:-rotate-45 duration-300 scale-100 group-hover:scale-110" />
            </span>
            <span>Twitter</span>
          </li>
          <li className="flex gap-4 items-center p-2 border border-transparent hover:border-slate-300 rounded-md group">
            <span className="h-8 w-8 rounded-full bg-black text-white flex justify-center items-center hover:scale-105">
              <FaWhatsapp className="group-hover:-rotate-45 duration-300 scale-100 group-hover:scale-110" />
            </span>
            <span>Whatsapp</span>
          </li>
          <li className="flex gap-4 items-center p-2 border border-transparent hover:border-slate-300 rounded-md group">
            <span className="h-8 w-8 rounded-full bg-black text-white flex justify-center items-center hover:scale-105">
              <FaFacebook className="group-hover:-rotate-45 duration-300 scale-100 group-hover:scale-110" />
            </span>
            <span>Facebook</span>
          </li>
        </ul>
      )}
    </div>
  );
};

export default Share;
