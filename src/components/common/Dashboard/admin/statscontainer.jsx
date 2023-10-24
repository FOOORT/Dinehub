import React from "react";
import StatsCard from "../../StatsCard";

const StatsContainer = ({ Stats }) => {
  return (
    <div className="w-full grid grid-cols-2 md:grid-cols-2 xl:grid-cols-4 mt-4 gap-4  bg-">
      {Stats.map((stat, i) => {
        <StatsCard
          key={i}
          // icon={stat.icon}
          title={stat.title}
          details={stat.details}
        />;
      })}
    </div>
  );
};

export default StatsContainer;
