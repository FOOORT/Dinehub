"use client";

import ActionButton from "@/components/common/actionbutton";
import React, { useState } from "react";
import { BiCamera } from "react-icons/bi";
import { FaTimes, FaArrowRight, FaArrowLeft, FaPlus } from "react-icons/fa";

const AddRestaurant = ({ closeModal }) => {
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
      {step === 1 && (
        <div className="bg-white p-4 rounded-xl w-2/6 shadow-2xl shadow-slate-400">
          <div className="w-full flex justify-between items-center">
            <h1 className="text-lg font-semibold">Add business</h1>
            <button
              className="bg-black text-white p-3 rounded-xl"
              onClick={() => closeModal()}
            >
              <FaTimes className="text-lg" />
            </button>
          </div>
          <div className="mt-2 flex justify-start items-center gap-4">
            <p>Steps: </p>
            <button
              className=" h-10 w-10 rounded-full bg-black text-white text-sm p-3"
              onClick={() => setStep(1)}
            >
              1
            </button>
            <button
              className=" h-10 w-10 rounded-full border border-black text-black text-sm p-3 hover:bg-slate-200 duration-300 active:bg-black active:text-white"
              onClick={() => setStep(2)}
            >
              2
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
              <h2 className="text-sm text-slate-600">Email</h2>
              <input
                type="text"
                className="w-full p-2 py-4 text-sm outline-none bg-slate-100 active:outline-none rounded-lg"
              />
            </div>
            <div className="col-span-2 grid grid-cols-2 gap-2 py-4">
              <div className="w-full">
                <h2 className="text-sm text-slate-600">Firstname</h2>
                <input
                  type="text"
                  className="w-full p-2 py-4 text-sm outline-none bg-slate-100 active:outline-none rounded-lg"
                />
              </div>
              <div className="w-full">
                <h2 className="text-sm text-slate-600">Lastname</h2>
                <input
                  type="text"
                  className="w-full p-2 py-4 text-sm outline-none bg-slate-100 active:outline-none rounded-lg"
                />
              </div>
            </div>
            <div className="col-span-2">
              <h2 className="text-sm text-slate-600">Username</h2>
              <input
                type="text"
                className="w-full p-2 py-4 text-sm outline-none bg-slate-100 active:outline-none rounded-lg"
              />
            </div>
            <div className="col-span-2 grid grid-cols-2 gap-2 py-4">
              <div className="w-full">
                <h2 className="text-sm text-slate-600">Password</h2>
                <input
                  type="text"
                  className="w-full p-2 py-4 text-sm outline-none bg-slate-100 active:outline-none rounded-lg"
                />
              </div>
              <div className="w-full">
                <h2 className="text-sm text-slate-600">Confim Password</h2>
                <input
                  type="text"
                  className="w-full p-2 py-4 text-sm outline-none bg-slate-100 active:outline-none rounded-lg"
                />
              </div>
            </div>
            <div className="pt-2">
              <ActionButton
                name="Continue"
                icon={<FaArrowRight />}
                click={handleNext}
              />
            </div>
          </form>
        </div>
      )}
      {step === 2 && (
        <div className="bg-white p-4 rounded-xl w-2/6 shadow-2xl shadow-slate-400">
          <div className="w-full flex justify-between items-center">
            <h1 className="text-lg font-semibold">More about your business</h1>
            <button className="bg-black text-white p-3 rounded-xl">
              <FaTimes className="text-lg" />
            </button>
          </div>
          <div className="mt-2 flex justify-start items-center gap-4">
            <p>Steps: </p>
            <button
              className=" h-10 w-10 rounded-full bg-black text-white text-sm p-3"
              onClick={() => setStep(1)}
            >
              1
            </button>
            <button
              className=" h-10 w-10 rounded-full border bg-black text-white text-sm p-3 duration-300"
              onClick={() => setStep(2)}
            >
              2
            </button>
          </div>
          <form
            action=""
            className="w-full p-1 grid grid-cols-2 mt-2 gap-1 rounded-xl"
          >
            <div className="col-span-2 grid grid-cols-2 gap-2 py-4">
              <div className="w-full">
                <h2 className="text-sm text-slate-600">Business Name</h2>
                <input
                  type="text"
                  className="w-full p-2 py-4 text-sm outline-none bg-slate-100 active:outline-none rounded-lg"
                />
              </div>
              <div className="w-full">
                <h2 className="text-sm text-slate-600">Business Location</h2>
                <input
                  type="text"
                  className="w-full p-2 py-4 text-sm outline-none bg-slate-100 active:outline-none rounded-lg"
                />
              </div>
            </div>
            <div className="col-span-2 grid grid-cols-2 gap-2 py-4">
              <div className="w-full">
                <h2 className="text-sm text-slate-600">Phone number</h2>
                <input
                  type="text"
                  className="w-full p-2 py-4 text-sm outline-none bg-slate-100 active:outline-none rounded-lg"
                />
              </div>
              <div className="w-full">
                <h2 className="text-sm text-slate-600">Whatsapp number</h2>
                <input
                  type="text"
                  className="w-full p-2 py-4 text-sm outline-none bg-slate-100 active:outline-none rounded-lg"
                />
              </div>
            </div>
            <div className="col-span-2 grid grid-cols-2 gap-2 py-4">
              <div className="w-full">
                <h2 className="text-sm text-slate-600">Tin number</h2>
                <input
                  type="text"
                  className="w-full p-2 py-4 text-sm outline-none bg-slate-100 active:outline-none rounded-lg"
                />
              </div>
              <div className="w-full">
                <h2 className="text-sm text-slate-600">
                  Opening- Closing hours
                </h2>
                <input
                  type="text"
                  className="w-full p-2 py-4 text-sm outline-none bg-slate-100 active:outline-none rounded-lg"
                />
              </div>
            </div>
            <textarea
              name=""
              id=""
              cols="30"
              rows="5"
              className="w-full p-2 py-4 text-sm outline-none bg-slate-100 active:outline-none rounded-lg col-span-2"
            ></textarea>
            <div className="col-span-2 flex gap-2 mt-2">
              <input type="radio" />
              <p className="text-xs text-slate-600">
                Yes, I understand and agree to the Dinehub terms of services,
                including the User Agreement and Privacy Policy .
              </p>
            </div>
            <div className="pt-2 flex items-center gap-2">
              <ActionButton
                name="Back"
                icon={<FaArrowLeft />}
                click={handlePrevious}
              />
              <ActionButton name="Ad business" icon={<FaPlus />} />
            </div>
          </form>
        </div>
      )}
    </div>
  );
};

export default AddRestaurant;
