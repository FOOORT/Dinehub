import React from "react";
import StatsCard from "../../StatsCard";

const StatsContainer = () => {
  return (
    <div className="w-full grid grid-cols-2 md:grid-cols-2 xl:grid-cols-4 mt-4 gap-4">
      <StatsCard />
      <StatsCard />
      <StatsCard />
      <StatsCard />
    </div>
  );
};

export default StatsContainer;
