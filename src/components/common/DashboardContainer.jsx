import React from "react";

const DashboardContainer = ({ children, title }) => {
  return (
    <div className="w-full flex flex-col px-6 p-6 bg-slate-100 rounded-lg mt-4">
      <h2 className="font-bold text-lg border-b pb-2 mb-2">{title}</h2>
      <div className="w-full">{children}</div>
    </div>
  );
};

export default DashboardContainer;
