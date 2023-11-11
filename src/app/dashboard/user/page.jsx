"use client";
import React from "react";
import Layout from "./Layout";
import UserHome from "@/components/common/Dashboard/user/userhome";

const page = () => {
  return (
    <Layout>
      <UserHome />
    </Layout>
  );
};

export default page;
