"use client";

import ActionButton from "@/components/common/actionbutton";
import React, { useState } from "react";
import { BiCamera } from "react-icons/bi";
import { FaTimes } from "react-icons/fa";
import { FiCamera, FiPlus } from "react-icons/fi";
import { CiLocationOn } from "react-icons/ci";
import { MdModeEdit } from "react-icons/md";
import UserStats from "@/components/json/manager/userStats";

import StatsContainer from "../Dashboard/admin/statscontainer";
import Image from "next/image";

const EditMenu = ({ closeModal }) => {
  const [selectedImages, setSelectedImages] = useState([]);
  const handleImageChange = (e) => {
    const files = e.target.files;
    if (files.length > 0) {
      const newImages = Array.from(files).map((file) => ({
        src: URL.createObjectURL(file),
        alt: file.name,
      }));
      setSelectedImages((prevImages) => [...prevImages, ...newImages]);
    }
  };

  const renderGalleryImages = () => {
    return selectedImages.map((image, index) => (
      <Image
        layout="responsive"
        key={index}
        src={image.src}
        alt={image.alt}
        width={100}
        height={100}
        className="w-full rounded-lg min-h-full h-[120px]"
      />
    ));
  };
  return (
    <div className="w-screen h-screen fixed left-0 top-0 z-[60] bg-black/50 backdrop-blur-sm flex justify-center items-center">
      <div className="bg-white p-0 rounded-3xl w-5/6 md:w-4/6 lg:w-3/6 xl:w-2/6 shadow-2xl shadow-slate-400 flex flex-col justify-center items-center duration-150">
        <div className="w-full flex justify-end items-center p-4">
          <button
            className="bg-slate-300 hover:bg-black duration-150 text-white p-3 rounded-full relative z-20"
            onClick={() => closeModal()}
          >
            <FaTimes className="text-lg" />
          </button>
        </div>

        <div className="w-full grid grid-cols-3 xl:grid-cols-4 gap-2 duration-100 p-3 bg-slate-100">
          {renderGalleryImages()}
          <div className="w-full h-full border border-dashed rounded-lg flex justify-center items-center">
            <input
              type="file"
              name="image"
              className="min-h-full h-[120px] w-full opacity-0"
              onChange={handleImageChange}
              multiple
            />
            <FiCamera className="absolute text-slate-500" />
          </div>
        </div>
        <ul className="w-full flex flex-col gap-4 justify-center items-center p-4">
          <input
            type="text"
            className="font-medium text-center mt-4 text-lg border outline-none p-2 rounded-lg w-full"
            value="Pizza"
          />
          <input
            type="text"
            className="font-bold text-center mt-4 text-lg border outline-none p-2 rounded-lg w-full"
            value="1,500 RWF"
          />
          <textarea
            name=""
            id=""
            cols="30"
            className="w-full text-center mt-4 line-clamp-2 text-sm border outline-none p-4 rounded-lg"
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse
            delectus quidem doloremque autem commodi repellat omnis atque eum
            asperiores.
          </textarea>
          <div className="bg-slate-100 px-4 py-2 rounded-lg w-full text-center">
            <select
              name=""
              id=""
              className="bg-transparent outline-none active:outline-none"
            >
              <option value="">Snacks</option>
              <option value="">Food</option>
              <option value="">Beer</option>
            </select>
          </div>
          <button className="border border-blue-500 rounded-md px-4 py-2 active:scale-90 duration-100 flex justify-center items-center bg-blue-600 text-white gap-4">
            <MdModeEdit /> Update
          </button>
        </ul>
      </div>
    </div>
  );
};

export default EditMenu;
