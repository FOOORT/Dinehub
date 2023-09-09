import Image from "next/image";
import React from "react";
import { FaLocationArrow, FaStar } from "react-icons/fa";
import { MdLocationOn } from "react-icons/md";
import {} from "react-icons/fa";

const Cards = ({image, name, location}) => {
  return (
    <div className="w-full p-2 rounded-2xl duration-300 scale-100 hover:bg-slate-200 cursor-pointer">
      {image}
      {/* <Image
        src={image}
        alt={name}
        width={100}
        height={100}
        className="w-full"
      /> */}
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
  );
};

export default Cards;
