'use client'
import React from "react";
import ManagerLayout from "../managerlayout";

import Navs from "@/components/json/manager/navbar";
import Header from "@/components/common/Dashboard/admin/header";

const page = () => {
  return (
    <ManagerLayout>
      <div className=" h-screen bg-red-100 flex justify-center items-center">
        <Header Navs={Navs} />
        Message
      </div>
    </ManagerLayout>
  );
};

export default page;
