import React from "react";
import ManagerLayout from "../managerlayout";
import Header from "@/components/common/Dashboard/admin/header";
import Navs from "@/components/json/manager/navbar";

const page = () => {
  return (
    <ManagerLayout>
      <div className="w-full h-screen bg-red-100 flex justify-start items-start">
        <Header Navs={Navs} />
      </div>
    </ManagerLayout>
  );
};

export default page;
