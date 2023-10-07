import React from "react";
import RecentOrder from "./recentorder";
import WeeklyRate from "./weeklyrate";

const AdminChart = () => {
  return (
    <div className="w-full mt-4 rounded-lg">
      <div className="flex gap-4">
        <div className="w-3/6 md:w-4/6 lg:w-3/6 xl:w-4/6 bg-slate-100 rounded-lg">
          <RecentOrder />
        </div>
        <div className="w-3/6 md:w-2/6 lg:w-3/6 xl:w-2/6 bg-blue-200 h-80 rounded-lg">
          {/* <WeeklyRate /> */}
        </div>
      </div>
      <div className="flex flex-row-reverse mt-5 gap-4 ">
        <div className="w-3/6 md:w-4/6 lg:w-3/6 xl:w-4/6 bg-slate-100 rounded-lg">
          <RecentOrder />
        </div>
        <div className="w-3/6 md:w-2/6 lg:w-3/6 xl:w-2/6 bg-blue-200 h-80 rounded-lg">
          {/* <WeeklyRate /> */}
        </div>
      </div>
    </div>
  );
};

export default AdminChart;
