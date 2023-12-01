"use client";

import ActionButton from "@/components/common/actionbutton";
import React, { useState } from "react";
import { FaTimes, FaArrowRight, FaArrowLeft, FaPlus } from "react-icons/fa";

const AddEmployees = ({ closeModal }) => {
  const [step, setStep] = useState(1);
  const handleNext = () => {
    setStep(step + 1);
  };
  const handlePrevious = () => {
    setStep(step - 1);
  };

  const handleSubmit = () => closeModal();

  return (
    <div className='w-screen h-screen fixed left-0 top-0 z-[60] bg-black/50 backdrop-blur-sm flex justify-center items-center'>
      {step === 1 && (
        <div className='bg-white p-4 rounded-xl w-5/6 md:w-4/6 lg:w-3/6 xl:w-2/6 shadow-2xl shadow-slate-400'>
          <div className='w-full flex justify-between items-center'>
            <h1 className='text-lg font-semibold'>Add Employee</h1>
            <button
              className='bg-black text-white p-3 rounded-full'
              onClick={() => closeModal()}
            >
              <FaTimes className='text-lg' />
            </button>
          </div>
          <div className='mt-2 flex justify-start items-center gap-4 text-sm'>
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
            className='w-full p-1 grid grid-cols-2 mt-2 gap-2 lg:gap-4 rounded-xl'
          >
            <h1 className='col-span-2 text-bold mt-4'>Personal info</h1>
            <div className='col-span-1'>
              <h2 className='text-sm text-slate-600'>Full name</h2>

              <input
                type='text'
                placeholder='John Doe'
                className='w-full p-2 py-3 text-sm outline-none bg-slate-100 active:outline-none rounded-lg'
              />
            </div>
            <div className='col-span-1'>
              <h2 className='text-sm text-slate-600'>Username</h2>
              <input
                type='text'
                placeholder='@Johndoe'
                className='w-full p-2 py-3 text-sm outline-none bg-slate-100 active:outline-none rounded-lg'
              />
            </div>
            <div className='col-span-1'>
              <h2 className='text-sm text-slate-600'>Date Of Birth</h2>
              <input
                type='date'
                className='w-full p-2 py-3 text-sm outline-none bg-slate-100 active:outline-none rounded-lg'
              />
            </div>
            <div className='col-span-1'>
              <h2 className='text-sm text-slate-600'>Gender</h2>
              <select
                name=''
                id=''
                className='w-full p-2 py-3 text-sm outline-none bg-slate-100 active:outline-none rounded-lg'
              >
                <option value=''></option>
                <option value='m'>Male</option>
                <option value='f'>female</option>
              </select>
            </div>

            <h1 className='col-span-2 text-bold mt-4'>Contact info</h1>
            <div className='col-span-1'>
              <h2 className='text-sm text-slate-600'>Email</h2>
              <input
                type='email'
                placeholder='johndoe@gmail.com'
                className='w-full p-2 py-3 text-sm outline-none bg-slate-100 active:outline-none rounded-lg'
              />
            </div>
            <div className='col-span-1'>
              <h2 className='text-sm text-slate-600'>Phone</h2>
              <input
                type='number'
                placeholder='(+250) 788 888 888'
                className='w-full p-2 py-3 text-sm outline-none bg-slate-100 active:outline-none rounded-lg'
              />
            </div>

            <h1 className='col-span-2 text-bold mt-4'>Credential</h1>
            <div className='col-span-1'>
              <h2 className='text-sm text-slate-600'>Password</h2>
              <input
                type='password'
                placeholder='********'
                className='w-full p-2 py-3 text-sm outline-none bg-slate-100 active:outline-none rounded-lg'
              />
            </div>
            <div className='col-span-1'>
              <h2 className='text-sm text-slate-600'>Confirm Password</h2>
              <input
                type='password'
                placeholder='********'
                className='w-full p-2 py-3 text-sm outline-none bg-slate-100 active:outline-none rounded-lg'
              />
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
            <h1 className='col-span-2 text-bold mt-4'>Emergency info</h1>
            <div className='col-span-1'>
              <h2 className='text-sm text-slate-600'>Name</h2>
              <input
                type='text'
                placeholder='NGABO Joseph'
                className='w-full p-2 py-3 text-sm outline-none bg-slate-100 active:outline-none rounded-lg'
              />
            </div>
            <div className='col-span-1'>
              <h2 className='text-sm text-slate-600'>Contact</h2>
              <input
                type='number'
                placeholder='(+250) 788 888 888'
                className='w-full p-2 py-3 text-sm outline-none bg-slate-100 active:outline-none rounded-lg'
              />
            </div>
            <h1 className='col-span-2 text-bold mt-4'>Role</h1>
            <div className='col-span-1'>
              <h2 className='text-sm text-slate-600'>Title</h2>
              <input
                type='text'
                placeholder='Staff'
                className='w-full p-2 py-3 text-sm outline-none bg-slate-100 active:outline-none rounded-lg'
              />
            </div>
            <div className='col-span-1'>
              <h2 className='text-sm text-slate-600'>Category</h2>
              <select
                name=''
                id=''
                className='w-full p-2 py-3 text-sm outline-none bg-slate-100 active:outline-none rounded-lg'
              >
                <option value=''></option>
                <option value='m'>Canteen</option>
                <option value='f'>Restaurant</option>
              </select>
            </div>
            <div className='col-span-2'>
              <h2 className='text-sm text-slate-600'>Addition information</h2>
              <textarea
                name=''
                id=''
                cols='30'
                rows='10'
                className='w-full p-2 py-3 text-sm outline-none bg-slate-100 active:outline-none rounded-lg'
              ></textarea>
            </div>
            <div className='pt-2 flex items-center gap-2'>
              <ActionButton
                name='Back'
                icon={<FaArrowLeft />}
                click={handlePrevious}
              />
              <ActionButton name='Add Employee' icon={<FaPlus />} />
            </div>
          </form>
        </div>
      )}
    </div>
  );
};

export default AddEmployees;
