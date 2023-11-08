import AdminChart from "@/components/common/Dashboard/admin/adminchart";
import Header from "@/components/common/Dashboard/admin/header";
import StatsContainer from "@/components/common/Dashboard/admin/statscontainer";
import Navs from "@/components/json/admin/navbar";
import Stats from "@/components/json/employee/stats";
import React from "react";

const Page = () => {
  return (
    <div className="w-full flex flex-col gap-4 justify-start items-start">
      <Header Navs={<Navs />} />
      <StatsContainer Stats={Stats} />
      <AdminChart />
    </div>
  );
};

export default Page;
