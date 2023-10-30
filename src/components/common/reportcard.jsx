import React from "react";

const ReportCard = () => {
  return (
    <div className="flex flex-col gap-2 shadow-lg p-4 xl:p-6 rounded-lg">
      <h2 className=" font-medium text-blue-600">Category</h2>
      <div className="w-full flex justify-between items-center text-slate-700 font-medium text-lg">
        <h3>14</h3>
        <h3>
          34,000 <span>rwf</span>
        </h3>
      </div>
      <div className="w-full flex justify-between text-sm font-normal text-slate-600">
        <h3>Last 30 Days</h3>
        <h3>Revenue</h3>
      </div>
    </div>
  );
};

export default ReportCard;
