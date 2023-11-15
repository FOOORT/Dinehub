"use client";

import ActionButton from "@/components/common/actionbutton";
import React, { useState } from "react";
import { BiCamera } from "react-icons/bi";
import { FaTimes } from "react-icons/fa";
import { FiPlus } from "react-icons/fi";
import { CiLocationOn } from "react-icons/ci";
import StatsContainer from "../admin/statscontainer";
import UserStats from "@/components/json/manager/userStats";
import HistoryTable from "../user/report/common/historytable";

const SingleUserModal = ({ closeModal }) => {
  return (
    <div className="w-screen h-screen fixed left-0 top-0 z-[60] bg-black/50 backdrop-blur-sm flex justify-center items-center">
      <div className="bg-white p-0 rounded-3xl w-5/6 xl:w-4/6 shadow-2xl shadow-slate-400 flex flex-col justify-center items-center duration-100">
        <div className="w-full flex justify-end items-center p-4">
          <button
            className="bg-slate-300 hover:bg-black duration-150 text-white p-3 rounded-full relative z-20"
            onClick={() => closeModal()}
          >
            <FaTimes className="text-lg" />
          </button>
        </div>
        <div className="flex w-full -mt-16 gap-4 items-center">
          <div className="flex gap-4 p-4 border-b w-full border-slate-100 items-end justify-between">
            <div className=" w-36 h-36 border rounded-full justify-center items-center flex ">
              <input type="file" className="w-full h-full hidden" />
              <BiCamera />
            </div>
            <div className="p-4 flex flex-col gap-2 justify-start items-start w-4/6">
              <h2 className="text-xl font-bold">Reconfort daniel</h2>
              <div className="flex gap-3 mt-2 text-sm">
                <CiLocationOn className="text-blue-600" />
                <p className=" text-base">Kacyiru, Rwanda - </p>
                {/* now time */}
                <p>07:51am</p>
              </div>
              <p className="text-slate-700">Active since : 30th July 2023 </p>
            </div>
            <ActionButton name="Order now" icon={<FiPlus />} className="py-3" />
          </div>
        </div>
        <div className="bg-slate-50 p-4 w-full rounded-b-3xl">
          <StatsContainer Stats={UserStats} />
          <h3 className="mt-4 -mb-3 text-lg font-semibold">Recent data</h3>
          <HistoryTable />
        </div>
      </div>
    </div>
  );
};

export default SingleUserModal;
