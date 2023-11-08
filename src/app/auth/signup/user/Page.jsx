"use client";
import Link from "next/link";
import React, { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { useRouter } from "next/navigation";

import { ToastContainer, toast } from "react-toastify";

import { useDispatch, useSelector } from "react-redux";
import { createUser } from "@/redux/slice/Auth/userSlice";

const Page = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const { loading, error } = useSelector((state) => state.createUser);

  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [gender, setGender] = useState("M");
  const [dob, setDob] = useState("20/10/2023");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [confirm_password, setConfirm_password] = useState("");

  const formData = {
    firstname,
    lastname,
    email,
    username,
    address,
    gender,
    dob,
    phone,
    role: "Client",
    password,
    confirm_password,
  };

  const handleCreateUser = (e) => {
    e.preventDefault();

    dispatch(createUser(formData))
      .then((response) => {
        console.log("response data: ", response);
        if (response.payload.success) {
          toast.success("Your account created");
          router.push("/auth/signup/verify");
        } else {
          toast.error("Failed to create an account");
        }
      })
      .catch((error) => {
        console.error("Error:", error);
        toast.error("An error occurred while creating an account");
      });

    error && console.log("You are encoutering following prbolem: ", error);
  };
  return (
    <div className="w-screen bg-white h-screen flex justify-center items-center">
      <ToastContainer />
      <div className="bg-gray-50 w-[90%] md:w-5/6 lg:w-4/6 xl:w-2/6 flex flex-col justify-center items-center p-4 py-8 rounded-lg border scale-90">
        <h1 className="text-xl font-semibold text-center py-3">
          Create account
        </h1>
        <form
          className="flex flex-col gap-4 p-4 w-full"
          onSubmit={handleCreateUser}
        >
          <div className="flex flex-col md:flex-row gap-2 w-full">
            <div className="flex flex-col gap-2 w-full">
              <label htmlFor="name">Firstname</label>
              <input
                type="text"
                placeholder="John"
                value={firstname}
                onChange={(e) => setFirstname(e.target.value)}
                className="border outline-none active:outline-none p-3 rounded-md"
              />
            </div>
            <div className="flex flex-col gap-2 w-full">
              <label htmlFor="pass">Lastname</label>
              <input
                type="text"
                placeholder="Doe"
                value={lastname}
                onChange={(e) => setLastname(e.target.value)}
                className="border outline-none active:outline-none p-3 rounded-md"
              />
            </div>
          </div>

          <div className="flex flex-col md:flex-row gap-2 w-full">
            <div className="flex flex-col gap-2 w-full">
              <label htmlFor="name">Email</label>
              <input
                type="email"
                placeholder="Johndoe@gmail.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="border outline-none active:outline-none p-3 rounded-md"
              />
            </div>
            <div className="flex flex-col gap-2 w-full">
              <label htmlFor="pass">Username</label>
              <input
                type="text"
                placeholder="@Johndoe"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="border outline-none active:outline-none p-3 rounded-md"
              />
            </div>
          </div>
          <div className="flex flex-col md:flex-row gap-2 w-full">
            <div className="flex flex-col gap-2 w-full">
              <label htmlFor="name">Gender</label>
              <input
                type="text"
                placeholder="Male"
                value={gender}
                onChange={(e) => setGender(e.target.value)}
                className="border outline-none active:outline-none p-3 rounded-md"
              />
            </div>
            <div className="flex flex-col gap-2 w-full">
              <label htmlFor="pass">Date of birth</label>
              <input
                type="date"
                placeholder="30/07/2022"
                value={dob}
                onChange={(e) => setDob(e.target.value)}
                className="border outline-none active:outline-none p-3 rounded-md"
              />
            </div>
          </div>
          <div className="flex flex-col md:flex-row gap-2 w-full">
            <div className="flex flex-col gap-2 w-full">
              <label htmlFor="name">Adress</label>
              <input
                type="text"
                placeholder="Kigali, Kacyiru"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                className="border outline-none active:outline-none p-3 rounded-md"
              />
            </div>
            <div className="flex flex-col gap-2 w-full">
              <label htmlFor="pass">Phone number</label>
              <input
                type="number"
                placeholder="078 880 8188"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="border outline-none active:outline-none p-3 rounded-md"
              />
            </div>
          </div>
          <div className="flex flex-col md:flex-row gap-2 w-full">
            <div className="flex flex-col gap-2 w-full">
              <label htmlFor="name">Password</label>
              <input
                type="password"
                placeholder="*******"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="border outline-none active:outline-none p-3 rounded-md"
              />
            </div>
            <div className="flex flex-col gap-2 w-full">
              <label htmlFor="pass">Confirm Password</label>
              <input
                type="password"
                placeholder="*******"
                value={confirm_password}
                onChange={(e) => setConfirm_password(e.target.value)}
                className="border outline-none active:outline-none p-3 rounded-md"
              />
            </div>
          </div>
          <button
            type="submit"
            className="bg-black text-white py-3 rounded-md cursor-pointer"
          >
            {loading ? "Creating Account ..." : "Create Account"}
          </button>
          {/* <button className="w-full">
            <input
              type="submit"
              value="Create Account"
              className="bg-black text-white py-3 rounded-md w-full cursor-pointer duration-100 active:scale-95"
            />
          </button> */}
        </form>
        <div className="w-full flex flex-col md:flex-row justify-start items-start md:justify-between md:items-center gap-2 p-4">
          <Link href="/signin">
            <p className="duration-300 scale-95 hover:scale-100 cursor-pointer text-md">
              Already have account
              <span className="text-blue-600 ml-2">Sign in</span> now
            </p>
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
