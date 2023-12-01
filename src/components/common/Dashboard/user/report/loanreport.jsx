import DashboardContainer from "@/components/common/DashboardContainer";
import React from "react";
import HistoryTable from "./common/historytable";

const LoanReport = () => {
  return (
    <DashboardContainer title="Loan History">
      <p className="text-sm">View or download your past invoices</p>
      <HistoryTable/>
    </DashboardContainer>
  );
};

export default LoanReport;
