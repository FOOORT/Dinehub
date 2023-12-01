"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";
const Sidebar = ({ Navs }) => {
  const { pathname } = usePathname();
  const activeTab = pathname?.split("/manager/")[1];

  const categories = [...new Set(Navs.map((nav) => nav.category))];

  return (
    <div className="pl-4 py-8 flex flex-col gap-4 bg-white w-full">
      <Link href="/">
        <Image
          src="/image/DashLogo.png"
          alt="DashboradLogo"
          height={100}
          width={100}
        />
      </Link>

      {categories.map((category) => (
        <ol key={category} className="flex flex-col gap-4">
          <ul className="text-slate-500">
            <h1 className="font-bold text-black">{category}</h1>
            {Navs.map((nav) => {
              if (nav.category === category) {
                return (
                  <Link
                    key={nav.path}
                    href={nav.path}
                    className={`flex gap-2 items-center pl-2 text-sm mt-1 py-3 px-4 hover:bg-black hover-text-white rounded-md duration-300 cursor-pointer ${
                      activeTab === nav.path ? "bg-black text-white" : ""
                    }`}
                  >
                    {nav.icon}
                    <span>{nav.name}</span>
                  </Link>
                );
              }
              return null;
            })}
          </ul>
        </ol>
      ))}
    </div>
  );
};

export default Sidebar;
