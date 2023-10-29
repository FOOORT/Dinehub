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
  const [stockAdd, setStockAdd] = useState(false);
  return (
    <div className="w-full flex justify-between items-center">
      <nav className="flex justify-start items-center gap-2">
        <ActionButton
          name="Dashboard"
          icon={<FaHome />}
          className={`flex-row-reverse py-3 ${
            activeNav === `dashboard`
              ? ""
              : "py-3 bg-transparent !text-black !border-black hover:bg-black hover:!text-white duration-100 hover:scale-105"
          }`}
          click={setActiveNav("dashboard")}
        />
        <ActionButton
          name="Inventory"
          icon={<GoContainer />}
          className={`flex-row-reverse py-3 ${
            activeNav === `inventory`
              ? ""
              : "py-3 bg-transparent !text-black !border-black hover:bg-black hover:!text-white duration-100 hover:scale-105"
          }`}
          click={setActiveNav("inventory")}
        />

        <ActionButton
          name="Low stock"
          icon={<TfiStatsDown />}
          className={`flex-row-reverse py-3 ${
            activeNav === `low`
              ? ""
              : "py-3 bg-transparent !text-black !border-black hover:bg-black hover:!text-white duration-100 hover:scale-105"
          }`}
          click={setActiveNav("low")}
        />
        <ActionButton
          name="Orders"
          icon={<GrDeliver />}
          className={`flex-row-reverse py-3 ${
            activeNav === `order`
              ? ""
              : "py-3 bg-transparent !text-black !border-black hover:bg-black hover:!text-white duration-100 hover:scale-105"
          }`}
          click={setActiveNav("order")}
        />
        <ActionButton
          name="Reports"
          icon={<IoMdStats />}
          className={`flex-row-reverse py-3 ${
            activeNav === `reports`
              ? ""
              : "py-3 bg-transparent !text-black !border-black hover:bg-black hover:!text-white duration-100 hover:scale-105"
          }`}
          click={setActiveNav("reports")}
        />
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
