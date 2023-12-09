"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
// import { useRouter, useSearchParams } from "next/navigation";
// import { FcGoogle } from "react-icons/fc";
import { ToastContainer, toast } from "react-toastify";
// import { useDispatch, useSelector } from "react-redux";
// import axios from "axios";

const Page = () => {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  return (
    <div className="w-screen bg-white h-screen flex justify-center items-center">
      <div className="bg-gray-50 w-[90%] md:w-5/6 lg:w-4/6 xl:w-2/6 flex flex-col justify-center items-center p-4 py-8 rounded-lg border">
        <ToastContainer />
        <h1 className="text-3xl font-semibold text-center">Reset password</h1>
        <form className="flex flex-col gap-4 p-4 w-full">
          <div className="flex flex-col gap-2">
            <label htmlFor="pass">New password</label>
            <input
              type="password"
              placeholder="*******"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              required
              className="border outline-none active:outline-none p-3 rounded-md"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="pass">Confirm Password</label>
            <input
              type="password"
              placeholder="*******"
              onChange={(e) => setConfirmPassword(e.target.value)}
              value={confirmPassword}
              required
              className="border outline-none active:outline-none p-3 rounded-md"
            />
          </div>
          <Link href="/auth/signin" className="w-full">
            <button
              type="submit"
              className="bg-black text-white py-3 rounded-md cursor-pointer w-full"
            >
              Reset password
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
