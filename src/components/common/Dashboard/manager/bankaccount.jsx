import Image from "next/image";
import React from "react";
import { SiVisa } from "react-icons/si";
import { RiMastercardLine } from "react-icons/ri";

const BankAccount = () => {
  return (
    <div className="w-full flex flex-col gap-4 mt-4 border-t">
      <h1 className="font-bold mt-4">Banking info</h1>
      <div className="flex gap-3 items-center text-sm w-full">
        <div className="flex gap-2 items-start text-sm">
          <Image src="/image/icon/mtn.png" alt="MTN" width={20} height={20} />
          <h2 className="font-bold">Momo pay</h2>
        </div>
        <h2 className=" tracking-wider">******</h2>
      </div>
      <div className="flex gap-3 items-center text-sm w-full">
        <div className="flex gap-2 items-start text-sm">
          <Image
            src="/image/icon/airtel.png"
            alt="Airtel"
            width={20}
            height={20}
          />
          <h2 className="font-bold">Airtel money</h2>
        </div>
        <h2 className=" tracking-wider">******</h2>
      </div>
      <div className="flex gap-3 items-center text-sm w-full">
        <div className="flex gap-2 items-start text-sm">
          <SiVisa />
          <h2 className="font-bold">Visa Card</h2>
        </div>
        <h2 className=" tracking-wider">**** **** **** ****</h2>
      </div>
      <div className="flex gap-3 items-center text-sm w-full">
        <div className="flex gap-2 items-start text-sm">
          <RiMastercardLine />
          <h2 className="font-bold">Master Card</h2>
        </div>
        <h2 className=" tracking-wider">**** **** **** ****</h2>
      </div>
    </div>
  );
};

export default BankAccount;
