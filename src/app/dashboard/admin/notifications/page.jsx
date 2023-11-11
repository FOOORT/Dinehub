"use client";
import React from "react";
import AdminLayout from "../adminlayout";
import Header from "@/components/common/Dashboard/admin/header";
import RightLayout from "@/components/common/Dashboard/admin/rightlayout";
import NotifyFilters from "@/components/common/Dashboard/admin/notifications/notifyfilters";
import Notifyitem from "@/components/common/Dashboard/admin/notifications/notifyitem";

const page = () => {
  return (
    <AdminLayout>
      <div className="flex justify-between items-start">
        <div className="w-full lg:w-[75%] xl:w-[80%] px-3">
          <Header />
          <div className="flex w-full rounded-md mt-4 gap-4 p-1">
            <div className="w-3/12 bg-white p-2 rounded-lg">
              <NotifyFilters />
            </div>
            <div className="w-9/12 bg-white p-4 rounded-lg flex flex-col gap-2">
              <Notifyitem />
              <Notifyitem />
              <Notifyitem />
              <Notifyitem />
              <Notifyitem />
              <Notifyitem />
              <Notifyitem />
              <Notifyitem />
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
