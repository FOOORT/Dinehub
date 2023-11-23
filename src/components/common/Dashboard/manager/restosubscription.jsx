import React from "react";
import { MdWorkspacePremium, MdWidthNormal } from "react-icons/md";

const RestoSubscription = () => {
  return (
    <div className="w-full flex flex-col gap-4 mt-4 border-t">
      <h1 className="font-bold mt-4">Subscription pricing</h1>
      <div className="flex gap-3 items-center text-sm w-full">
        <div className="flex gap-2 items-start text-sm">
          <MdWidthNormal />
          <h2 className="font-bold">Normal</h2>
        </div>
        <h2>42,000 rwf</h2>
      </div>
      <div className="flex gap-3 items-center text-sm w-full">
        <div className="flex gap-2 items-start text-sm">
          <MdWorkspacePremium className="text-yellow-800" />
          <h2 className="font-bold">VIP</h2>
        </div>
        <h2>64,000 rwf</h2>
      </div>
    </div>
  );
};

export default RestoSubscription;
