import React from "react";
import StockCard from "../stockcard";
import { FaMoneyBillAlt } from "react-icons/fa";
import { AiOutlineStock } from "react-icons/ai";
import { TbBrandCashapp } from "react-icons/tb";
import { BiSolidCoinStack } from "react-icons/bi";

const Sales = [
  {
    icon: <BiSolidCoinStack />,
    amount: "80,550",
    title: "Sales",
  },
  {
    icon: <TbBrandCashapp />,
    amount: "18,300",
    title: "Revenue",
  },
  {
    icon: <AiOutlineStock />,
    amount: "40,830",
    title: "Profit",
  },
  {
    icon: <FaMoneyBillAlt />,
    amount: "17,360",
    title: "Cost",
  },
];

const SalesDashboard = () => {
  return (
    <div className="bg-white w-full rounded-lg p-4">
      <h2 className="text-lg font-semibold mb-3">Sales Dashboard</h2>
      <div className="w-full grid grid-cols-4 gap-4">
        {Sales.map((data, index) => (
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

export default SalesDashboard;
