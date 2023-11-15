"use client";

import ActionButton from "@/components/common/actionbutton";
import React, { useState } from "react";
import { BiCamera } from "react-icons/bi";
import { FaTimes } from "react-icons/fa";
import { FiPlus } from "react-icons/fi";
import { CiLocationOn } from "react-icons/ci";
import UserStats from "@/components/json/manager/userStats";

import StatsContainer from "../Dashboard/admin/statscontainer";

const ManagerMenuModal = ({ closeModal }) => {
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
      </div>
    </div>
  );
};

export default ManagerMenuModal;
