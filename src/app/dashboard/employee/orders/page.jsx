"use client";
import React, { useState } from "react";
import Header from "@/components/common/Dashboard/admin/header";
import StatsContainer from "@/components/common/Dashboard/admin/statscontainer";
import Navs from "@/components/json/admin/navbar";
// import Stats from "@/components/json/employee/stats";
import TabNav from "./tabnav";
import Subscriber from "@/components/json/subscriber";
import OrderStats from "@/components/json/orderstats";

const Page = () => {
  const [selectedTr, setSelectedTr] = useState({});

  const handleRowClick = (index) => {
    setSelectedTr(index);
  };
  return (
    <div className="w-full flex flex-col gap-4 justify-start items-start">
      <Header Navs={<Navs />} />
      <StatsContainer Stats={OrderStats} />

      <TabNav
        Users={Subscriber}
        selectedTr={selectedTr}
        setSelectedTr={setSelectedTr}
        handleRowClick={handleRowClick}
      />
    </div>
  );
};

export default Page;
