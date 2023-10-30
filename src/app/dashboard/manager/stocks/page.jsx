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

const Page = () => {
  const [activeNav, setActiveNav] = useState("dashboard");

  // Define activeNav values to their respective components
  const componentMap = {
    dashboard: StockHome,
    inventory: InventoryStock,
    low: LowStock,
    order: StockOrders,
  };

  // Use the mapping to determine the content component
  const ContentComponent = componentMap[activeNav] || StockHome;
  return (
    <ManagerLayout>
      <div className="w-full h-screen  flex flex-col justify-start items-start gap-4">
        <Header Navs={Navs} />
        <FilterStockNav activeNav={activeNav} setActiveNav={setActiveNav} />
        <ContentComponent />
      </div>
    </ManagerLayout>
  );
};

export default Page;
