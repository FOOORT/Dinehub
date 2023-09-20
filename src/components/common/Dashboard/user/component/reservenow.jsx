import React from "react";
import ReserveOption from "../common/reserveoption";
import ReserveDigits from "../common/reservedigits";
import ReserveAction from "../common/reserveaction";
import DashboardContainer from "@/components/common/DashboardContainer";

const ReserveNow = () => {
  return (
    <DashboardContainer title="Reserve now">
      <div className="w-full flex justify-between mt-2 gap-4 items-center">
        <ReserveOption />
        <div className="hidden md:block">
          <ReserveDigits />
        </div>
        <ReserveAction />
      </div>
      <div className="md:hidden flex justify-center items-center w-full py-4 border rounded-lg mt-2">
        <ReserveDigits />
      </div>
    </DashboardContainer>
  );
};

export default ReserveNow;
