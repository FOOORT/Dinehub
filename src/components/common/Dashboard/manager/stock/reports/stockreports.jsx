import React from "react";

const StockReports = () => {
  return (
    <div className="w-full gap-4 grid grid-cols-2">
      <div className="bg-white p-4 rounded-lg col-span-2 lg:col-span-1">
        <h2>Overview</h2>
      </div>
      <div className="bg-white p-4 rounded-lg col-span-2 lg:col-span-1">
        <h2>Best selling category</h2>
      </div>
      <div className="bg-white p-4 rounded-lg col-span-2">
        <h2>Profit & Revenue Chart</h2>
      </div>
      <div className="bg-white p-4 rounded-lg col-span-2">
        <h2>Best selling product</h2>
      </div>
    </div>
  );
};

export default StockReports;
