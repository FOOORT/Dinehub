import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaRegHeart } from "react-icons/fa";

const Sidebar = () => {
  return (
    <div className="px-4 py-8 flex flex-col gap-4 bg-white w-full">
      <Image src="/image/DashLogo.png" alt="alt1" height={100} width={100} />
      <ol className="flex flex-col gap-4">
        <ul className="text-slate-500">
          <h1 className="font-bold text-black">Menu</h1>
          <Link
            href="/dashboard/admin/"
            className="flex gap-2 items-center pl-2 text-xs mt-1 py-3 px-4 hover:bg-black hover:text-white rounded-md duration-300 cursor-pointer"
          >
            <FaRegHeart />
            <span>Dashboard</span>
          </Link>
          <Link
            href="/dashboard/admin/restaurant"
            className="flex gap-2 items-center pl-2 text-xs mt-1 py-3 px-4 hover:bg-black hover:text-white rounded-md duration-300 cursor-pointer"
          >
            <FaRegHeart />
            <span>Restaurant</span>
          </Link>
          <Link
            href="/dashboard/admin/users"
            className="flex gap-2 items-center pl-2 text-xs mt-1 py-3 px-4 hover:bg-black hover:text-white rounded-md duration-300 cursor-pointer"
          >
            <FaRegHeart />
            <span>Users</span>
          </Link>
          <Link
            href="/dashboard/admin/menus"
            className="flex gap-2 items-center pl-2 text-xs mt-1 py-3 px-4 hover:bg-black hover:text-white rounded-md duration-300 cursor-pointer"
          >
            <FaRegHeart />
            <span>Menus</span>
          </Link>
        </ul>
        <ul className="text-slate-500">
          <h1 className="font-bold text-black">Reports</h1>
          <Link
            href="/dashboard/admin/history"
            className="flex gap-2 items-center pl-2 text-xs mt-1 py-3 px-4 hover:bg-black hover:text-white rounded-md duration-300 cursor-pointer"
          >
            <FaRegHeart />
            <span>History</span>
          </Link>
        </ul>
        <ul className="text-slate-500">
          <h1 className="font-bold text-black">Stock</h1>
          <Link
            href="/dashboard/admin/stocks"
            className="flex gap-2 items-center pl-2 text-xs mt-1 py-3 px-4 hover:bg-black hover:text-white rounded-md duration-300 cursor-pointer"
          >
            <FaRegHeart />
            <span>Stocks</span>
          </Link>
        </ul>
        <ul className="text-slate-500">
          <h1 className="font-bold text-black">Messages</h1>
          <Link
            href="/dashboard/admin/messages"
            className="flex gap-2 items-center pl-2 text-xs mt-1 py-3 px-4 hover:bg-black hover:text-white rounded-md duration-300 cursor-pointer"
          >
            <FaRegHeart />
            <span>Messages</span>
          </Link>
          <Link
            href="/dashboard/admin/bell"
            className="flex gap-2 items-center pl-2 text-xs mt-1 py-3 px-4 hover:bg-black hover:text-white rounded-md duration-300 cursor-pointer"
          >
            <FaRegHeart />
            <span>Notification</span>
          </Link>
          <Link
            href="/dashboard/admin/settings"
            className="flex gap-2 items-center pl-2 text-xs mt-1 py-3 px-4 hover:bg-black hover:text-white rounded-md duration-300 cursor-pointer"
          >
            <FaRegHeart />
            <span>Settings</span>
          </Link>
        </ul>
      </ol>
    </div>
  );
};

export default Sidebar;
