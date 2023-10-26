"use client";
import React, { useState } from "react";
import Image from "next/image";
import ActionButton from "@/components/common/actionbutton";
import { FaMinus, FaPlus, FaTimes } from "react-icons/fa";

const CartItem = () => {
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
    <div className="w-full p-4 rounded-lg flex gap-2 items-center justify-between">
      <Image
        src="/image/Plate/Image1.png"
        width={500}
        height={500}
        alt="Cart1"
        className=" w-16 h-16"
      />
      <div className="flex flex-col gap-2">
        <h1>Chicken Momo</h1>
        <p>#7492</p>
      </div>
      <div className="flex gap-1 items-center">
        <ActionButton
          icon={<FaMinus />}
          className="px-2 py-3 !rounded-full bg-slate-700"
          click={removeDish}
        />
        <input
          type="text"
          value={dishCount}
          onChange={(e) => setDishCount(e.target.value)}
          className="px-2 py-3 rounded-full text-center text-2xl w-28 outline-none active:outline-none"
        />
        <ActionButton
          icon={<FaPlus />}
          className="px-2 py-3 !rounded-full"
          click={addDish}
        />
      </div>
      <h2>{totalBill} rwf</h2>
      <FaTimes />
    </div>
  );
};

export default CartItem;
