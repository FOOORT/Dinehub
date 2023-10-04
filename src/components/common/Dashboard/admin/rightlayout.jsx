import React from "react";
import BankCard from "./bankcard";
import OptionsBtn from "../../optionsBtn";

const RightLayout = () => {
  return (
    <div className="right-0 w-full p-2 h-full flex flex-col justify-between">
      <div className="w-full rounded-lg flex flex-col items-center">
        <div className="flex justify-between w-full">
          <h1 className="font-bold">Top selling</h1>
          <OptionsBtn />
        </div>
        <p className="text-sm py-16 text-center w-44 h-44 mt-8 rounded-full border flex items-center justify-center">
          Chart
        </p>
      </div>
      <div className="grid grid-cols-1 gap-2">
        <BankCard
          title="MTN"
          number="4567  8902  5882  4501"
          expdate="04/08"
          color="bg-black"
        />
        <BankCard
          title="Equity"
          number="073 106 1067"
          expdate="16/11"
          color="bg-red-600"
        />
        <BankCard
          title="AIRTEL"
          number="078 106 1067"
          expdate="25/05"
          color="bg-blue-600"
        />
      </div>
    </div>
  );
};

export default RightLayout;
