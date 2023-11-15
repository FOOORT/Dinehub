"use client";
import React, { useState } from "react";
import ManagerLayout from "../managerlayout";
import Header from "@/components/common/Dashboard/admin/header";
import StatsContainer from "@/components/common/Dashboard/admin/statscontainer";
import TabNav from "./tabNav";
// import RightDetails from "@/components/common/Dashboard/admin/rightDetails";
import Navs from "@/components/json/manager/navbar";
import Dishes from "@/components/json/menu";

const Page = () => {
  const [selectedTr, setSelectedTr] = useState({});

  const handleRowClick = (index) => {
    setSelectedTr(index);
  };

  return (
    <ManagerLayout>
      <div className="flex justify-between items-start">
        <div className="w-full px-3">
          <Header Navs={Navs} />
          <StatsContainer />
          <TabNav
            Dishes={Dishes}
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
