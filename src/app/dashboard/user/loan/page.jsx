"use client";
import React from "react";
import Layout from "../Layout";
import LoanContainer from "@/components/common/Dashboard/user/loan/loancontainer";
import RequestLoan from "@/components/common/Dashboard/user/loan/requestloan";

const page = () => {
  return (
    <Layout>
      <LoanContainer />
      <RequestLoan />
    </Layout>
  );
};

export default page;
