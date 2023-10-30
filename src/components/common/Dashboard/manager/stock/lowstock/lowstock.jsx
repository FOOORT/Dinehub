import TabNav from "@/app/dashboard/manager/stocks/tabnav";
import Users from "@/components/json/users";
import React from "react";

const LowStock = () => {
  return (
    <div className="w-full">
      <h2 className="font-medium my-2">Low stock</h2>
      <TabNav Users={Users} />
    </div>
  );
};

export default LowStock;
