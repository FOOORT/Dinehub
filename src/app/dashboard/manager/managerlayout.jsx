"use client";
import React from "react";
import Navs from "@/components/json/manager/navbar";
import Sidebar from "@/components/common/Dashboard/sidebar";
import withAuth from "@/utils/ProtectRouters";

const ManagerLayout = ({ children }) => {
  return (
    <div className="w-screen min-h-screen bg-slate-200 flex justify-between items-start pb-4">
      <div className=" lg:w-[18vw] xl:w-[15vw]  h-screen hidden lg:block">
        <div className="lg:w-[17vw] xl:w-[14vw] min-h-screen fixed pl-4 bg-white">
          <Sidebar Navs={Navs} />
        </div>
      </div>
      <div className="w-screen ml:w-[14vw] lg:w-[88vw] xl:w-[95vw] overflow-y-scroll px-3 duration-150">
        {children}
      </div>
    </div>
  );
};

export default ManagerLayout;
// export default withAuth(ManagerLayout, ["Manager"]);
