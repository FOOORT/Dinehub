"use client";
import Image from "next/image";
import React, { useState } from "react";
import { MdModeEdit } from "react-icons/md";
import { IoMdTrash } from "react-icons/io";
import EditMenu from "./editmenu";

const MenuCard = ({
  name,
  desc,
  price,
  category,
  restaurant,
  status,
  image,
}) => {
  const actualImage = image;

  const [editMenus, setEditMenus] = useState(false);
  const [menuStatus, setMenuStatus] = useState(status);

  const handleMenu = () => {
    setEditMenus((prev) => !prev);
  };

  const toggleStatus = () => {
    setMenuStatus((prevStatus) =>
      prevStatus === "active" ? "inactive" : "active"
    );
  };

  return (
    <div className="w-full p-2 flex justify-center items-center rounded-lg group">
      <fieldset className="bg-gray-100 rounded-xl p-2 flex justify-center items-center w-full">
        <legend className="w-full flex justify-center items-center rounded-xl">
          <Image
            src={actualImage}
            alt="image1"
            width={100}
            height={100}
            className="rounded-full scale-100 group-hover:scale-125 duration-300 lg:scale-125 lg:group-hover:scale-150 mt-6"
          />
        </legend>
        <ul className="w-full flex flex-col gap-2 justify-center items-center mt-3">
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
            <button
              className={`${
                menuStatus === "active" ? "bg-slate-600" : "bg-blue-500"
              } rounded-md text-white py-2 active:scale-90 duration-100`}
              onClick={toggleStatus}
            >
              {menuStatus}
            </button>
            <div className="grid grid-cols-2 w-full gap-2">
              <button
                className="border border-blue-500 rounded-md py-2 active:scale-90 duration-100 flex justify-center items-center text-blue-500"
                onClick={() => setEditMenus(true)}
              >
                <MdModeEdit />
              </button>
              <button className="border border-red-500 rounded-md py-2 active:scale-90 duration-100 flex justify-center items-center text-red-500">
                <IoMdTrash />
              </button>
            </div>
          </div>
        </ul>
      </fieldset>
      {editMenus && <EditMenu closeModal={handleMenu} />}
    </div>
  );
};

export default MenuCard;
