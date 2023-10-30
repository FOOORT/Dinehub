"use client";
import ActionButton from "@/components/common/actionbutton";
import { FaHome, FaPlus } from "react-icons/fa";
import { GoContainer } from "react-icons/go";
import { IoMdStats } from "react-icons/io";
import { TfiStatsDown } from "react-icons/tfi";
import { GrDeliver } from "react-icons/gr";
import AddStock from "./addstock";
import { useState } from "react";

const FilterStockNav = ({ activeNav, setActiveNav }) => {
  const navItems = [
    { name: "Dashboard", icon: <FaHome />, key: "dashboard" },
    { name: "Inventory", icon: <GoContainer />, key: "inventory" },
    { name: "Low stock", icon: <TfiStatsDown />, key: "low" },
    { name: "Orders", icon: <GrDeliver />, key: "order" },
  ];

  const handleNavClick = (key) => {
    setActiveNav(key);
  };

  const [stockAdd, setStockAdd] = useState(false);

  return (
    <div className="w-full flex justify-between items-center">
      <nav className="flex justify-start items-center gap-2">
        {navItems.map((item) => (
          <ActionButton
            key={item.key}
            name={item.name}
            icon={item.icon}
            className={`flex-row-reverse py-3 ${
              activeNav === item.key
                ? ""
                : "py-3 bg-transparent !text-black !border-black hover:bg-black hover:!text-white duration-100 hover:scale-105"
            }`}
            click={() => handleNavClick(item.key)}
          />
        ))}
      </nav>

      <ActionButton
        name="Add Stock"
        icon={<FaPlus />}
        className="px-4 py-3"
        click={() => setStockAdd(true)}
      />
      {stockAdd && (
        <div className="w-screen h-screen fixed top-0 left-0 z-[1000] bg-black/30 backdrop-blur-sm flex justify-center items-center">
          <AddStock click={() => setStockAdd((prev) => !prev)} />
        </div>
      )}
    </div>
  );
};

export default FilterStockNav;
