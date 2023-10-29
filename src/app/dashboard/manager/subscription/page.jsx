import React from "react";
import ManagerLayout from "../managerlayout";
import Header from "@/components/common/Dashboard/admin/header";
import Navs from "@/components/json/manager/navbar";

const page = () => {
  return (
    <ManagerLayout>
      <div className="w-screen h-screen bg-red-100 flex justify-center items-center">
        <Header Navs={Navs} />
        Subscription
      </div>
    </ManagerLayout>
  );
};

export default page;
