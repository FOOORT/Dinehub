import React from "react";
import { MdWorkspacePremium, MdWidthNormal } from "react-icons/md";

const RestoSubscription = ({ updateProfile, setUpdateProfile }) => {
  return (
    <>
      {updateProfile ? (
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
      ) : (
        <div className="flex flex-col w-full gap-2 items-start">
          <h1 className="font-bold mt-4">Subscription pricing</h1>
          <div className="grid grid-cols-2 gap-3 w-full">
            <div className="flex flex-col w-full gap-2 items-start mt-4">
              <label className="text-sm font-semibold">Normal</label>
              <input
                type="number"
                value="42000"
                className="border border-slate-100 px-2 py-1 rounded-md w-full outline-none active:outline-none"
              />
            </div>
            <div className="flex flex-col w-full gap-2 items-start mt-4">
              <label className="text-sm font-semibold">VIP</label>
              <input
                type="number"
                value="640000"
                className="border border-slate-100 px-2 py-1 rounded-md w-full outline-none active:outline-none"
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default RestoSubscription;
