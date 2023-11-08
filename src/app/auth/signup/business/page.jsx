"use client";
import React, { useState } from "react";
import BusinessInfo from "@/components/Auth/businessinfo";
import ManagerAccount from "@/components/Auth/manageraccount";

const Page = () => {
  const [activeComponent, setActiveComponent] = useState(true);

  return (
    <div className="w-screen bg-white h-screen flex justify-center items-center">
      {activeComponent ? (
        <ManagerAccount
          active={activeComponent}
          setActive={setActiveComponent}
        />
      ) : (
        <BusinessInfo active={activeComponent} setActive={setActiveComponent} />
      )}
    </div>
  );
};

export default Page;
