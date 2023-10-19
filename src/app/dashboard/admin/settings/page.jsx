import React from "react";
import AdminLayout from "../adminlayout";
import Header from "@/components/common/Dashboard/admin/header";
import RightLayout from "@/components/common/Dashboard/admin/rightlayout";
import Image from "next/image";
import Controll from "@/components/common/Dashboard/admin/settings/controll";

const page = () => {
  return (
    <AdminLayout>
      <div className="flex justify-between items-start">
        <div className="w-full lg:w-[75%] xl:w-[80%] px-3">
          <Header />
          <div className="grid grid-cols-2 w-full rounded-md mt-4 gap-4">
            <div className="bg-white p-4 rounded-md">
              <div className="bg-blue-400 w-full h-48 rounded-md"></div>
              <div className="flex w-full h-1 justify-center items-center">
                <Image
                  src="/image/10.jpg"
                  alt="banner"
                  width={100}
                  height={50}
                  className="rounded-full"
                />

                <h1>Reconfort Daniel</h1>
                <p>Dinehub Adminstartor</p>
              </div>
            </div>
            <div className="bg-white p-4 rounded-md">
              <Controll />
            </div>
          </div>
        </div>
        <div className="bg-white shadow-md shadow-slate-400 lg:w-[25%] xl:w-[20%] h-screen pl-1">
          <div className="lg:w-[20%]  xl:w-[16.5%] h-screen fixed">
            <RightLayout />
          </div>
        </div>
      </div>
    </AdminLayout>
  );
};

export default page;
