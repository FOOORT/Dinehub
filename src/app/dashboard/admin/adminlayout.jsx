import React from "react";
import Sidebar from "@/components/common/Dashboard/admin/sidebar";

const AdminLayout = ({ children }) => {
  return (
    <div className="w-screen h-screen bg-slate-200 flex justify-between items-start">
      <div className="bg-white lg:w-[18vw] xl:w-[15vw]  h-screen hidden lg:block">
        <div className="lg:w-[17vw] xl:w-[14vw] h-full fixed pl-4 bg-white">
          <Sidebar />
        </div>
      </div>
      <div className="w-screen lg:w-[82vw] xl:w-[85vw]">{children}</div>
    </div>
  );
};

export default AdminLayout;
