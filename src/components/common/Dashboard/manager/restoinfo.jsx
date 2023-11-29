import React from "react";
import { FaRegCircleUser } from "react-icons/fa6";
import {
  MdAlternateEmail,
  MdOutlineLocalPhone,
  MdWhatsapp,
} from "react-icons/md";
import ActionButton from "../../actionbutton";

const RestoInfo = ({ updateProfile, setUpdateProfile }) => {
  return (
    <>
      {updateProfile ? (
        <div className="flex flex-col w-full gap-2 items-start">
          <h1 className="font-bold">Villa restauranta</h1>

          <p className="text-sm">Huye , kg 655 st</p>
          <p className="text-slate-700 text-sm">Joined since 2023 Dec 2018</p>

          {/* <div className="w-full flex flex-col gap-4 mt-4 border-t">
            <h1 className="font-bold mt-4">Manager info</h1>
            <div className="flex gap-2 items-center text-sm">
              <FaRegCircleUser />
              <h2>Reconfort daniel</h2>
            </div>
            <div className="flex gap-2 items-center text-sm">
              <MdAlternateEmail />
              <h2>reconfortdanny@gmail.com</h2>
            </div>
            <div className="flex gap-2 items-center text-sm">
              <MdOutlineLocalPhone />
              <h2>0780151067</h2>
            </div>
            <div className="flex gap-2 items-center text-sm">
              <MdWhatsapp />
              <h2>0780151067</h2>
            </div>
          </div> */}

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
            <label className="text-xs font-semibold">Restaurant name</label>
            <input
              type="text"
              value="Villa restaurant"
              className="border border-slate-100 px-2 py-1 rounded-md w-full outline-none active:outline-none"
            />
          </div>
          <div className="flex flex-col w-full gap-2 items-start mt-4">
            <label className="text-xs font-semibold">Restaurant address</label>
            <input
              type="text"
              value="Huye , kg 655 st"
              className="border border-slate-100 px-2 py-1 rounded-md w-full outline-none active:outline-none"
            />
          </div>

          {/* <h1 className="font-bold mt-4">Manager info</h1>
          <div className="grid grid-cols-2 gap-3 w-full">
            <div className="flex flex-col w-full gap-2 items-start mt-4">
              <label className="text-xs font-semibold">Firstname</label>
              <input
                type="text"
                value="Reconfort"
                className="border border-slate-100 px-2 py-1 rounded-md w-full outline-none active:outline-none"
              />
            </div>
            <div className="flex flex-col w-full gap-2 items-start mt-4">
              <label className="text-xs font-semibold">Lastname</label>
              <input
                type="text"
                value="Daniel"
                className="border border-slate-100 px-2 py-1 rounded-md w-full outline-none active:outline-none"
              />
            </div>
          </div>
          <div className="flex flex-col w-full gap-2 items-start mt-4">
            <label className="text-xs font-semibold">Email</label>
            <input
              type="email"
              value="reconfort@gmail.com"
              className="border border-slate-100 px-2 py-1 rounded-md w-full outline-none active:outline-none"
            />
          </div>
          <div className="grid grid-cols-2 gap-3 w-full">
            <div className="flex flex-col w-full gap-2 items-start mt-4">
              <label className="text-xs font-semibold">Phone number</label>
              <input
                type="number"
                value="0780151067"
                className="border border-slate-100 px-2 py-1 rounded-md w-full outline-none active:outline-none tracking-widest"
              />
            </div>
            <div className="flex flex-col w-full gap-2 items-start mt-4">
              <label className="text-xs font-semibold">Whatsapp number</label>
              <input
                type="number"
                value="0780151067"
                className="border border-slate-100 px-2 py-1 rounded-md w-full outline-none active:outline-none tracking-widest"
              />
            </div>
          </div> */}

          <div className="grid grid-cols-2 gap-3 w-full">
            <div className="flex flex-col w-full gap-2 items-start mt-4">
              <label className="text-xs font-semibold">Opening hours</label>
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
              <label className="text-xs font-semibold">Closing hours</label>
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
