"use client";
import React, { useState } from "react";
import ManagerLayout from "../managerlayout";
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
    <ManagerLayout>
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
    </ManagerLayout>
  );
};

export default Page;
