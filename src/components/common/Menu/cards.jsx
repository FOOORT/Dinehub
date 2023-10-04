import Image from "next/image";
import React from "react";
import { FaCartPlus } from "react-icons/fa";

const Cards = ({ name, desc, price, category, restaurant }) => {
  return (
    <div className="w-full p-2 flex justify-center items-center rounded-lg">
      <fieldset className="bg-gray-100 rounded-xl p-4 flex justify-center items-center w-full">
        <legend className="w-full flex justify-center items-center rounded-xl">
          <Image
            src="/image/Plate/Image1.png"
            alt="image1"
            width={100}
            height={100}
            className="rounded-full scale-125 lg:scale-150 mt-6"
          />
        </legend>
        <ul className="w-full flex flex-col gap-2 justify-center items-center">
          <li className="w-full font-medium text-center mt-4 text-lg">
            {name}
          </li>
          <li className="font-bold text-center text-xl">{price * 1000} RWF</li>
          <li className="text-center text-slate-600">20 Bowls available</li>
          <div className="flex w-full gap-2">
            <button className="bg-black rounded-md text-white w-9/12 py-2">
              Order now
            </button>
            <button className="bg-black rounded-md text-white w-3/12 py-2 flex flex-col justify-center items-center">
              <FaCartPlus />
            </button>
          </div>
        </ul>
      </fieldset>
    </div>
  );
};

export default Cards;
