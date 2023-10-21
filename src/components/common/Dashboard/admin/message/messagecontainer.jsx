import React from "react";
import { PiDotsThreeVerticalBold } from "react-icons/pi";
import MessageActual from "./messageactual";
import { IoMdAttach } from "react-icons/io";
import { BsSend } from "react-icons/bs";

const MessageContainer = () => {
  return (
    <div className="w-full">
      <div className="flex justify-between items-start">
        <div className="flex gap-2 items-center">
          <div className="w-12 h-12 rounded-full border border-green-500"></div>
          <div className="flex-col">
            <h1 className="text-black text-sm text-bold">John Cairo</h1>
            <p className="text-xs text-slate-400">Online</p>
          </div>
        </div>
        <btton className="bg-black text-white p-3 rounded-full">
          <PiDotsThreeVerticalBold className="text-sm" />
        </btton>
      </div>

      <div className="flex justify-between w-full">
        <div className="mt-3">
          <div className="w-4/6 flex flex-col items-start">
            <MessageActual
              sms="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Harum,
              ipsum eius. Tempore, deleniti, quaerat."
            />
            <MessageActual sms="Lorem ipsum dolor sit, amet consectetur" />
          </div>
          <div className="w-2/6"></div>
        </div>
      </div>
      <div className="flex justify-between w-full flex-row-reverse mt-4">
        <div className="w-4/6 flex flex-col justify-end items-end">
          <MessageActual sms="Lorem ipsum dolor sit" />
        </div>
        <div className="w-2/6"></div>
      </div>

      <div className="border bg-slate-50 w-full rounded-lg px-2 py-0 flex items-center gap-2 mt-2 group">
        <button className="p-3 rounded-full flex justify-center items-center bg-slate-50">
          <IoMdAttach className="text-xs" />
        </button>
        <input
          type="text"
          placeholder="Enter message here .."
          className="w-full bg-slate-50 p-4 text-sm rounded-full outline-none active:outline-none"
        />
        <button className="p-3 rounded-full flex justify-center items-center bg-slate-50 group-hover:bg-slate-100 duration-300 active:bg-black group-active:bg-black group-active:text-white">
          <BsSend className="text-xs" />
        </button>
      </div>
    </div>
  );
};

export default MessageContainer;
