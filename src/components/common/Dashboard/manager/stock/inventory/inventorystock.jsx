"use client";
import TabNav from "@/app/dashboard/manager/stocks/tabnav";
import ActionButton from "@/components/common/actionbutton";
import ReportCard from "@/components/common/reportcard";
import Users from "@/components/json/users";
import React from "react";
import { BsFilterLeft } from "react-icons/bs";

const ReportsWrapper = [
  {
    title: "Category",
    count: "14",
    amount: "35,000",
  },
  {
    title: "Total product",
    count: "14",
    amount: "35,000",
  },
  {
    title: "Top sellings",
    count: "14",
    amount: "35,000",
  },
  {
    title: "Low stock",
    count: "14",
    amount: "35,000",
  },
];

const InventoryStock = () => {
  return (
    <div className="w-full rounded-xl flex flex-col gap-4">
      <div className="bg-white w-full p-4 rounded-lg flex flex-col gap-2">
        <h1 className=" font-medium">Overall inventory</h1>
        <div className="w-full bg-white rounded-lg grid grid-cols-2 lg:grid-cols-4 gap-2 md:gap-4 lg:gap-2 xl:gap-4">
          <ReportCard />
          <ReportCard />
          <ReportCard />
          <ReportCard />
        </div>
      </div>

      <div className="w-full rounded-lg">
        <div className="flex w-full items-center justify-between">
          <h1 className=" font-medium">Product in stock</h1>
          <ActionButton
            name="Filter"
            icon={<BsFilterLeft />}
            className=" flex-row-reverse bg-white !text-slate-700 border border-slate-200 px-6 py-3"
          />
        </div>
        <TabNav
          Users={Users}
          // selectedTr={selectedTr}
          // setSelectedTr={setSelectedTr}
          // handleRowClick={handleRowClick}
        />
      </div>
    </div>
  );
};

export default InventoryStock;
