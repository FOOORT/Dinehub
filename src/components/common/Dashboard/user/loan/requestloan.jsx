import DashboardContainer from "@/components/common/DashboardContainer";
import React from "react";
import ActionButton from "../../../actionbutton";

const RequestLoan = () => {
  return (
    <DashboardContainer title="Request loan">
      <div className="w-full flex flex-col md:flex-row justify-between mt-2 gap-4 items-end">
        <div className="flex gap-4 w-full md:w-auto">
          <div className="flex flex-col gap-2 w-1/2">
            <label htmlFor="" className=" font-semibold mb-1">
              Days
            </label>
            <input
              type="text"
              value="15 days"
              className="px-4 py-3 rounded-md"
            />
          </div>
          <div className="flex flex-col gap-2 w-1/2">
            <label htmlFor="" className=" font-semibold mb-1">
              Money
            </label>
            <input
              type="text"
              value="32,000 rwf"
              className="px-4 py-3 rounded-md"
            />
          </div>
        </div>
        <div className="w-full md:w-auto flex justify-end items-end">
          <ActionButton />
        </div>
      </div>
      <p className="text-xs mt-6 w-full">
        Make sure that you read{" "}
        <span className="font-bold">Terms and Condition</span> of the loan offer
        before easily request loan from dashboard
      </p>
    </DashboardContainer>
  );
};

export default RequestLoan;
