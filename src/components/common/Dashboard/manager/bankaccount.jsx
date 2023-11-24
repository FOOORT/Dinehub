import Image from "next/image";
import React from "react";
import { SiVisa } from "react-icons/si";
import { RiMastercardLine } from "react-icons/ri";

const BankAccount = ({ updateProfile, setUpdateProfile }) => {
  return (
    <div className={`w-full flex flex-col gap-4 mt-4 border-t`}>
      {updateProfile ? (
        <>
          <h1 className="font-bold mt-4">Banking info</h1>
          {renderBankInfo("Momo pay", "/image/icon/mtn.png", "948391")}
          {renderBankInfo("Airtel money", "/image/icon/airtel.png", "948391")}
          {renderBankInfo("Visa Card", <SiVisa />, "9483 7429 3783 7290")}
          {renderBankInfo(
            "Master Card",
            <RiMastercardLine />,
            "3728 8902 7839 2729"
          )}
        </>
      ) : (
        <>
          {renderInputBankInfo("Momo pay", "/image/icon/mtn.png", "948391")}
          {renderInputBankInfo(
            "Airtel money",
            "/image/icon/airtel.png",
            "948391"
          )}
          {renderInputBankInfo("Visa Card", <SiVisa />, "9483-7429-3783-7290")}
          {renderInputBankInfo(
            "Master Card",
            <RiMastercardLine />,
            "9483-7429-3783-7290"
          )}
        </>
      )}
    </div>
  );
};

const renderBankInfo = (title, icon, number) => (
  <div className="flex gap-3 items-center text-sm w-full">
    <div className="flex gap-2 items-start text-sm">
      {typeof icon === "string" ? (
        <Image src={icon} alt={title} width={20} height={20} />
      ) : (
        icon
      )}
      <h2 className="font-bold">{title}</h2>
    </div>
    <h2 className="tracking-wider">{number}</h2>
  </div>
);

const renderInputBankInfo = (title, icon, value) => (
  <div className="flex flex-col w-full gap-2 items-start mt-4">
    <div className="flex flex-col gap-3 items-start text-sm w-full">
      <div className="flex gap-2 items-start text-sm">
        {typeof icon === "string" ? (
          <Image src={icon} alt={title} width={20} height={20} />
        ) : (
          icon
        )}
        <h2 className="font-bold">{title}</h2>
      </div>
      <input
        type={typeof value === "number" ? "number" : "text"}
        value={value}
        className="border border-slate-100 px-2 py-1 rounded-md w-full outline-none active:outline-none"
      />
    </div>
  </div>
);

export default BankAccount;
