import DashboardContainer from "@/components/common/DashboardContainer";
import React from "react";

const Security = () => {
  return (
    <DashboardContainer title="Service security">
      <li className="flex gap-6 items-center group py-2">
        <h3 className="text-slate-600">Password</h3>
        <span className="flex gap-2 items-center">
          <p>********</p>
          <button className="px-4 py-1 border rounded-md text-sm font-extralight text-black duration-300 scale-0 group-hover:scale-100 active:scale-105 group-hover:bg-black group-hover:text-white">
            Edit
          </button>
        </span>
      </li>
    </DashboardContainer>
  );
};

export default Security;
