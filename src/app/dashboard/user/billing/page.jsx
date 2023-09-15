import React from "react";
import Layout from "../Layout";
import UpgradePlan from "@/components/Dashboard/user/upgrade/upgradeplan";
import PayMethod from "@/components/Dashboard/user/upgrade/paymethod";
import ChargesBill from "@/components/Dashboard/user/upgrade/chargesbill";
import BillingInfo from "@/components/Dashboard/user/upgrade/billinginfo";

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
