import React from "react";
import StatsCard from "../../StatsCard";
const StatsContainer = ({ Stats }) => {
  return (
    <div className="w-full grid grid-cols-2 md:grid-cols-2 xl:grid-cols-4 mt-4 gap-4  bg-">
      {Stats &&
        Stats.map((item, index) => (
          <StatsCard
            key={index}
            title={item.title}
            details={item.details}
            icon={item.icon}
          />
        ))}
    </div>
  );
};

export default StatsContainer;
