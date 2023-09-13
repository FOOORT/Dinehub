import React from "react";
import { FaStar } from "react-icons/fa";
import { MdLocationOn } from "react-icons/md";
import {} from "react-icons/fa";
import Link from "next/link";

const Cards = ({ image, name, location }) => {
  return (
    <Link href="/restaurant">
      <div className="w-full p-2 rounded-2xl duration-300 scale-100 hover:bg-slate-200 cursor-pointer">
        {image}
        <div className="py-2">
          <h2 className="text-xl font-semibold">{name}</h2>
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-2">
              <MdLocationOn />
              <p className="text-sm font-normal">{location}</p>
            </div>
            <div className="flex">
              <FaStar className="scale-90" />
              <FaStar className="scale-90" />
              <FaStar className="scale-90" />
              <FaStar className="scale-90" />
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Cards;
