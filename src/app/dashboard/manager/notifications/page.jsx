'use client'
import React from "react";
import ManagerLayout from "../layout";
import Navs from "@/components/json/manager/navbar";
import Header from "@/components/common/Dashboard/admin/header";

const page = () => {
  return (
    <ManagerLayout>
      <div className="h-screen bg-red-100 flex justify-center items-center">
        <Header Navs={Navs} />
        Notification
      </div>
    </ManagerLayout>
  );
};

export default page;
