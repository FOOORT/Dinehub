"use client";

import React, { useState } from "react";
import { AiOutlineCaretDown } from "react-icons/ai";
const Following = () => {
    const [follow, setFollow] = useState(false);

    const handleFollowing = () => {
      setFollow((prev) => !prev);
    };
  return (
    <div className="flex flex-col items-start">
      <button
        className="flex gap-2 items-center border border-black px-4 py-2 rounded-md"
        onClick={handleFollowing}
      >
        Following
        <AiOutlineCaretDown />
      </button>

      {follow && (
        <ul className="bg-white grid grid-cols-1 gap-1 absolute mt-12 z-50 p-2 rounded-lg">
          <li className="py-2 px-4 border rounded-md">Popular</li>
          <li className="py-2 px-4 border rounded-md">Latest</li>
          <li className="py-2 px-4 border rounded-md">Most pouplar</li>
        </ul>
      )}
    </div>
  );
};

export default Following;
