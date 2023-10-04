import React from "react";
import RightLayout from "../../../components/common/Dashboard/admin/rightlayout";
import Sidebar from "@/components/common/Dashboard/admin/sidebar";

const AdminLayout = ({ children }) => {
  return (
    <div className="w-screen h-screen bg-slate-200 flex justify-between items-start">
      {/* <div className="h-screen bg-red-300 lg:w-[20vw] xl:w-[16vw] hidden lg:block left-0">
        <Sidebar />
        </div>
        <div className="w-full md:w-[70vw] lg:[50vw] px-4  md:pl-4 md:p-0 ml-[20vw]">
        {children}
      </div>
      <div className="w-[30vw] h-screen lg:w-[35vw] xl:w-[18vw] bg-red-300 hidden md:block right-0">
        <RightLayout />
      </div> */}
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
