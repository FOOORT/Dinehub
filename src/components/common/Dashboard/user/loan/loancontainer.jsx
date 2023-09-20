import DashboardContainer from "@/components/common/DashboardContainer";
import StatsCard from "@/components/common/StatsCard";
import React from "react";

const LoanContainer = () => {
  return (
    <DashboardContainer title="Loan eligiblity">
      <div className="w-full grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 mt-2 gap-4">
        <StatsCard />
        <StatsCard />
        <StatsCard />
        <StatsCard />
      </div>
    </DashboardContainer>
  );
};

export default LoanContainer;
