import DashboardContainer from "@/components/common/DashboardContainer";
import React from "react";
import ActionButton from "../../../actionbutton";

const BillingInfo = () => {
  return (
    <DashboardContainer title="Additional Billing information">
      <h3>No information provided</h3>
      <ActionButton />
    </DashboardContainer>
  );
};

export default BillingInfo;
