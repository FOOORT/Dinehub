import React from "react";
import RightLayout from "../../../components/common/Dashboard/admin/rightlayout";
import Sidebar from "@/components/common/Dashboard/admin/sidebar";

const AdminLayout = ({ children }) => {
  return (
    <div className="w-screen h-screen bg-slate-200 flex justify-between items-start gap-2 lg:gap-4">
      <div className="h-screen lg:w-[20vw] xl:w-[18vw] bg-white hidden lg:block">
        <Sidebar />
      </div>
      <div className="w-full md:w-[70vw] lg:w-full px-4  md:pl-4 md:p-0">
        {children}
      </div>
      <div className="w-[30vw] h-screen xl:w-[25vw] bg-white hidden md:block">
        <RightLayout />
      </div>
    </div>
  );
};

export default AdminLayout;
