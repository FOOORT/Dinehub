"use client";
import React from "react";
import AdminLayout from "../layout";
import Header from "@/components/common/Dashboard/admin/header";
import RightLayout from "@/components/common/Dashboard/admin/rightlayout";
import Image from "next/image";
import Controll from "@/components/common/Dashboard/admin/settings/controll";
import { FaEdit, FaTrash } from "react-icons/fa";

const page = () => {
  return (
      <div className="flex justify-between items-start pr-2">
        <div className="w-full px-3">
          <Header />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2 w-full rounded-md mt-4 gap-4">
            <div className="bg-white p-2 rounded-md flex flex-col ">
              <div className="bg-slate-200 w-full h-48 rounded-md"></div>
              <div className="flex w-full h-1 justify-center items-center">
                <Image
                  layout="responsive"
                  src="/image/10.jpg"
                  alt="banner"
                  width={100}
                  height={50}
                  className="rounded-full border-4 border-white"
                />
              </div>
              <div className="flex flex-col w-full p-4 mt-14 gap-2 items-center">
                <h1 className="font-bold">Reconfort Daniel</h1>
                <p className="text-sm">Dinehub Adminstartor</p>
                <div className="flex gap-4 items-center border p-4 px-8 rounded-md text-black">
                  <FaEdit />
                  <FaTrash />
                </div>
              </div>
            </div>
            <div className="bg-white p-4 rounded-md">
              <Controll />
            </div>
          </div>
        </div>
      </div>
  );
};

export default page;
