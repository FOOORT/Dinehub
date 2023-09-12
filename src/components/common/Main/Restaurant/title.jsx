import Link from "next/link";
import React from "react";
import { FaChevronLeft, FaShareAlt } from "react-icons/fa";

const Title = () => {
  return (
    <div className="flex w-full bg-white justify-between p-2">
      <div className="flex items-center gap-4 text-xl">
        <Link
          href="/"
          className="p-2 rounded-md hover:bg-black hover:text-white duration-300 scale-90 active:scale-100 active:rounded-full"
        >
          <FaChevronLeft />
        </Link>
        <h1 className=" font-semibold">
          Africano Restaurant / Gout Africain Ltd
        </h1>
      </div>
      <button className="bg-black rounded-md px-6 py-3 text-sm flex justify-center items-center gap-2 text-white duration-300 scale-90 active:scale-100 active:rounded-full">
        <FaShareAlt />
        Share
      </button>
    </div>
  );
};

export default Title;
