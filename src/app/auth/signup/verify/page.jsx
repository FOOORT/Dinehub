"use client";
import Link from "next/link";
// import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { ToastContainer, toast } from "react-toastify";

const Page = () => {
  const [verficationn, setVerfication] = useState();
  return (
    <div className="w-screen bg-white h-screen flex justify-center items-center">
      <div className="bg-gray-50 w-[90%] md:w-5/6 lg:w-4/6 xl:w-2/6 flex flex-col justify-center items-center p-4 py-8 rounded-lg border">
        <ToastContainer />
        <h1 className="text-3xl font-semibold text-center">Verify</h1>
        <form className="flex flex-col gap-4 p-4 w-full">
          <div className="flex flex-col gap-2">
            <label htmlFor="name">Use number we sent to your email</label>
            <input
              type="number"
              placeholder="0  0  0  0  0"
              onChange={(e) => setVerfication(e.target.value)}
              value={verficationn}
              required
              className="border outline-none active:outline-none p-3 rounded-md tracking-widest"
            />
          </div>
          <Link href="/dashboard/user" className="w-full">
            <button
              type="submit"
              className="bg-black text-white py-3 rounded-md cursor-pointer w-full duration-100 active:scale-95"
            >
              Verify
            </button>
          </Link>
        </form>
      </div>
    </div>
  );
};

export default Page;
