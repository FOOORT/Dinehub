"use client";
import React, { useState } from "react";
import Link from "next/link";
import { FaChevronLeft } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

const BusinessInfo = ({
  setActive,
  businessName,
  setBusinessName,
  businessAddress,
  setBusinessAddress,
  businessPhone,
  setBusinessPhone,
  businessWhatsappNumber,
  setBusinessWhatsappNumber,
  businessCategory,
  setBusinessCategory,
  businessDescription,
  setBusinessDescription,
  onSubmit,
}) => {
  return (
    <div className="w-screen bg-white h-screen flex justify-center items-center">
      <div className="bg-gray-50 w-[90%] md:w-5/6 lg:w-4/6 xl:w-3/6 flex flex-col justify-center items-center p-4 py-8 rounded-lg border">
        <h1 className="text-xl font-semibold text-center py-2">
          About your business
        </h1>

        <form className="flex flex-col gap-4 p-4 w-full">
          <div className="flex flex-col md:flex-row gap-2 w-full">
            <div className="flex flex-col gap-2 w-full md:w-1/2">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                placeholder="John"
                value={businessName}
                onChange={(e) => setBusinessName(e.target.value)}
                className="border outline-none active:outline-none p-3 rounded-md"
              />
            </div>
            <div className="flex flex-col gap-2 w-full md:w-1/2">
              <label htmlFor="pass">Location</label>
              <input
                type="text"
                placeholder="Doe"
                value={businessAddress}
                onChange={(e) => setBusinessAddress(e.target.value)}
                className="border outline-none active:outline-none p-3 rounded-md"
              />
            </div>
          </div>
          <div className="flex flex-col md:flex-row gap-2 w-full">
            <div className="flex flex-col gap-2 w-full md:w-1/2">
              <label htmlFor="name">Phone number</label>
              <input
                type="text"
                placeholder="John"
                value={businessPhone}
                onChange={(e) => setBusinessPhone(e.target.value)}
                className="border outline-none active:outline-none p-3 rounded-md"
              />
            </div>
            <div className="flex flex-col gap-2 w-full md:w-1/2">
              <label htmlFor="pass">Whatsapp number</label>
              <input
                type="text"
                placeholder="Doe"
                value={businessWhatsappNumber}
                onChange={(e) => setBusinessWhatsappNumber(e.target.value)}
                className="border outline-none active:outline-none p-3 rounded-md"
              />
            </div>
          </div>
          <div className="flex flex-col gap-2 w-full">
            <label htmlFor="name">Category</label>
            <input
              type="text"
              placeholder="Restaurant"
              value={businessCategory}
              onChange={(e) => setBusinessCategory(e.target.value)}
              className="border outline-none active:outline-none p-3 rounded-md"
            />
          </div>
          <div className="flex flex-col gap-2 w-full">
            <label htmlFor="pass">Description</label>
            <textarea
              name=""
              id=""
              cols="30"
              rows="4"
              value={businessDescription}
              onChange={(e) => setBusinessDescription(e.target.value)}
              className="border outline-none active:outline-none p-3 rounded-md"
            >
              {businessDescription}
            </textarea>
          </div>
          <div className="flex w-full p-2 gap-2 items-center">
            <input type="radio" className="scale-110" />
            <p className="text-sm">
              Yes, I understand and agree to the Dinehub terms including the
              <Link href="agreement"> User Agreement </Link> and{" "}
              <Link href="privacyPolicy"> Privacy Policy</Link> .
            </p>
          </div>
          <div className="flex gap-3">
            <button
              className="p-3 px-4 rounded-full flex justify-center items-center border"
              onClick={(e) => {
                e.preventDefault();
                setActive(true);
              }}
            >
              <FaChevronLeft />
            </button>
            <button
              type="button"
              className="bg-black text-white py-3 rounded-md cursor-pointer w-full"
              onClick={onSubmit}
            >
              Create Account
            </button>
          </div>
        </form>
        <div className="w-full flex flex-col md:flex-row justify-start items-start md:justify-between md:items-center gap-2 p-4">
          <Link
            href="/auth/signin"
            className="duration-300 scale-95 hover:scale-100 cursor-pointer text-md"
          >
            Already have account
            <span className="text-blue-600 ml-2">Sign in</span> now
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

export default BusinessInfo;
