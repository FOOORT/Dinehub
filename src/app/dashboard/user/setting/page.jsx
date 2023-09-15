import React from "react";
import Layout from "../Layout";
import Profile from "@/components/Dashboard/user/setting/profile";
import Security from "@/components/Dashboard/user/setting/security";
import Service from "@/components/Dashboard/user/setting/service";

const page = () => {
  return (
    <Layout>
      <Profile/>
      <Security />
      <Service />
    </Layout>
  );
};

export default page;
