import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaCartPlus } from "react-icons/fa";

const Cards = ({ name, desc, price, category, image }) => {
  return (
    <div className="w-full p-2 flex justify-center items-center rounded-lg group">
      <fieldset className="bg-gray-100 rounded-xl p-4 flex justify-center items-center w-full">
        <legend className="w-full flex justify-center items-center rounded-xl">
          <Image
            layout="responsive"
            src={image}
            alt="image1"
            width={100}
            height={100}
            className="rounded-full scale-100 group-hover:scale-125 duration-300 lg:scale-125 lg:group-hover:scale-150 mt-5 border-2 border-white"
          />
        </legend>
        <ul className="w-full flex flex-col gap-2 justify-center items-center">
          <li className="w-full font-medium text-center mt-4 text-lg">
            {name}
          </li>
          <li className="font-bold text-center text-xl">{price * 1000} RWF</li>
          <li className="text-center text-slate-600 line-clamp-2 text-sm">
            {desc}
          </li>
          <li className="text-center text-black font-medium">{category}</li>
          <div className="flex w-full gap-2">
            <Link href="menu/dish" className="w-9/12 h-10">
              <button className="bg-black rounded-md text-white w-full py-2 duration-150 active:scale-90 h-full">
                Order now
              </button>
            </Link>
            <Link href="menu/cart" className="w-3/12 h-10">
              <button className="bg-slate-100 border border-slate-800 rounded-md text-slate-800 py-2 flex flex-col justify-center items-center hover:bg-black hover:text-white duration-150 active:scale-90 w-full h-full">
                <FaCartPlus />
              </button>
            </Link>
          </div>
        </ul>
      </fieldset>
    </div>
  );
};

export default Cards;
