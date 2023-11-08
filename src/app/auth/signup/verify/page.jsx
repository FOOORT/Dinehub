"use client";
import Link from "next/link";
// import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { ToastContainer, toast } from "react-toastify";
// import { useDispatch, useSelector } from "react-redux";
// import { loginUser } from "@/redux/slice/Auth/loginSlice";

const Page = () => {
  const [verficationn, setVerfication] = useState();
  return (
    <div className="w-screen bg-white h-screen flex justify-center items-center">
      <div className="bg-gray-50 w-[90%] md:w-5/6 lg:w-4/6 xl:w-2/6 flex flex-col justify-center items-center p-4 py-8 rounded-lg border">
        <ToastContainer />
        <h1 className="text-3xl font-semibold text-center">Verify</h1>
        <form className="flex flex-col gap-4 p-4 w-full">
          {/* <form className="flex flex-col gap-4 p-4 w-full" onSubmit={handleLogin}> */}
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
        {/* <div className="w-full flex flex-col md:flex-row justify-start items-start md:justify-between md:items-center gap-2 p-4">
          <Link href="/auth">
            <p className="duration-300 scale-95 hover:scale-100 cursor-pointer text-md">
              If you didn't get Verfication
              <span className="text-blue-600 ml-2">Sign up</span> now
            </p>
          </Link>
          <Link href="/forgot">
            <button className="px-8 rounded-md text-red-600 text-md font-medium duration-300 scale-95 hover:scale-100 cursor-pointer">
              Forgot Password
            </button>
          </Link>
        </div> */}
        {/* <div className="flex w-full bg-blue-500 p-1 rounded-lg justify-start items-center gap-4 text-white scale-95 hover:scale-100 duration-300 cursor-pointer">
          <span className="p-2 rounded-md bg-white">
            <FcGoogle className="text-xl" />
          </span>
          Continue with google
        </div> */}
      </div>
    </div>
  );
};

export default Page;
