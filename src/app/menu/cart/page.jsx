"use client";
import CartItem from "@/components/Menu/Cart/cartitem";
import TotalCart from "@/components/Menu/Cart/totalcart";
import PayCard from "@/components/common/Main/Restaurant/paycard";

import Link from "next/link";
import React, { useState } from "react";
import { FiChevronRight } from "react-icons/fi";

const page = () => {
  return (
    <section className="w-screen pt-20 px-4 lg:px-12 pb-12">
      {/* Navigator  */}
      <div className="flex gap-1 md:gap-4 align-center mt-8 text-base md:text-lg">
        <Link href="/menu">
          <p>Menus</p>
        </Link>
        <FiChevronRight className="mt-1" />
        <p className="text-blue-500">Carts</p>
      </div>

      {/* Cart Table */}
      <div className="w-full p-1 rounded-lg mt-4 flex justify-start items-start">
        <div className="bg-blue-50/50 w-4/6 p-4 rounded-lg flex flex-col gap-2 items-start">
          <CartItem />
          <CartItem />
          <TotalCart />
        </div>
        <div className="w-2/6 pl-12">
          <PayCard />
        </div>
      </div>
    </section>
  );
};

export default page;
