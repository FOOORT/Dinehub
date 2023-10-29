import React from "react";
import ManagerLayout from "./managerlayout";
import Header from "@/components/common/Dashboard/admin/header";
import RightLayout from "@/components/common/Dashboard/admin/rightlayout";
import AdminChart from "@/components/common/Dashboard/admin/adminchart";

import StatsContainer from "@/components/common/Dashboard/admin/statscontainer";
import Stats from "@/components/json/admin/stats";
import Navs from "@/components/json/manager/navbar";

const page = () => {
  return (
    <ManagerLayout>
      <div className="flex justify-between items-start">
        <div className="w-full lg:w-[75%] xl:w-[80%] px-3">
          <Header Navs={Navs} />

          <StatsContainer Stats={Stats} />

          <AdminChart />
        </div>
        <div className="bg-white shadow-md shadow-slate-400 lg:w-[25%] xl:w-[20%] h-screen pl-1">
          <div className="lg:w-[20%]  xl:w-[16.5%] h-screen fixed">
            <RightLayout />
          </div>
        </div>
      </div>
    </ManagerLayout>
  );
};

export default page;
