import React from "react";

const RestoInfo = ({ updateProfile }) => {
  return (
    <>
      {updateProfile ? (
        <div className="flex flex-col w-full gap-2 items-start">
          <h1 className="font-bold">Villa restauranta</h1>

          <p className="text-sm">Huye , kg 655 st</p>
          <p className="text-slate-700 text-sm">Joined since 2023 Dec 2018</p>

          <div className="w-full flex flex-col gap-4 mt-4 border-t">
            <h1 className="font-bold mt-4">Working time</h1>
            <div className="flex gap-2 items-center text-sm">
              <h2>Opening</h2>
              <h2 className="font-bold">7:00 AM</h2>
              <h2>-----------</h2>
              <h2>Closing</h2>
              <h2 className="font-bold">10:00 PM</h2>
            </div>
          </div>
        </div>
      ) : (
        <div className="flex flex-col w-full gap-2 items-start">
          
          <div className="flex flex-col w-full gap-2 items-start mt-4">
            <label className="text-sm font-semibold">Restaurant name</label>
            <input
              type="text"
              value="Villa restaurant"
              className="border border-slate-100 px-2 py-1 rounded-md w-full outline-none active:outline-none"
            />
          </div>

          <div className="flex flex-col w-full gap-2 items-start mt-4">
            <label className="text-sm font-semibold">Restaurant address</label>
            <input
              type="text"
              value="Huye , kg 655 st"
              className="border border-slate-100 px-2 py-1 rounded-md w-full outline-none active:outline-none"
            />
          </div>


          <div className="grid grid-cols-2 gap-3 w-full">
            <div className="flex flex-col w-full gap-2 items-start mt-4">
              <label className="text-sm font-semibold">Opening hours</label>
              <div className="flex items-center w-full gap-1">
                <input
                  type="time"
                  value="7:00"
                  className="border border-slate-100 px-2 py-1 rounded-md w-9/12 outline-none active:outline-none tracking-widest"
                />
                <select
                  name=""
                  id=""
                  className="border border-slate-100 px-2 py-1 rounded-md w-3/12 outline-none active:outline-none tracking-widest"
                >
                  <option value="AM">AM</option>
                  <option value="PM">PM</option>
                </select>
              </div>
            </div>

            <div className="flex flex-col w-full gap-2 items-start mt-4">
              <label className="text-sm font-semibold">Closing hours</label>
              <div className="flex items-center w-full gap-1">
                <input
                  type="time"
                  value="7:00"
                  className="border border-slate-100 px-2 py-1 rounded-md w-9/12 outline-none active:outline-none tracking-widest"
                />
                <select
                  name=""
                  id=""
                  className="border border-slate-100 px-2 py-1 rounded-md w-3/12 outline-none active:outline-none tracking-widest"
                >
                  <option value="PM">PM</option>
                  <option value="AM">AM</option>
                </select>
              </div>
            </div>

          </div>
        </div>
      )}
    </>
  );
};

export default RestoInfo;
