import Sidebar from "@/components/common/Dashboard/manager/sidebar";
import React from "react";

const ManagerLayout = ({ children }) => {
  return (
    <div className="w-screen h-screen bg-slate-200 flex justify-between items-start">
      <div className="bg-white lg:w-[18vw] xl:w-[15vw]  h-screen hidden lg:block">
        <div className="lg:w-[17vw] xl:w-[14vw] h-full fixed pl-4 bg-white">
          <Sidebar />
        </div>
      </div>
      <div className="w-screen xl:ml-[15vw] lg:ml-[18vw] ml:w-[14vw] lg:w-[82vw] xl:w-[85vw] fixed overflow-y-scroll px-3">
        {children}
      </div>
    </div>
  );
};

export default ManagerLayout;
