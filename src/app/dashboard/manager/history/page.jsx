import React from "react";
import ManagerLayout from "../managerlayout";
import Header from "@/components/common/Dashboard/admin/header";

const page = () => {
  return (
    <ManagerLayout>
      <div className="w-screen h-screen bg-red-100 flex justify-center items-center">
        <Header />
      </div>
    </ManagerLayout>
  );
};

export default page;
