import Link from "next/link";
import React from "react";
import { FaBars } from "react-icons/fa";

const SideBar = () => {
  return (
    <div className="w-full p-0 lg:p-4 bg-white">
      <div className="block lg:hidden px-4 py-2 h-14 rounded-md">
        <button className="bg-white border px-4 py-2 text-sm flex items-center gap-2 font-normal rounded-md hover:bg-black hover:text-white fixed">
          <FaBars />
          <span>Menu</span>
        </button>
      </div>
      <div className="hidden lg:flex flex-col gap-4">
        <h2 className="font-bold text-lg">Account dashboard</h2>
        <ul className="flex flex-col gap-1">
          <Link
            href="/dashboard/user/"
            className="bg-white w-full px-4 py-3 rounded-md hover:bg-black hover:text-white duration-300"
          >
            Dashboard
          </Link>
          <Link
            href="/dashboard/user/renewal"
            className="bg-white w-full px-4 py-3 rounded-md hover:bg-black hover:text-white duration-300"
          >
            Renewal
          </Link>
          <Link
            href="/dashboard/user/upgrade"
            className="bg-white w-full px-4 py-3 rounded-md hover:bg-black hover:text-white duration-300"
          >
            Upgrade
          </Link>
          <Link
            href="/dashboard/user/billing"
            className="bg-white w-full px-4 py-3 rounded-md hover:bg-black hover:text-white duration-300"
          >
            Billing
          </Link>
          <Link
            href="/dashboard/user/loan"
            className="bg-white w-full px-4 py-3 rounded-md hover:bg-black hover:text-white duration-300"
          >
            Loan
          </Link>
          <Link
            href="/dashboard/user/report"
            className="bg-white w-full px-4 py-3 rounded-md hover:bg-black hover:text-white duration-300"
          >
            Report
          </Link>
          <Link
            href="/dashboard/user/setting"
            className="bg-white w-full px-4 py-3 rounded-md hover:bg-black hover:text-white duration-300"
          >
            Setting
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default SideBar;
