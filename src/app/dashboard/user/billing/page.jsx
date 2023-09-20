import React from "react";
import Layout from "../Layout";
import UpgradePlan from "@/components/common/Dashboard/user/billing/upgradeplan";
import PayMethod from "@/components/common/Dashboard/user/billing/paymethod";
import ChargesBill from "@/components/common/Dashboard/user/billing/chargesbill";
import BillingInfo from "@/components/common/Dashboard/user/billing/billinginfo";

const page = () => {
  return (
    <Layout>
      <UpgradePlan />
      <PayMethod />
      <BillingInfo />
      <ChargesBill />
    </Layout>
  );
};

export default page;
