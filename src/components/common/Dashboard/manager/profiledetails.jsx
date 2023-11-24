"use client";
import React, { useState } from "react";
import RestoInfo from "./restoinfo";
import RestoSubscription from "./restosubscription";
import BankAccount from "./bankaccount";
import RestoGallery from "./restogallery";
import ActionButton from "../../actionbutton";
import { FaChevronLeft, FaChevronRight, FaEdit } from "react-icons/fa";
import Controll from "../admin/settings/controll";
import RestoAbout from "./restoabout";

const ProfileDetails = ({ updateProfile, setUpdateProfile }) => {
  const [moreInfo, setMoreInfo] = useState(false);
  return (
    <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-4">
      <div className="flex flex-col w-full p-4 mt-14 gap-2 items-start">
        <RestoInfo
          updateProfile={updateProfile}
          setUpdateProfile={setUpdateProfile}
        />
        <RestoSubscription
          updateProfile={updateProfile}
          setUpdateProfile={setUpdateProfile}
        />
        {moreInfo && (
          <RestoAbout
            updateProfile={updateProfile}
            setUpdateProfile={setUpdateProfile}
          />
        )}
      </div>
      <div className="bg-white p-4 rounded-md">
        <BankAccount
          updateProfile={updateProfile}
          setUpdateProfile={setUpdateProfile}
        />
        <RestoGallery
          updateProfile={updateProfile}
          setUpdateProfile={setUpdateProfile}
        />

        {moreInfo && (
          <Controll
            updateProfile={updateProfile}
            setUpdateProfile={setUpdateProfile}
          />
        )}
      </div>
      <div className="col-span-2 flex justify-between items-center mt-4">
        <ActionButton
          name={moreInfo ? "Less info" : "More info"}
          icon={moreInfo ? <FaChevronLeft /> : <FaChevronRight />}
          click={() => setMoreInfo((prev) => !prev)}
          className="w-2/6 px-5 py-3 bg-slate-200 !text-black text-center"
        />

        {!updateProfile && (
          <ActionButton
            name="Update"
            icon={<FaEdit />}
            className="px-5 py-3 m-2 w-full bg-blue-700 text-center"
            click={() => setUpdateProfile((prev) => !prev)}
          />
        )}
      </div>
    </div>
  );
};

export default ProfileDetails;
