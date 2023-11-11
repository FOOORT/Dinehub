"use client";
import SideBar from "@/components/common/Dashboard/user/sidebar";
import Header from "@/components/Main/Header";
import withAuth from "@/utils/ProtectRouters";
import React from "react";

const Layout = ({ children }) => {
  return (
    <div className="w-screen min-h-screen flex justify-start items-start pt-20 pb-4">
      <Header />
      <div className="w-full flex flex-col lg:flex-row gap-4 px-4 lg:px-12 bg-white">
        <div className="w-full lg:w-2/12 rounded-xl">
          <SideBar />
        </div>
        <div className="w-full lg:w-10/12">{children}</div>
      </div>
    </div>
  );
};

export default withAuth(Layout, ["Client"]);
