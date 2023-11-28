"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import axios from "axios";

// user / verify;

const Page = () => {
  const [token, setToken] = useState();
  const router = useRouter();

  const handleVerifyUser = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.put(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/user/verify`,
        {
          token,
        }
      );

      console.log("response data: ", response.data);

      if (response.data.success) {
        toast.success(response.data.message);
        // Redirect to sigin in
        router.push("/auth/signin");
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      // Handle error
      console.error("Error:", error);
      toast.error(error);

      // Display error message to the user
    }
  };
  return (
    <div className="w-screen bg-white h-screen flex justify-center items-center">
      <div className="bg-gray-50 w-[90%] md:w-5/6 lg:w-4/6 xl:w-2/6 flex flex-col justify-center items-center p-4 py-8 rounded-lg border">
        <ToastContainer />
        <h1 className="text-3xl font-semibold text-center">Verify</h1>
        <form
          className="flex flex-col gap-4 p-4 w-full"
          onSubmit={handleVerifyUser}
        >
          <div className="flex flex-col gap-2">
            <label htmlFor="name">Use number we sent to your email</label>
            <input
              type="number"
              placeholder="0  0  0  0  0"
              onChange={(e) => setToken(e.target.value)}
              value={token}
              required
              className="border outline-none active:outline-none p-3 rounded-md tracking-widest"
            />
          </div>
          <Link href="/auth/forgot/reset" className="w-full">
            <button
              type="submit"
              className="bg-black text-white py-3 rounded-md cursor-pointer w-full"
            >
              Verify
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
