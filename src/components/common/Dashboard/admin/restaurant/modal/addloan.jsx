"use client";

import ActionButton from "@/components/common/actionbutton";
import React, { useState } from "react";
import { FaTimes, FaArrowRight, FaArrowLeft, FaPlus } from "react-icons/fa";
import Users from "@/components/json/users";

const AddLoan = ({ closeModal }) => {
  const [step, setStep] = useState(1);
  const [plan, setPlan] = useState(false);
  const handleNext = () => {
    setStep(step + 1);
  };
  const handlePrevious = () => {
    setStep(step - 1);
  };

  const handleChange = (event) => {
    if (event.target.value === "custom") {
      setPlan(true);
    } else {
      setPlan(false);
    }
  };

  const [searchTerm, setSearchTerm] = useState("");
  const filteredUsers = Users.filter((user) => {
    return (
      user.firstname.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.lastname.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.username.toLowerCase().includes(searchTerm.toLowerCase())
    );
  });

  const handleSubmit = () => closeModal();

  return (
    <div className='w-screen h-screen fixed left-0 top-0 z-[60] bg-black/50 backdrop-blur-sm flex justify-center items-center'>
      {step === 1 && (
        <div className='bg-white p-4 rounded-xl w-5/6 md:w-4/6 lg:w-3/6 xl:w-2/6 shadow-2xl shadow-slate-400'>
          <div className='w-full flex justify-between items-center'>
            <h1 className='text-lg font-semibold'>Add Loan</h1>
            <button
              className='bg-black text-white p-3 rounded-full'
              onClick={() => closeModal()}
            >
              <FaTimes className='text-lg' />
            </button>
          </div>
          <div className='mt-2 flex justify-start items-center gap-4'>
            <p>Steps: </p>
            <button
              className=' h-10 w-10 rounded-full bg-black text-white text-sm p-3'
              onClick={() => setStep(1)}
            >
              1
            </button>
            <button
              className=' h-10 w-10 rounded-full border border-black text-black text-sm p-3 hover:bg-slate-200 duration-300 active:bg-black active:text-white'
              onClick={() => setStep(2)}
            >
              2
            </button>
          </div>
          <form
            action=''
            className='w-full p-1 grid grid-cols-2 mt-2 gap-1 rounded-xl'
          >
            <div className='col-span-2'>
              <h2 className='text-sm text-slate-600'>Choose user</h2>
              <div className='bg-slate-100 mt-4 p-4 rounded-lg'>
                <input
                  type='text'
                  placeholder='Search by name, email, or username'
                  className='w-full p-2 py-3 text-sm outline-none bg-white active:outline-none rounded-lg'
                  onChange={(event) => setSearchTerm(event.target.value)}
                />
                <select
                  name=''
                  id=''
                  className='w-full p-2 py-3 text-sm outline-none bg-slate-100 active:outline-none rounded-lg mt-2'
                >
                  {filteredUsers.map((user) => (
                    <option value={user.username} key={user.username}>
                      {user.firstname} {user.lastname} ({user.email})
                    </option>
                  ))}
                </select>
              </div>
            </div>
            <div className='pt-2'>
              <ActionButton
                name='Continue'
                icon={<FaArrowRight />}
                click={handleNext}
              />
            </div>
          </form>
        </div>
      )}
      {step === 2 && (
        <div className='bg-white p-4 rounded-xl w-5/6 md:w-4/6 lg:w-3/6 xl:w-2/6 shadow-2xl shadow-slate-400'>
          <div className='w-full flex justify-between items-center'>
            <h1 className='text-lg font-semibold'>More info</h1>
            <button
              className='bg-black text-white p-3 rounded-full'
              onClick={() => closeModal()}
            >
              <FaTimes className='text-lg' />
            </button>
          </div>
          <div className='mt-2 flex justify-start items-center gap-4'>
            <p>Steps: </p>
            <button
              className=' h-10 w-10 rounded-full bg-black text-white text-sm p-3'
              onClick={() => setStep(1)}
            >
              1
            </button>
            <button
              className=' h-10 w-10 rounded-full border bg-black text-white text-sm p-3 duration-300'
              onClick={() => setStep(2)}
            >
              2
            </button>
          </div>
          <form
            action=''
            className='w-full p-1 grid grid-cols-2 mt-2 gap-1 rounded-xl'
          >
            <div className='grid grid-cols-1 col-span-2 gap-2 py-4'>
              <div className='w-full'>
                <h2 className='text-sm text-slate-600'>Plan </h2>
                <select
                  name=''
                  id=''
                  className='w-full p-2 py-4 text-sm outline-none bg-slate-100 active:outline-none rounded-lg pr-4'
                  onChange={handleChange}
                >
                  <option value='full'>60 Days</option>
                  <option value='half'>30 Days</option>
                  <option value='custom'>Custom</option>
                </select>
              </div>
            </div>
            {plan && (
              <div className='col-span-2 grid grid-cols-2 gap-2 py-4'>
                <div className='w-full'>
                  <h2 className='text-sm text-slate-600'>Amount</h2>
                  <input
                    type='number'
                    className='w-full p-2 py-4 text-sm outline-none bg-slate-100 active:outline-none rounded-lg'
                  />
                </div>
                <div className='w-full'>
                  <h2 className='text-sm text-slate-600'>Days</h2>
                  <input
                    type='number'
                    className='w-full p-2 py-4 text-sm outline-none bg-slate-100 active:outline-none rounded-lg'
                  />
                </div>
              </div>
            )}

            <div className='col-span-2 flex gap-2 mt-2'>
              <input type='radio' />
              <p className='text-xs text-slate-600'>
                Yes, I understand and agree to the Dinehub terms of services,
                including the User Agreement and Privacy Policy .
              </p>
            </div>
            <div className='pt-2 flex items-center gap-2'>
              <ActionButton
                name='Back'
                styles='py-4'
                icon={<FaArrowLeft />}
                click={handlePrevious}
              />
              <ActionButton
                name='Add Loan'
                icon={<FaPlus />}
                styles='py-4 bg-green-700'
              />
            </div>
          </form>
        </div>
      )}
    </div>
  );
};

export default AddLoan;
