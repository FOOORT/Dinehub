import React from 'react'
import { FaCcMastercard, FaWifi } from "react-icons/fa";

const BankCard = ({title, number, expdate, color}) => {
  return (
    <div className={`${color} text-white p-2 rounded-md flex items-start flex-col`}>
      <div className="flex flex-row justify-between w-full items-center">
        <h3 className="text-lg font-semibold">{title}</h3>
        {/* <FaFileAudio/> */}
        <FaWifi className="text-base font-extralight rotate-90" />
      </div>
      <h2 className="mt-4 text-xs font-thin">Dinehub</h2>
      <p className="mt-2 text-sm font-bold">{number}</p>
      <div className="flex flex-row justify-between w-full items-center mt-2">
        <h3 className=" text-base font-medium">{expdate}</h3>
        <FaCcMastercard className="text-sm" />
      </div>
    </div>
  );
}

export default BankCard