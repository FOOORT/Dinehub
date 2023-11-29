"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { BsHeart } from "react-icons/bs";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import ActionButton from "@/components/common/actionbutton";
import { FaCartPlus, FaPlus } from "react-icons/fa";

const Page = () => {
  const [dishCount, setDishCount] = useState(1);
  const [totalBill, setTotalBill] = useState(dishCount * 2000);

  const addDish = () => {
    setDishCount((prev) => prev + 1);
    const newTotal = (dishCount + 1) * 2000;
    setTotalBill(newTotal);
    console.log("added");
  };

  const removeDish = () => {
    if (dishCount > 1) {
      setDishCount((prev) => prev - 1);
      const newTotal = (dishCount - 1) * 2000;
      setTotalBill(newTotal);
      console.log("removed");
    }
  };

  return (
    <section className="w-screen pt-20 px-4 lg:px-12 pb-12">
      <div className="flex gap-1 md:gap-4 align-center mt-8 text-base md:text-lg">
        <Link href="/menu">
          <p>Menus</p>
        </Link>
        <FiChevronRight className="mt-1" />
        <p className="text-blue-500">spicy Seasoned seafood Noodels</p>
      </div>
      <div className="flex flex-col md:flex-row w-full p-0 md:p-6 mt-4 md:mt-8 gap-12 items-center">
        <Image
          layout="responsive"
          src="/image/Plate/Image1.png"
          alt="image 1"
          height={500}
          width={500}
          className="shadow-lg shadow-slate-300 p-1 rounded-full w-4/6 md:w-2/6"
        />
        <div className="bg-blue-50/50 w-full md:w-4/6 p-4 rounded-2xl flex flex-col justify-start items-start">
          <div className="flex items-center justify-between text-lg w-full">
            <div className="flex items-center gap-2">
              <Link
                href="/menu"
                className="active:bg-black active:text-white p-2 duration-150 active:rounded-full active:scale-95 flex justify-center items-center"
              >
                <FiChevronLeft className="mt-0" />
              </Link>
              <p className="text-xl font-medium ">
                spicy Seasoned seafood Noodels
              </p>
            </div>
            <button className="bg-black text-white rounded-full p-3 text-xs">
              <BsHeart />
            </button>
          </div>
          <div className="flex justify-between items-center w-full">
            <div className="flex gap-6">
              <div className="flex flex-col gap-[1px] bg-black rounded-full p-1 text-lg mt-4">
                <button
                  className="bg-black text-white flex justify-center items-center p-4 rounded-full border border-white duration-150 active:scale-95"
                  onClick={addDish}
                >
                  <AiOutlinePlus />
                </button>
                <button
                  className="bg-black text-white flex justify-center items-center p-4 rounded-full duration-150 active:scale-95"
                  onClick={removeDish}
                >
                  <AiOutlineMinus />
                </button>
              </div>

              <div className="flex flex-col gap-5 mt-4">
                <h2 className="text-4xl flex items-center gap-2">
                  {dishCount} <p className="text-lg mt-2">Item</p>
                </h2>

                <h2 className="text-xl flex items-center gap-2">
                  2000 <p className="text-lg">rwf</p>
                </h2>
              </div>
            </div>
            <h2 className="text-4xl flex items-center gap-2">
              {totalBill} <p className="text-lg">rwf</p>
            </h2>
          </div>

          <div className="flex flex-col gap-2 items-start justify-start w-full mt-8">
            <h3 className="text-cl font-semibold">Description</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
              tincidunt molestie auctor. Donec molestie malesuada augue quis
              semper. In hac habitasse platea dictumst. Morbi pulvinar faucibus
              sem, sed pharetra mi. Nullam molestie diam sit amet dapibus
              aliquam. Suspendisse est elit, imperdiet ut ornare eget, dignissim
              feugiat velit. Pellentesque sit amet porta erat.
            </p>
          </div>

          <div className="flex gap-2 w-full items-start justify-start mt-5">
            <ActionButton
              name="Order now"
              icon={<FaPlus />}
              className="!rounded-full px-6 py-4"
            />
            <ActionButton
              icon={<FaCartPlus />}
              className="!rounded-full !p-4"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Page;
