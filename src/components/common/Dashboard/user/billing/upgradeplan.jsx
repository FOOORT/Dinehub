import DashboardContainer from "@/components/common/DashboardContainer";
import StatsCard from "@/components/common/StatsCard";
import React from "react";

const UpgradePlan = () => {
  return (
    <DashboardContainer title="Plan">
      <div className="w-full grid grid-cols-2 lg:grid-cols-3 mt-2 gap-4 ">
        <StatsCard />
        <StatsCard />
        <StatsCard />
      </div>
    </DashboardContainer>
  );
};

export default UpgradePlan;
