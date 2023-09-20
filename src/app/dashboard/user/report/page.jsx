import React from "react";
import Layout from "../Layout";
import HistoryReport from "@/components/common/Dashboard/user/report/historyreport";
import LoanReport from "@/components/common/Dashboard/user/report/loanreport";

const page = () => {
  return (
    <Layout>
      <HistoryReport />
      <LoanReport />
    </Layout>
  );
};

export default page;
