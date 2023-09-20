import React from "react";
import AdminLayout from "./adminlayout";
import Header from "@/components/common/Dashboard/admin/header";
import StatsContainer from "@/components/common/Dashboard/admin/statscontainer";

const page = () => {
  return (
    <AdminLayout>
      <Header />
      <StatsContainer />
    </AdminLayout>
  );
};

export default page;
