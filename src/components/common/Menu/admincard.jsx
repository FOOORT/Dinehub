import Image from "next/image";
import React from "react";
import { MdModeEdit } from "react-icons/md";
import { IoMdTrash } from "react-icons/io";

const AdminCard = ({
  name,
  desc,
  price,
  category,
  restaurant,
  status,
  ingredients,
  image,
}) => {
  const actualimage = image;

  return (
    <div className="w-full p-2 flex justify-center items-center rounded-lg">
      <fieldset className="bg-gray-100 rounded-xl p-2 flex justify-center items-center w-full">
        <legend className="w-full flex justify-center items-center rounded-xl">
          <Image
            src={actualimage}
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
          <li className="font-bold text-center text-xl">{price * 100} RWF</li>
          <li className="text-center text-slate-600 line-clamp-2 text-sm">
            {desc}
          </li>
          <li className="text-center text-black font-medium">{category}</li>
          <div className="flex"></div>
          <div className="grid grid-cols-2 w-full gap-2">
            {status === "inactive" ? (
              <button className="bg-gray-500 rounded-md text-white py-2 active:scale-90 duration-100">
                Disable
              </button>
            ) : (
              <button className="bg-blue-700 rounded-md text-white py-2 flex flex-col justify-center items-center active:scale-90 duration-100">
                Enable
              </button>
            )}
            <div className="grid grid-cols-2 w-full gap-2">
              <button className="border border-blue-500 rounded-md py-2 active:scale-90 duration-100 flex justify-center items-center text-blue-500 ">
                <MdModeEdit />
              </button>
              <button className="border border-red-500 rounded-md py-2 active:scale-90 duration-100 flex justify-center items-center text-red-500">
                <IoMdTrash />
              </button>
            </div>
          </div>
        </ul>
      </fieldset>
    </div>
  );
};

export default AdminCard;
