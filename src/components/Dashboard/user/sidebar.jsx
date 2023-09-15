"use clients";
"use client";

import Link from "next/link";
import React, { useState } from "react";
import { FaBars } from "react-icons/fa";

const SideBar = () => {
  const [sidebar, setSidebar] = useState(false);

  const handleSidebar = () => {
    setSidebar((prev) => !prev);
  };

  return (
    <div className="w-full p-0 lg:p-4 rounded-xl">
      <div className="block lg:hidden py-2 h-14 rounded-md">
        <button
          className="bg-white border px-4 py-2 text-sm flex items-center gap-2 font-normal rounded-md hover:bg-black hover:text-white fixed"
          onClick={handleSidebar}
        >
          <FaBars />
          <span>Menu</span>
        </button>
      </div>
      <div className="flex-col gap-4 hidden lg:flex">
        <h2 className="font-bold text-lg">Account dashboard</h2>
        <ul className="flex flex-col gap-1">
          <Link
            href="/dashboard/user"
            className="w-full px-4 py-3 rounded-md hover:bg-black hover:text-white duration-300"
          >
            Dashboard
          </Link>
          <Link
            href="/dashboard/user/renewal"
            className="w-full px-4 py-3 rounded-md hover:bg-black hover:text-white duration-300"
          >
            Renewal
          </Link>
          <Link
            href="/dashboard/user/upgrade"
            className="w-full px-4 py-3 rounded-md hover:bg-black hover:text-white duration-300"
          >
            Upgrade
          </Link>
          <Link
            href="/dashboard/user/billing"
            className="w-full px-4 py-3 rounded-md hover:bg-black hover:text-white duration-300"
          >
            Billing
          </Link>
          <Link
            href="/dashboard/user/loan"
            className="w-full px-4 py-3 rounded-md hover:bg-black hover:text-white duration-300"
          >
            Loan
          </Link>
          <Link
            href="/dashboard/user/report"
            className="w-full px-4 py-3 rounded-md hover:bg-black hover:text-white duration-300"
          >
            Report
          </Link>
          <Link
            href="/dashboard/user/setting"
            className="w-full px-4 py-3 rounded-md hover:bg-black hover:text-white duration-300"
          >
            Setting
          </Link>
        </ul>
      </div>
      {sidebar && (
        <div className="flex-col gap-4 flex lg:hidden ">
          <h2 className="font-bold text-lg">Account dashboard</h2>
          <ul className="flex flex-col gap-1">
            <Link
              href="/dashboard/user"
              className="w-full px-4 py-3 rounded-md hover:bg-black hover:text-white duration-300"
            >
              Dashboard
            </Link>
            <Link
              href="/dashboard/user/renewal"
              className="w-full px-4 py-3 rounded-md hover:bg-black hover:text-white duration-300"
            >
              Renewal
            </Link>
            <Link
              href="/dashboard/user/upgrade"
              className="w-full px-4 py-3 rounded-md hover:bg-black hover:text-white duration-300"
            >
              Upgrade
            </Link>
            <Link
              href="/dashboard/user/billing"
              className="w-full px-4 py-3 rounded-md hover:bg-black hover:text-white duration-300"
            >
              Billing
            </Link>
            <Link
              href="/dashboard/user/loan"
              className="w-full px-4 py-3 rounded-md hover:bg-black hover:text-white duration-300"
            >
              Loan
            </Link>
            <Link
              href="/dashboard/user/report"
              className="w-full px-4 py-3 rounded-md hover:bg-black hover:text-white duration-300"
            >
              Report
            </Link>
            <Link
              href="/dashboard/user/setting"
              className="w-full px-4 py-3 rounded-md hover:bg-black hover:text-white duration-300"
            >
              Setting
            </Link>
          </ul>
        </div>
      )}
    </div>
  );
};

export default SideBar;
