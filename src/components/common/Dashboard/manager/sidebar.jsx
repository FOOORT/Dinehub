"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";
import { AiOutlineShop, AiOutlineStock } from "react-icons/ai";
import { BiHistory } from "react-icons/bi";
import { FiMessageSquare, FiSettings, FiUsers } from "react-icons/fi";
import { GoBell } from "react-icons/go";
import { MdOutlineMenuBook, MdSpaceDashboard } from "react-icons/md";

const Sidebar = () => {
  const currentPage = usePathname();
  const activeTab = currentPage.split("/manager/")[1];

  return (
    <div className="pl-4 py-8 flex flex-col gap-4 bg-white w-full">
      <Link href="/">
        <Image
          layout="responsive"
          src="/image/DashLogo.png"
          alt="DashboradLogo"
          height={100}
          width={100}
          layout="responsive"
        />
      </Link>
      <ol className="flex flex-col gap-4">
        <ul className="text-slate-500">
          <h1 className="font-bold text-black">Menu</h1>
          <Link
            href="/dashboard/manager/"
            className={`flex gap-2 items-center pl-2 text-xs mt-1 py-3 px-4 hover:bg-black hover:text-white rounded-md duration-300 cursor-pointer ${
              activeTab === null ? "bg-black text-white" : ""
            }`}
          >
            <MdSpaceDashboard />
            <span>Dashboard Manager</span>
          </Link>
          <Link
            href="/dashboard/manager/users"
            className={`flex gap-2 items-center pl-2 text-xs mt-1 py-3 px-4 hover:bg-black hover:text-white rounded-md duration-300 cursor-pointer ${
              activeTab === "users" ? "bg-black text-white" : ""
            }`}
          >
            <FiUsers />
            <span>Users</span>
          </Link>
          <Link
            href="/dashboard/manager/menus"
            className={`flex gap-2 items-center pl-2 text-xs mt-1 py-3 px-4 hover:bg-black hover:text-white rounded-md duration-300 cursor-pointer ${
              activeTab === "menus" ? "bg-black text-white" : ""
            }`}
          >
            <MdOutlineMenuBook />
            <span>Menus</span>
          </Link>
        </ul>
        <ul className="text-slate-500">
          <h1 className="font-bold text-black">Reports</h1>
          <Link
            href="/dashboard/manager/history"
            className={`flex gap-2 items-center pl-2 text-xs mt-1 py-3 px-4 hover:bg-black hover:text-white rounded-md duration-300 cursor-pointer ${
              activeTab === "history" ? "bg-black text-white" : ""
            }`}
          >
            <BiHistory />
            <span>History</span>
          </Link>
        </ul>
        <ul className="text-slate-500">
          <h1 className="font-bold text-black">Stock</h1>
          <Link
            href="/dashboard/manager/stocks"
            className={`flex gap-2 items-center pl-2 text-xs mt-1 py-3 px-4 hover:bg-black hover:text-white rounded-md duration-300 cursor-pointer ${
              activeTab === "stocks" ? "bg-black text-white" : ""
            }`}
          >
            <AiOutlineStock />
            <span>Stocks</span>
          </Link>
        </ul>
        <ul className="text-slate-500">
          <h1 className="font-bold text-black">Messages</h1>
          <Link
            href="/dashboard/manager/message"
            className={`flex gap-2 items-center pl-2 text-xs mt-1 py-3 px-4 hover:bg-black hover:text-white rounded-md duration-300 cursor-pointer ${
              activeTab === "message" ? "bg-black text-white" : ""
            }`}
          >
            <FiMessageSquare />
            <span>Messages</span>
          </Link>
          <Link
            href="/dashboard/manager/notifications"
            className={`flex gap-2 items-center pl-2 text-xs mt-1 py-3 px-4 hover:bg-black hover:text-white rounded-md duration-300 cursor-pointer ${
              activeTab === "notifications" ? "bg-black text-white" : ""
            }`}
          >
            <GoBell />
            <span>Notification</span>
          </Link>
          <Link
            href="/dashboard/manager/settings"
            className={`flex gap-2 items-center pl-2 text-xs mt-1 py-3 px-4 hover:bg-black hover:text-white rounded-md duration-300 cursor-pointer ${
              activeTab === "settings" ? "bg-black text-white" : ""
            }`}
          >
            <FiSettings />
            <span>Settings</span>
          </Link>
        </ul>
      </ol>
    </div>
  );
};

export default Sidebar;
