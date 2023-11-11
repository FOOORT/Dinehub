"use client";
import React from "react";
import Sidebar from "@/components/common/Dashboard/sidebar";

import Navs from "@/components/json/admin/navbar";
import withAuth from "@/utils/ProtectRouters";

const AdminLayout = ({ children }) => {
  return (
    <div className="w-screen h-screen bg-slate-200 flex justify-between items-start">
      <div className="bg-white lg:w-[18vw] xl:w-[15vw]  h-screen hidden lg:block">
        <div className="lg:w-[17vw] xl:w-[14vw] h-full fixed pl-4 bg-white">
          <Sidebar Navs={Navs} />
        </div>
      </div>
      <div className="w-screen xl:ml-[15vw] lg:ml-[18vw] ml:w-[14vw] lg:w-[82vw] xl:w-[85vw] fixed overflow-y-scroll">
        {children}
      </div>
    </div>
  );
};

export default withAuth(AdminLayout, ["Admin"]);
