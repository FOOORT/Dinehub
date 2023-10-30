import ActionButton from "@/components/common/actionbutton";
import React from "react";
import { BiCamera } from "react-icons/bi";
import { FaPlus, FaTimes } from "react-icons/fa";

const AddStock = ({ click }) => {
  return (
    <div className="w-2/6 bg-white rounded-2xl p-4 flex flex-col justify-start items-end">
      <button onClick={click} className="bg-black text-white p-4 rounded-full">
        <FaTimes />
      </button>
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
          <h2 className="text-sm text-slate-600">Product name</h2>
          <input
            type="text"
            className="w-full p-2 py-4 text-sm outline-none bg-slate-100 active:outline-none rounded-lg"
          />
        </div>
        <div className="col-span-2 grid grid-cols-2 gap-2 py-4">
          <div className="w-full">
            <h2 className="text-sm text-slate-600">Quantity</h2>
            <input
              type="text"
              className="w-full p-2 py-4 text-sm outline-none bg-slate-100 active:outline-none rounded-lg"
            />
          </div>
          <div className="w-full">
            <h2 className="text-sm text-slate-600">Category</h2>
            <input
              type="text"
              className="w-full p-2 py-4 text-sm outline-none bg-slate-100 active:outline-none rounded-lg"
            />
          </div>
        </div>
        <div className="col-span-2 grid grid-cols-2 gap-2 py-4">
          <div className="w-full">
            <h2 className="text-sm text-slate-600">Buying price</h2>
            <input
              type="text"
              className="w-full p-2 py-4 text-sm outline-none bg-slate-100 active:outline-none rounded-lg"
            />
          </div>
          <div className="w-full">
            <h2 className="text-sm text-slate-600">Selling price</h2>
            <input
              type="text"
              className="w-full p-2 py-4 text-sm outline-none bg-slate-100 active:outline-none rounded-lg"
            />
          </div>
        </div>
        <div className="col-span-2">
          <h2 className="text-sm text-slate-600">Description</h2>
          <input
            type="text"
            className="w-full p-2 py-4 text-sm outline-none bg-slate-100 active:outline-none rounded-lg"
          />
        </div>

        <div className="pt-2">
          <ActionButton
            name="Add Stocks"
            icon={<FaPlus />}
            onClick={click}
            className="px-4 py-3"
          />
        </div>
      </form>
    </div>
  );
};

export default AddStock;
