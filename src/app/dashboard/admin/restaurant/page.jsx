"use client";
import AdminLayout from "../adminlayout";
import Header from "@/components/common/Dashboard/admin/header";
import StatsContainer from "@/components/common/Dashboard/admin/statscontainer";
import TabNav from "./tabNav";
import Navs from "@/components/json/admin/navbar";
import Stats from "@/components/json/admin/stats";

const Page = () => {
  return (
    <AdminLayout>
      <div className="flex justify-between items-start">
        <div className="w-full px-3 pr-4">
          <Header Navs={<Navs />} />
          <StatsContainer Stats={Stats} />
          <TabNav />
        </div>
      </div>
    </AdminLayout>
  );
};

export default Page;
