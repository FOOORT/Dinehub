import React from "react";
import StockCard from "../stockcard";

const PurchaseDashboard = () => {
  return (
    <div className="bg-white w-full rounded-lg p-4">
      <h2 className="text-lg font-semibold mb-3">Purchase Overview</h2>
      <div className="w-full grid grid-cols-4 gap-4">
        <StockCard />
        <StockCard />
        <StockCard />
        <StockCard />
      </div>
    </div>
  );
};

export default PurchaseDashboard;
