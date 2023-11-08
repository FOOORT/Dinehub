import DashboardContainer from "@/components/common/DashboardContainer";
import StatsCard from "@/components/common/StatsCard";
import { BsPatchCheckFill } from "react-icons/bs";
import React from "react";

const RenewalLayout = () => {
  return (
    <div>
      <DashboardContainer title="Main info">
        <div className="w-full grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 mt-2 gap-4 ">
          <StatsCard
            icon={<BsPatchCheckFill />}
            title="64,000 rwf"
            details="Active subscription"
          />
          <StatsCard
            icon={<BsPatchCheckFill />}
            title="60 days"
            details="30 days"
          />
          <StatsCard
            icon={<BsPatchCheckFill />}
            title="18,000 rwf"
            details="Remaining balance"
          />
          <StatsCard
            icon={<BsPatchCheckFill />}
            title="24,000 rwf"
            details="12 days"
          />
        </div>
      </DashboardContainer>
    </div>
  );
};

export default RenewalLayout;
