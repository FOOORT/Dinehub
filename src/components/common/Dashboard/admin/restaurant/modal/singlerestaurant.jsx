"use client";

import ActionButton from "@/components/common/actionbutton";
import React, { useState } from "react";
import { BiCamera } from "react-icons/bi";
import {
  FaTimes,
  FaArrowRight,
  FaArrowLeft,
  FaPlus,
  FaStar,
} from "react-icons/fa";

const SingleRestaurant = ({ closeModal }) => {
  const [step, setStep] = useState(1);
  const handleNext = () => {
    setStep(step + 1);
  };
  const handlePrevious = () => {
    setStep(step - 1);
  };

  return (
    <div className="w-screen h-screen fixed left-0 top-0 z-[60] bg-black/50 backdrop-blur-sm flex justify-center items-center">
      <div className="bg-white p-4 rounded-xl w-5/6 xl:w-4/6 shadow-2xl shadow-slate-400 flex flex-col justify-center items-center">
        <div className="w-full flex justify-end items-center">
          <button
            className="bg-black text-white p-3 rounded-xl relative z-20"
            onClick={() => closeModal()}
          >
            <FaTimes className="text-lg" />
          </button>
        </div>
        <div className="flex w-full rounded-lg -mt-10 gap-4 items-center mb-5">
          <div className=" w-2/5 h-56 border rounded-lg justify-center items-center flex ">
            <input type="file" className="w-full h-full hidden" />
            <BiCamera />
          </div>

          <div className="w-3/5 rounded-lg justify-start items-start flex flex-col gap-2 p-4">
            <h1 className="text-xl">Business name: Obinasom</h1>
            <p className=" font-medium text-blue-600 text-sm">
              obina@gmail.com
            </p>
            <div className="p-4 rounded-lg">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore
                amet officiis minima, natus maxime veritatis sint vel
                praesentium deleniti eos, explicabo debitis molestias culpa
                voluptate architecto accusamus aut illo cupiditate?
              </p>
              <div className="flex justify-between items-center mt-2">
                <h2 className=" text-blue-600 text-sm font-semibold">
                  222 reviews
                </h2>
                <div className="flex items-center gap-2 mt-4">
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-slate-100 w-3/5 flex gap-2 justify-evenly items-center rounded-2xl relative z-10 p-4 ">
          <div className="flex flex-col items-center">
            <h3 className="text-sm">Owner Firstname</h3>
            <h1 className="text-lg">Reconfort</h1>
          </div>
          <div className="flex flex-col items-center">
            <h3 className="text-sm">Owner Lastname</h3>
            <h1 className="text-lg">Daniel</h1>
          </div>
          <div className="flex flex-col items-center">
            <h3 className="text-sm">Owner Username</h3>
            <h1 className="text-lg lowercase">@daniel</h1>
          </div>
        </div>
        <div className="flex w-full shadow shadow-slate-100 rounded-lg -mt-10 pt-16 gap-4 items-start bg-slate-50 p-4">
          <div className="w-2/5 flex flex-col justify-start items-start gap-2">
            <h1 className="text-xl">3 Employees</h1>
            <ul className="w-full">
              <li className="p-4 rounded-lg hover:bg-slate-100 w-full duration-150">
                John doe
              </li>
              <li className="p-4 rounded-lg hover:bg-slate-100 w-full duration-150">
                John doe
              </li>
              <li className="p-4 rounded-lg hover:bg-slate-100 w-full duration-150">
                John doe
              </li>
            </ul>
          </div>

          <ul className="w-3/5 rounded-lg justify-start items-start flex flex-col gap-2 p-4 border">
            <li className="flex gap-3 items-center w-full hover:bg-slate-100 duration-150 p-4">
              <h1>Business adress:</h1>
              <h1>kg 655 st</h1>
            </li>
            <li className="flex gap-3 items-center w-full hover:bg-slate-100 duration-150 p-4">
              <h1>Business adress:</h1>
              <h1>kg 655 st</h1>
            </li>
            <li className="flex gap-3 items-center w-full hover:bg-slate-100 duration-150 p-4">
              <h1>Business adress:</h1>
              <h1>kg 655 st</h1>
            </li>
            <li className="flex gap-3 items-center w-full hover:bg-slate-100 duration-150 p-4">
              <h1>Business adress:</h1>
              <h1>kg 655 st</h1>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SingleRestaurant;
