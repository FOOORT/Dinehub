import React from "react";
import StockCard from "../stockcard";
import { TbBrandCashapp } from "react-icons/tb";
import { BiSolidCoinStack } from "react-icons/bi";
const Inventory = [
  {
    icon: <BiSolidCoinStack />,
    amount: "80,550",
    title: "Quantity in Hand",
  },
  {
    icon: <TbBrandCashapp />,
    amount: "18,300",
    title: "To be recieved",
  },
];

const InventoryDashboard = () => {
  return (
    <div className="bg-white w-full rounded-lg p-4">
      <h2 className="text-lg font-semibold mb-3">Inventory Dashboard</h2>
      <div className="w-full grid grid-cols-2 gap-4">
        {Inventory.map((data, index) => (
          <StockCard
            key={index}
            icon={data.icon}
            amount={data.amount}
            title={data.title}
          />
        ))}
      </div>
    </div>
  );
};

export default InventoryDashboard;
