"use client";
import Header from "@/components/common/Dashboard/admin/header";
import StatsContainer from "@/components/common/Dashboard/admin/statscontainer";
import Navs from "@/components/json/employee/navbar";
import Stats from "@/components/json/employee/stats";

const Page = () => {
  return (
    <div>
      <Header Navs={<Navs />} />
      <StatsContainer Stats={Stats} />
      <h2 className="mt-4">List of Client</h2>
    </div>
  );
};

export default Page;
