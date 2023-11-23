"use client";
import React, { useState } from "react";
import RestoInfo from "./restoinfo";
import RestoSubscription from "./restosubscription";
import BankAccount from "./bankaccount";
import RestoGallery from "./restogallery";
import ActionButton from "../../actionbutton";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import Controll from "../admin/settings/controll";
import RestoAbout from "./restoabout";

const ProfileDetails = () => {
  const [moreInfo, setMoreInfo] = useState(true);
  return (
    <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-4">
      <div className="flex flex-col w-full p-4 mt-14 gap-2 items-start">
        <RestoInfo />
        <RestoSubscription />
        {moreInfo && <RestoAbout />}
      </div>
      <div className="bg-white p-4 rounded-md">
        <BankAccount />
        <RestoGallery />

        {moreInfo && <Controll />}
      </div>
      <div className="col-span-2 flex justify-center items-center">
        <ActionButton
          name={moreInfo ? "Less info" : "More info"}
          icon={moreInfo ? <FaChevronLeft /> : <FaChevronRight />}
          click={() => setMoreInfo((prev) => !prev)}
          className="w-auto mt-4 p-4"
        />
      </div>
    </div>
  );
};

export default ProfileDetails;
