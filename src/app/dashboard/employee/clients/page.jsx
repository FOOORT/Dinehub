"use client";
import React, { useState } from "react";
import Header from "@/components/common/Dashboard/admin/header";
import StatsContainer from "@/components/common/Dashboard/admin/statscontainer";
import Navs from "@/components/json/employee/navbar";
import Stats from "@/components/json/employee/stats";
import TabNav from "./tabnav";
import Subscriber from "@/components/json/subscriber";

const Page = () => {
  const [selectedTr, setSelectedTr] = useState({});

  const handleRowClick = (index) => {
    setSelectedTr(index);
  };
  return (
    <div>
      <Header Navs={<Navs />} />
      <StatsContainer Stats={Stats} />
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
