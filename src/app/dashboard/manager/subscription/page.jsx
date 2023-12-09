'use client'
import React from "react";
import Header from "@/components/common/Dashboard/admin/header";
import Navs from "@/components/json/manager/navbar";

const page = () => {
  return (
      <div className="w-screen h-screen bg-red-100 flex justify-center items-center">
        <Header Navs={Navs} />
        Subscription
      </div>
  );
};

export default page;
