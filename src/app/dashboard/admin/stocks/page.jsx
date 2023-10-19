import React from "react";
import AdminLayout from "../adminlayout";
import Header from "@/components/common/Dashboard/admin/header";
import StatsContainer from "@/components/common/Dashboard/admin/statscontainer";
import RightLayout from "@/components/common/Dashboard/admin/rightlayout";
import StockContainer from "@/components/common/Dashboard/admin/stock/stockcontainer";

const page = () => {
  return (
    <AdminLayout>
      <div className="flex justify-between items-start">
        <div className="w-full lg:w-[75%] xl:w-[80%] px-3">
          <Header />
          <StatsContainer />
          <h2 className="text-xl font-bold mt-5">Stocks Report</h2>
          <StockContainer />
        </div>
        <div className="bg-white shadow-md shadow-slate-400 lg:w-[25%] xl:w-[20%] h-screen pl-1">
          <div className="lg:w-[20%]  xl:w-[16.5%] h-screen fixed">
            <RightLayout />
          </div>
        </div>
      </div>
    </AdminLayout>
  );
};

export default page;
