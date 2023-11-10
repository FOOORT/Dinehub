"use client";

import ActionButton from "@/components/common/actionbutton";
import React, { useState } from "react";
import { BiCamera } from "react-icons/bi";
import { FaTimes, FaArrowRight, FaArrowLeft, FaPlus } from "react-icons/fa";

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
      <div className="bg-white p-4 rounded-xl w-5/6 md:w-4/6 lg:w-3/6 xl:w-2/6 shadow-2xl shadow-slate-400">
        <div className="w-full flex justify-between items-center">
          <h1 className="text-lg font-semibold">Add business</h1>
          <button
            className="bg-black text-white p-3 rounded-xl"
            onClick={() => closeModal()}
          >
            <FaTimes className="text-lg" />
          </button>
        </div>
        Single Resto details
      </div>
    </div>
  );
};

export default SingleRestaurant;
