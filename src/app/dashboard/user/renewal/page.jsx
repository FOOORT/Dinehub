"use client";
import React from "react";
import Layout from "../Layout";
import RenewalLayout from "@/components/common/Dashboard/user/renewal/renewallayout";
import RenewalOption from "@/components/common/Dashboard/user/renewal/renewaloption";

const page = () => {
  return (
    <Layout>
      <RenewalLayout />
      <RenewalOption />
    </Layout>
  );
};

export default page;
