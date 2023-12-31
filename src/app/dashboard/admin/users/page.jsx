"use client";
import React, { useState } from "react";
import AdminLayout from "../adminlayout";
import Header from "@/components/common/Dashboard/admin/header";
import StatsContainer from "@/components/common/Dashboard/admin/statscontainer";
import TabNav from "./tabNav";
import RightDetails from "@/components/common/Dashboard/admin/rightDetails";
import Stats from "@/components/json/admin/stats";

import Users from "@/components/json/users";

const Page = () => {
  const [selectedTr, setSelectedTr] = useState({});

  const handleRowClick = (index) => {
    setSelectedTr(index);
  };

  return (
    <AdminLayout>
      <div className="flex justify-between items-start">
        <div className="w-full px-3 pr-4">
          <Header />
          <StatsContainer Stats={Stats} />
          <TabNav
            Users={Users}
            selectedTr={selectedTr}
            setSelectedTr={setSelectedTr}
            handleRowClick={handleRowClick}
          />
        </div>
      </div>
    </AdminLayout>
  );
};

export default Page;
