'use client'
import React from "react";

import Navs from "@/components/json/manager/navbar";
import Header from "@/components/common/Dashboard/admin/header";

const page = () => {
  return (
      <div className=" h-screen bg-red-100 flex justify-center items-center">
        <Header Navs={Navs} />
        Message
      </div>
  );
};

export default page;
