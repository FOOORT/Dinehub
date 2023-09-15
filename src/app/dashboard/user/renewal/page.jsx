import Header from "@/components/Main/Header";
import React from "react";
import Layout from "../Layout";
import RenewalLayout from "@/components/Dashboard/user/renewal/renewallayout";
import RenewalOption from "@/components/Dashboard/user/renewal/renewaloption";

const page = () => {
  return (
    <Layout>
      <RenewalLayout />
      <RenewalOption />
    </Layout>
  );
};

export default page;
