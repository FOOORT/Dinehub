"use client";
import React, { useState } from "react";
import Navs from "@/components/json/manager/navbar";
import Header from "@/components/common/Dashboard/admin/header";
import StatsContainer from "@/components/common/Dashboard/admin/statscontainer";
import UserStats from "@/components/json/manager/userStats";
import TabNav from "./tabNav";
import Users from "@/components/json/users";

const Page = () => {
  const [selectedTr, setSelectedTr] = useState(0);

  const handleRowClick = (index) => {
    setSelectedTr(index);
  };
  return (
      <div className="flex justify-between items-start">
        <div className="w-full px-3">
          <Header Navs={Navs} />
          <StatsContainer Stats={UserStats} />
          <TabNav
            Users={Users}
            selectedTr={selectedTr}
            setSelectedTr={setSelectedTr}
            handleRowClick={handleRowClick}
          />
        </div>
      </div>
  );
};

export default Page;
