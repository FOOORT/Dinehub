"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";
import { AiOutlineShop, AiOutlineStock } from "react-icons/ai";
import { BiHistory } from "react-icons/bi";
import { FaRegHeart } from "react-icons/fa";
import { FiMessageSquare, FiSettings, FiUsers } from "react-icons/fi";
import { GoBell } from "react-icons/go";
import { MdOutlineMenuBook, MdSpaceDashboard } from "react-icons/md";

const Sidebar = () => {
  const currentPage = usePathname();
  const activeTab = currentPage.split("/admin/")[1];

  return (
    <div className="pl-4 py-8 flex flex-col gap-4 bg-white w-full">
      <Link href="/">
        <Image src="/image/DashLogo.png" alt="alt1" height={100} width={100} />
      </Link>
      <ol className="flex flex-col gap-4">
        <ul className="text-slate-500">
          <h1 className="font-bold text-black">Menu</h1>
          <Link
            href="/dashboard/admin/"
            className={`flex gap-2 items-center pl-2 text-xs mt-1 py-3 px-4 hover:bg-black hover:text-white rounded-md duration-300 cursor-pointer ${
              activeTab === null ? "bg-black text-white" : ""
            }`}
          >
            <MdSpaceDashboard />
            <span>Dashboard</span>
          </Link>
          <Link
            href="/dashboard/admin/restaurant"
            className={`flex gap-2 items-center pl-2 text-xs mt-1 py-3 px-4 hover:bg-black hover:text-white rounded-md duration-300 cursor-pointer ${
              activeTab === "restaurant" ? "bg-black text-white" : ""
            }`}
          >
            <AiOutlineShop />
            <span>Restaurant</span>
          </Link>
          <Link
            href="/dashboard/admin/users"
            className={`flex gap-2 items-center pl-2 text-xs mt-1 py-3 px-4 hover:bg-black hover:text-white rounded-md duration-300 cursor-pointer ${
              activeTab === "users" ? "bg-black text-white" : ""
            }`}
          >
            <FiUsers />
            <span>Users</span>
          </Link>
          <Link
            href="/dashboard/admin/menus"
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
            href="/dashboard/admin/history"
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
            href="/dashboard/admin/stocks"
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
            href="/dashboard/admin/messages"
            className={`flex gap-2 items-center pl-2 text-xs mt-1 py-3 px-4 hover:bg-black hover:text-white rounded-md duration-300 cursor-pointer ${
              activeTab === "messages" ? "bg-black text-white" : ""
            }`}
          >
            <FiMessageSquare />
            <span>Messages</span>
          </Link>
          <Link
            href="/dashboard/admin/bell"
            className={`flex gap-2 items-center pl-2 text-xs mt-1 py-3 px-4 hover:bg-black hover:text-white rounded-md duration-300 cursor-pointer ${
              activeTab === "bell" ? "bg-black text-white" : ""
            }`}
          >
            <GoBell />
            <span>Notification</span>
          </Link>
          <Link
            href="/dashboard/admin/settings"
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
