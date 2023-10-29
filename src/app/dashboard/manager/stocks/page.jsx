"use client";
import React, { useState } from "react";
import ManagerLayout from "../managerlayout";
import Navs from "@/components/json/manager/navbar";
import Header from "@/components/common/Dashboard/admin/header";
import FilterStockNav from "@/components/common/Dashboard/manager/stock/filterNav";
import StockHome from "@/components/common/Dashboard/manager/stock/home/stockhome";
import InventoryStock from "@/components/common/Dashboard/manager/stock/inventory/inventorystock";
import LowStock from "@/components/common/Dashboard/manager/stock/lowstock/lowstock";
import StockOrders from "@/components/common/Dashboard/manager/stock/orders/stockorders";
import StockReports from "@/components/common/Dashboard/manager/stock/reports/stockreports";

const page = () => {
  const [activeNav, setActiveNav] = useState("dashboard");

  let content;
  if (activeNav === "dashboard") {
    content = <StockHome />;
  } else if (activeNav === "inventory") {
    content = <InventoryStock />;
  } else if (activeNav === "low") {
    content = <LowStock />;
  } else if (activeNav === "order") {
    content = <StockOrders />;
  } else {
    content = <StockReports />;
  }

  return (
    <ManagerLayout>
      <div className="w-full h-screen  flex flex-col justify-start items-start gap-4">
        <Header Navs={Navs} />
        <FilterStockNav activeNav={activeNav} setActiveNav={setActiveNav} />
        {content}
      </div>
    </ManagerLayout>
  );
};

export default page;
