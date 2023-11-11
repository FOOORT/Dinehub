"use client";
import React from "react";
import Layout from "../Layout";
import Profile from "@/components/common/Dashboard/user/setting/profile";
import Security from "@/components/common/Dashboard/user/setting/security";
import Service from "@/components/common/Dashboard/user/setting/service";

const page = () => {
  return (
    <Layout>
      <Profile />
      <Security />
      <Service />
    </Layout>
  );
};

export default page;
