"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { ToastContainer, toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "@/redux/slice/Auth/loginSlice";

const Page = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const { loading, error } = useSelector((state) => state.auth);

  // redirect by user's role
  const redirectToDashboard = (userRole) => {
    if (userRole === "Admin") {
      router.push("/dashboard/admin/");
    } else if (userRole === "Employee") {
      router.push("//dashboard/employee/");
    } else if (userRole === "Manager") {
      router.push("//dashboard/manager/");
    } else if (userRole === "User") {
      router.push("/dashboard/user");
    } else {
      router.push("/auth/signin");
    }
  };

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const formData = {
    email,
    password,
  };

  const handleLogin = (e) => {
    e.preventDefault();
    dispatch(loginUser(formData))
      .then((response) => {
        // console.log("responsedd", response);
        if (response.payload.success) {
          // toast.success("Login successfully");
          redirectToDashboard(response.payload.user.role);
        } else {
          toast.error(response.payload.message);
        }
      })
      .catch((error) => {
        console.log(error);
      });
    error && console.log("You are encoutering following prbolem: ", error);
  };

  return (
    <div className="w-screen bg-white h-screen flex justify-center items-center">
      <div className="bg-gray-50 w-[90%] md:w-5/6 lg:w-4/6 xl:w-2/6 flex flex-col justify-center items-center p-4 py-8 rounded-lg border">
        <ToastContainer />
        <h1 className="text-3xl font-semibold text-center">Sign in</h1>
        <form className="flex flex-col gap-4 p-4 w-full" onSubmit={handleLogin}>
          <div className="flex flex-col gap-2">
            <label htmlFor="name">Username or email</label>
            <input
              type="email"
              placeholder="Johndoe@gmail.com"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              required
              className="border outline-none active:outline-none p-3 rounded-md"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="pass">Password</label>
            <input
              type="password"
              placeholder="*******"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              required
              className="border outline-none active:outline-none p-3 rounded-md"
            />
          </div>
          <button
            type="submit"
            // value="Sign in"
            className="bg-black text-white py-3 rounded-md cursor-pointer"
          >
            {loading ? "Logging in..." : "Log In"}
          </button>
        </form>
        <div className="w-full flex flex-col md:flex-row justify-start items-start md:justify-between md:items-center gap-2 p-4">
          <Link href="/auth">
            <p className="duration-300 scale-95 hover:scale-100 cursor-pointer text-md">
              If you dont have account
              <span className="text-blue-600 ml-2">Sign up</span> now
            </p>
          </Link>
          <Link href="/forgot">
            <button className="px-8 rounded-md text-red-600 text-md font-medium duration-300 scale-95 hover:scale-100 cursor-pointer">
              Forgot Password
            </button>
          </Link>
        </div>
        <div className="flex w-full bg-blue-500 p-1 rounded-lg justify-start items-center gap-4 text-white scale-95 hover:scale-100 duration-300 cursor-pointer">
          <span className="p-2 rounded-md bg-white">
            <FcGoogle className="text-xl" />
          </span>
          Continue with google
        </div>
      </div>
    </div>
  );
};

export default Page;
