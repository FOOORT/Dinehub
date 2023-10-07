import React from "react";
import StockCard from "../stockcard";

const InventoryDashboard = () => {
  return (
    <div className="bg-white w-full rounded-lg p-4">
      <h2 className="text-lg font-semibold mb-3">Inventory Dashboard</h2>
      <div className="w-full grid grid-cols-2 gap-4">
        <StockCard />
        <StockCard />
      </div>
    </div>
  );
};

export default InventoryDashboard;
