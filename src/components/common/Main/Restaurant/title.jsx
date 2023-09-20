import Link from "next/link";
import React from "react";
import { FaChevronLeft } from "react-icons/fa";
import Share from "./share";

const Title = () => {
  return (
    <div className="flex w-full justify-between items-center pb-2">
      <div className="flex items-center gap-2 md:gap-4 text-xl">
        <Link
          href="/"
          className="p-1 md:p-2 rounded-md hover:bg-black hover:text-white duration-300 scale-90 active:scale-100 active:rounded-full"
        >
          <FaChevronLeft />
        </Link>
        <h1 className=" font-semibold">
          Africano Restaurant / Gout Africain Ltd
        </h1>
      </div>
      <Share />
    </div>
  );
};

export default Title;
