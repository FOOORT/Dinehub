import React from "react";
import { FaStar } from "react-icons/fa";
import { MdLocationOn } from "react-icons/md";
import Link from "next/link";
import Image from "next/image";

const Cards = ({ key, image, name, location }) => {
  return (
    <Link href="/restaurant" key={key}>
      <div className="w-full p-2 rounded-3xl duration-300 scale-100 hover:bg-slate-200 cursor-pointer">
        <Image
          src={image}
          alt={{ name }}
          width={100}
          height={100}
          className="w-full rounded-2xl lg:h-44 h-48 duration-100"
        />
        <div className="py-2">
          <h2 className="text-lg font-semibold">{name}</h2>
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
