"use client";
import AdminLayout from "../layout";
import Header from "@/components/common/Dashboard/admin/header";
import StatsContainer from "@/components/common/Dashboard/admin/statscontainer";
import Navs from "@/components/json/admin/navbar";
import Stats from "@/components/json/admin/stats";
import RestaurantWrapper from "./RestaurantWrapper";

const Page = () => {
  return (
      <div className="flex justify-between items-start">
        <div className="w-full px-3 pr-4">
          <Header Navs={<Navs />} />
          <StatsContainer Stats={Stats} />
          <RestaurantWrapper/>
        </div>
      </div>
  );
};

export default Page;
