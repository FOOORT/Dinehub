"use client";
import ActionButton from "@/components/common/actionbutton";
import Link from "next/link";
import React, { useState } from "react";
import { BsArrowUpRight } from "react-icons/bs";
import { FiChevronLeft } from "react-icons/fi";

const TotalCart = () => {
  return (
    <div className="bg-white shadow-lg shadow-slate-100 p-1 flex w-full justify-between rounded-full">
      <div className="flex items-center gap-2">
        <Link
          href="/menu"
          className="active:bg-black active:text-white p-2 duration-150 active:rounded-full active:scale-95 flex justify-center items-center"
        >
          <FiChevronLeft className="mt-0" />
        </Link>
        <p>Continue shopping</p>
      </div>

      <div className="flex items-center gap-2">
        <p>Subtotal</p>
        <h3>50,000 rwf</h3>
      </div>

      <ActionButton
        name="Confirm Payment"
        icon={<BsArrowUpRight />}
        className="px-4 py-3 !rounded-full"
      />
    </div>
  );
};

export default TotalCart;
