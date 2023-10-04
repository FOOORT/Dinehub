import Link from "next/link";
import React from "react";
import { FaLocationArrow } from "react-icons/fa";
import { FiPhoneCall } from "react-icons/fi";
import { MdOutlineMail } from "react-icons/md";

const RightDetails = () => {
  return (
    <div className=" w-full h-full flex flex-col justify-between items-center pt-20 pb-8">
      <div className="w-full flex flex-col justify-center items-center">
        <div className="w-32 h-32 bg-red-300 rounded-full"></div>
        <h1 className="font-bold text-lg mt-2">Obinasom</h1>
        <p className="text-sm font-normal">Huye, near Barthos</p>
      </div>
      <div className="w-full">
        <div className=" w-full p-1">
          <p className="font-bold text-lg py-2">Contact Info</p>
          <div className="flex flex-col gap-2 ">
            <Link href="" className="flex items-center gap-2">
              <MdOutlineMail />
              <p>obinasom@gmail.com</p>
            </Link>
            <Link href="" className="flex items-center gap-2">
              <FiPhoneCall />
              <p>+250 257 015 1067</p>
            </Link>
            <Link href="" className="flex items-center gap-2">
              <FaLocationArrow />
              <p>Huye, South</p>
            </Link>
          </div>
        </div>

        <div className=" mt-10 w-full p-1">
          <p className="font-bold text-lg py-2">Contact Info</p>
          <div className="flex flex-col gap-2 ">
            <Link href="" className="flex items-center gap-2">
              <MdOutlineMail />
              <p>obinasom@gmail.com</p>
            </Link>
            <Link href="" className="flex items-center gap-2">
              <FiPhoneCall />
              <p>+250 257 015 1067</p>
            </Link>
            <Link href="" className="flex items-center gap-2">
              <FaLocationArrow />
              <p>Huye, South</p>
            </Link>
          </div>

          <div className="grid grid-cols-2 gap-2 bg-white mt-5">
            <button className="bg-blue-400 p-2 rounded-md">Approve</button>
            <button className="bg-red-400 p-2 rounded-md">Reject</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RightDetails;
