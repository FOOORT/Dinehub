import React from "react";
import InventoryDashboard from "./inventorydashboard";
import LowQuantity from "./lowquantity";
import OrderSummary from "./ordersummary";
import ProductSummary from "./productsummary";
import PurchaseDashboard from "./purchasedashboard";
import SalesDashboard from "./salesdashboard";
import SalesPurchaseChart from "./salespurchasechart";
import TopSelling from "./topselling";

const StockContainer = () => {
  return (
    <div className="w-full rounded-lg mt-3">
      <div className="grid grid-cols-1 gap-4">
        <div className="flex gap-4">
          <div className="w-[60%]">
            <SalesDashboard />
          </div>
          <div className="w-[40%]">
            <InventoryDashboard />
          </div>
        </div>
        <div className="flex gap-4">
          <div className="w-[60%]">
            <PurchaseDashboard />
          </div>
          <div className="w-[40%]">
            <ProductSummary />
          </div>
        </div>
        <div className="flex gap-4">
          <div className="w-[60%]">
            <SalesPurchaseChart />
          </div>
          <div className="w-[40%]">
            <OrderSummary />
          </div>
        </div>
        <div className="flex gap-4">
          <div className="w-[60%]">
            <TopSelling />
          </div>
          <div className="w-[40%]">
            <LowQuantity />
          </div>
        </div>
      </div>
    </div>
  );
};

export default StockContainer;
