import DashboardContainer from "@/components/common/DashboardContainer";
import React from "react";

const Service = () => {
  return (
    <DashboardContainer title="Security">
      <div className="flex flex-col gap-4 items-start justify-start w-full">
        <div className="flex justify-between items-start w-full">
          <h1 className="p-6">Notifications</h1>
          <div className="flex items-center w-full md:w-1/2 lg:w-1/3 gap-2">
            <input type="text" value="reconfortdanny@gmail.com" className="px-4 py-3 rounded-md border border-black text-sm w-full"/>
            <button className="bg-black text-white px-4 py-3 rounded-md">
              Set
            </button>
          </div>
        </div>
        <p>Set default email to push notification for all your services</p>
      </div>
    </DashboardContainer>
  );
};

export default Service;
