import ActionButton from "@/components/common/Dashboard/actionbutton";
import React from "react";
import { MdWorkspacePremium } from "react-icons/md";

const PremiumPlans = () => {
  return (
    <div className="w-full flex flex-col justify-start items-start gap-4">
      <div className="p-4 bg-red-300 rounded-lg">
        <MdWorkspacePremium />
      </div>
      <h1 className="text-base mt-1 font-bold">Premium plans</h1>
      <ul className="flex flex-col gap-2 text-sm">
        <li>Access to an expanded menu with premium dishes.</li>
        <li>Personalized recommendations based on order history.</li>
      </ul>
      <h1 className="text-base mt-1 font-bold">Price</h1>
      <ul className="flex flex-col gap-2 text-sm">
        <li>Personalized recommendations based on order history.</li>
      </ul>
      <h1 className="text-base mt-1 font-bold">Details</h1>
      <ul className="flex flex-col gap-2 text-sm">
        <li>Access to an expanded menu with premium dishes.</li>
        <li>Faster delivery times.</li>
        <li>Exclusive access to limited-time promotions or special events.</li>
        <li>Personalized recommendations based on order history.</li>
        <li>Personalized recommendations based on order history.</li>
        <li>Personalized recommendations based on order history.</li>
        <li>Personalized recommendations based on order history.</li>
      </ul>
      <ActionButton />
    </div>
  );
};

export default PremiumPlans;
