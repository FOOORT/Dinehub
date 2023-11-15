"use client";

import ActionButton from "@/components/common/actionbutton";
import React, { useState } from "react";
import { BiCamera } from "react-icons/bi";
import { FaTimes, FaArrowRight, FaArrowLeft, FaPlus } from "react-icons/fa";

const AddMenu = ({ closeModal }) => {
  const [step, setStep] = useState(1);
  const handleNext = () => {
    setStep(step + 1);
  };
  const handlePrevious = () => {
    setStep(step - 1);
  };

  const handleSubmit = () => closeModal();

  return (
    <div className="w-screen h-screen fixed left-0 top-0 z-[60] bg-black/50 backdrop-blur-sm flex justify-center items-center">
      <div className="bg-white p-4 rounded-xl w-5/6 md:w-4/6 lg:w-3/6 xl:w-2/6 shadow-2xl shadow-slate-400">
        <div className="w-full flex justify-between items-center">
          <h1 className="text-lg font-semibold">Add Menu</h1>
          <button
            className="bg-black text-white p-3 rounded-xl"
            onClick={() => closeModal()}
          >
            <FaTimes className="text-lg" />
          </button>
        </div>
        <form
          action=""
          className="w-full p-1 grid grid-cols-2 mt-2 gap-1 rounded-xl"
        >
          <div className="col-span-2  flex justify-center items-center py-4">
            <div className="bg-slate-200 w-32 h-32 p-2 py-4 flex justify-center items-center rounded-full">
              <input
                type="file"
                className="p-2 py-4 text-sm outline-none active:outline-none w-32 h-32 rounded-full absolute opacity-0 cursor-pointer"
              />
              <BiCamera className=" text-xl" />
            </div>
          </div>
          <div className="col-span-2">
            <h2 className="text-sm text-slate-600">Menu name</h2>
            <input
              type="text"
              className="w-full p-2 py-4 text-sm outline-none bg-slate-100 active:outline-none rounded-lg"
            />
          </div>
          <div className="col-span-2 grid grid-cols-2 gap-2 py-4">
            <div className="w-full">
              <h2 className="text-sm text-slate-600">Price</h2>
              <input
                type="text"
                className="w-full p-2 py-4 text-sm outline-none bg-slate-100 active:outline-none rounded-lg"
              />
            </div>
            <div className="w-full">
              <h2 className="text-sm text-slate-600">Category</h2>
              <select
                name=""
                id=""
                className="w-full p-2 py-4 text-sm outline-none bg-slate-100 active:outline-none rounded-lg"
              >
                <option value="">choose</option>
                <option value="">Food</option>
                <option value="">Snacks</option>
                <option value="">Beverages</option>
              </select>
            </div>
          </div>
          <div className="col-span-2">
            <h2 className="text-sm text-slate-600">Description</h2>
            <textarea
              name=""
              id=""
              cols="10"
              rows="5"
              className="w-full p-2 py-4 text-sm outline-none bg-slate-100 active:outline-none rounded-lg"
            ></textarea>
          </div>
          <div className="pt-2 flex items-center gap-2">
            <ActionButton name="Add menu" icon={<FaPlus />} />
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddMenu;
