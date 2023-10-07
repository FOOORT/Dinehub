import Image from "next/image";
import React from "react";
import { FaCartPlus } from "react-icons/fa";

const AdminCard = ({ name, desc, price, category, restaurant }) => {
  return (
    <div className="w-full p-2 flex justify-center items-center rounded-lg">
      <fieldset className="bg-gray-100 rounded-xl p-2 flex justify-center items-center w-full">
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
          <div className="grid grid-cols-2 w-full gap-2">
            <button className="bg-gray-500 rounded-md text-white py-2 active:scale-90 duration-100">
              Disable
            </button>
            <button className="bg-blue-700 rounded-md text-white py-2 flex flex-col justify-center items-center active:scale-90 duration-100">
              Enable
            </button>
          </div>
        </ul>
      </fieldset>
    </div>
  );
};

export default AdminCard;
