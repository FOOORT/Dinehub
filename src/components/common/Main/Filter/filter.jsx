"use client";

import React, { useState } from "react";
import { VscSettings } from "react-icons/vsc";

const Filter = () => {
  const [filter, setFilter] = useState(false);

  const handleFilter = () => {
    setFilter((prev) => !prev);
  };

  return (
    <div className="flex flex-col items-end">
      <button
        className="flex gap-2 items-center border border-black px-4 py-2 rounded-md"
        onClick={handleFilter}
      >
        <VscSettings />
        Filter
      </button>

      {filter && (
        <ul className="bg-white grid grid-cols-1 gap-1 absolute mt-12 z-50 p-2 rounded-lg">
          <li className="py-2 px-4 border rounded-md">Popular</li>
          <li className="py-2 px-4 border rounded-md">Latest</li>
          <li className="py-2 px-4 border rounded-md">Most pouplar</li>
        </ul>
      )}
    </div>
  );
};

export default Filter;
