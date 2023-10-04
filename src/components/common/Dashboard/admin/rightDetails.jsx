"use client";
import Link from "next/link";
import React from "react";
import { FaLocationArrow } from "react-icons/fa";
import { FiPhoneCall } from "react-icons/fi";
import { MdOutlineMail } from "react-icons/md";
import PerfomacePieChart from "./restaurant/component/perfomacepiechart";

const RightDetails = ({ selectedTr }) => {
  const getBorderColor = (decision) => {
    switch (decision) {
      case "approved":
        return "border-green-500";
      case "rejected":
        return "border-red-500";
      case "pending":
        return "border-blue-500";
      default:
        return "border-gray-500";
    }
  };

  const decision = selectedTr.decision;
  const borderColor = getBorderColor(decision);

  if (selectedTr) {
    return (
      <div className=" w-full h-full flex flex-col justify-between items-center pt-20 pb-8">
        <div className="w-full flex flex-col justify-center items-center">
          <div
            className={`w-32 h-32 bg-white rounded-full border-2 ${borderColor}`}
          ></div>
          <h1 className="font-bold text-lg mt-2">{selectedTr.name}</h1>
          <p className="text-sm font-normal">{selectedTr.decision}</p>
        </div>
        <div className="w-full">
          <div className=" w-full p-4 duration-300 hover:bg-slate-100 rounded-lg">
            <p className="font-bold text-lg py-2">Contact Info</p>
            <div className="flex flex-col gap-2 ">
              <Link href="" className="flex border-b mt-2 items-center gap-2">
                <MdOutlineMail />
                <p>{selectedTr.email}</p>
              </Link>
              <Link href="" className="flex border-b mt-2 items-center gap-2">
                <FiPhoneCall />
                <p>{selectedTr.contact}</p>
              </Link>
              <Link href="" className="flex border-b mt-2 items-center gap-2">
                <FaLocationArrow />
                <p>{selectedTr.location}</p>
              </Link>
            </div>
          </div>

          <div className=" mt-5 w-full duration-300 hover:bg-slate-100 rounded-lg">
            <p className="font-bold text-lg py-2 p-4">Perfomance</p>
            <div
              style={{ width: "100%", height: "200px" }}
              className=" flex items-center justify-center"
            >
              <div className="w-full p-1 flex justify-center items-center">
                <PerfomacePieChart />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-1 bg-white mt-5 text-white">
            <button className="bg-black p-2 rounded-l-lg">Approve</button>
            <button className="bg-red-600 p-2 rounded-r-lg">Reject</button>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="w-full p-4">
        <h2 className="text-xl font-semibold mb-2">Details</h2>
        <div className="bg-white p-4 rounded-lg shadow">
          <p>Select an item from the table to view details.</p>
        </div>
      </div>
    );
  }
};

export default RightDetails;
