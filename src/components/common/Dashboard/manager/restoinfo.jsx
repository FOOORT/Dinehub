import React from "react";
import { FaRegCircleUser } from "react-icons/fa6";
import {
  MdAlternateEmail,
  MdOutlineLocalPhone,
  MdWhatsapp,
} from "react-icons/md";

const RestoInfo = () => {
  return (
    <div className="flex flex-col w-full gap-2 items-start">
      <h1 className="font-bold">Villa restaurant</h1>
      <p className="text-sm">Huye , kg 655 st</p>
      <p className="text-slate-700 text-sm">Joined since 2023 Dec 2018</p>

      <div className="w-full flex flex-col gap-4 mt-4 border-t">
        <h1 className="font-bold mt-4">Admin info</h1>
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
      </div>

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
  );
};

export default RestoInfo;
