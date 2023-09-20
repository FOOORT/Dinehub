import React from "react";
import PremiumPlans from "./components/premiumplans";

const UpgradeContainer = () => {
  return (
    <div className="p-1 rounded-xl w-full border grid grid-cols-1 lg:grid-cols-2 gap-4">
      <div className="w-full p-2 lg:p-8 rounded-xl hover:bg-black hover:text-white duration-300">
        <PremiumPlans />
      </div>
      <div className="w-full p-2 lg:p-8 rounded-xl hover:bg-black hover:text-white duration-300">
        <PremiumPlans />
      </div>
    </div>
  );
};

export default UpgradeContainer;
