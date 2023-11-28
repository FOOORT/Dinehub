"use client";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { ToastContainer, toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "@/redux/slice/Auth/loginSlice";
import axios from "axios";

const Page = () => {
  const [email, setEmail] = useState("");

  const handleForgot = () => {
    console.log("Handlerecovery");
  };

  return (
    <div className="w-screen bg-white h-screen flex justify-center items-center">
      <div className="bg-gray-50 w-[90%] md:w-5/6 lg:w-4/6 xl:w-2/6 flex flex-col justify-center items-center p-4 py-8 rounded-lg border">
        <ToastContainer />
        <h1 className="text-3xl font-semibold text-center">Recover Password</h1>
        <form
          className="flex flex-col gap-4 p-4 w-full"
          onSubmit={handleForgot}
        >
          <div className="flex flex-col gap-2">
            <label htmlFor="name">Your email</label>
            <input
              type="email"
              placeholder="Johndoe@gmail.com"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              required
              className="border outline-none active:outline-none p-3 rounded-md"
            />
          </div>
          <Link href="/auth/forgot/verification" className="w-full">
            <button
              type="submit"
              className="bg-black text-white py-3 rounded-md cursor-pointer w-full"
            >
              Send code
            </button>
          </Link>
        </form>
        <div className="w-full flex flex-col md:flex-row justify-start items-start md:justify-between md:items-center gap-2 p-4">
          <Link href="/auth/signin">
            <p className="duration-300 scale-95 hover:scale-100 cursor-pointer text-md">
              Back to
              <span className="text-blue-600 ml-2">Sign in</span>
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Page;
