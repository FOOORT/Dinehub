import DashboardContainer from "@/components/common/DashboardContainer";
import React from "react";

const ChargesBill = () => {
  return (
    <DashboardContainer title="Charges on bill">
      <p className="text-sm">
        Amount displayed have been accrued within the month to date
      </p>
      <div className="flex justify-between">
        <h2>3rwf / 30 Times</h2>
        <p>Active Plan</p>
        <h3>90 rwf</h3>
      </div>
    </DashboardContainer>
  );
};

export default ChargesBill;
