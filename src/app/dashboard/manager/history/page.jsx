'use client'
import React from "react";
import ManagerLayout from "../layout";
import Header from "@/components/common/Dashboard/admin/header";
import Navs from "@/components/json/manager/navbar";

const page = () => {
  return (
      <div className="w-full h-screen bg-red-100 flex justify-start items-start">
        <Header Navs={Navs} />
      </div>
  );
};

export default page;
