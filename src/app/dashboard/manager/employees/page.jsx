"use client";
import React, { useState } from "react";
import ManagerLayout from "../managerlayout";
import Navs from "@/components/json/manager/navbar";
import Header from "@/components/common/Dashboard/admin/header";
import StatsContainer from "@/components/common/Dashboard/admin/statscontainer";
import UserStats from "@/components/json/manager/userStats";
import TabNav from "../tabNav";
import RightDetails from "@/components/common/Dashboard/admin/rightDetails";
import Users from "@/components/json/users";

const Page = () => {
  const [selectedTr, setSelectedTr] = useState(0);

  const handleRowClick = (index) => {
    setSelectedTr(index);
  };
  return (
    <ManagerLayout>
      <div className="flex justify-between items-start">
        <div className="w-full lg:w-[75%] xl:w-[80%] px-3">
          <Header Navs={Navs} />
          <StatsContainer Stats={UserStats} />
          <TabNav
            Users={Users}
            selectedTr={selectedTr}
            setSelectedTr={setSelectedTr}
            handleRowClick={handleRowClick}
          />
        </div>
        <div className="lg:w-[25%] xl:w-[20%] h-screen pl-1 bg-fixed bg-white">
          <div className="lg:w-[20%]  xl:w-[16.5%] h-screen fixed bg-white ">
            <RightDetails
              selectedTr={selectedTr}
              setSelectedTr={setSelectedTr}
              item={selectedTr !== null ? Users[selectedTr] : null}
            />
          </div>
        </div>
      </div>
    </ManagerLayout>
  );
};

export default Page;
