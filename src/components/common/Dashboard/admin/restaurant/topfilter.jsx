"use client"

import ActionButton from "@/components/common/actionbutton";
import Link from "next/link";
import React, { useState } from "react";
import { FaPlus } from "react-icons/fa";
import AddRestaurant from "./modal/addrestaurant";

const linkData = [
  { text: "All", href: "/dashboard/admin/restaurant" },
  { text: "Pending", href: "/dashboard/admin/restaurant/pending" },
  { text: "Approved", href: "/dashboard/admin/restaurant/approved" },
  { text: "Rejected", href: "/dashboard/admin/restaurant/rejected" },
];

const TopFilter = () => {
  const [activeLink, setActiveLink] = useState("/dashboard/admin/restaurant"); // Set the default active link

  const handleLinkClick = (href) => {
    setActiveLink(href);
  };

  return (
    <div className="w-full flex justify-between items-center my-3">
      <ul className="flex items-center p-[1px] rounded-lg gap-2">
        {linkData.map((link, index) => (
          <Link key={index} href={link.href}>
            <span
              className={`px-4 py-2 rounded-md text-xs font-medium ${
                activeLink === link.href ? "text-white bg-black" : ""
              }`}
              onClick={() => handleLinkClick(link.href)}
            >
              {link.text}
            </span>
          </Link>
        ))}
      </ul>
      <ActionButton
        name="Add restaurant"
        icon={<FaPlus />}
        link="/dashboard/admin/restaurant/add"
      />
      {/* <AddRestaurant/> */}
    </div>
  );
};

export default TopFilter;
