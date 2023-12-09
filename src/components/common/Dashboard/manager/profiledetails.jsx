"use client";
import React, { useState } from "react";
import RestoInfo from "./restoinfo";
import RestoSubscription from "./restosubscription";
import BankAccount from "./bankaccount";
import RestoGallery from "./restogallery";
import ActionButton from "../../actionbutton";
import { MdModeEdit } from "react-icons/md";
import Controll from "../admin/settings/controll";
import RestoAbout from "./restoabout";

const ProfileDetails = ({ updateProfile, setUpdateProfile, activeNav }) => {
  return (
    <div className="w-full grid grid-cols-1 gap-4 mt-8">
      <div className="flex flex-col w-full p-4 gap-2 items-start">
        {activeNav === "home" && (
          <div className="w-full flex lg:grid flex-col lg:grid-cols-2 gap-4 lg:gap-8">
            
            <RestoInfo
              updateProfile={updateProfile}
              setUpdateProfile={setUpdateProfile}
            />
            
            
            <RestoGallery
              updateProfile={updateProfile}
              setUpdateProfile={setUpdateProfile}
            />
            
            
            <RestoAbout
              updateProfile={updateProfile}
              setUpdateProfile={setUpdateProfile}
            />
            
            <Controll
              updateProfile={updateProfile}
              setUpdateProfile={setUpdateProfile}
            />
            {!updateProfile && (
              <ActionButton
                name="Update Info"
                icon={<MdModeEdit />}
                className="px-3 py-3 text-center col-span-2 justify-center w-full mt-4"
              />
            )}
          </div>
        )}

        {activeNav === "subscription" && (
          <>
            <RestoSubscription
              updateProfile={updateProfile}
              setUpdateProfile={setUpdateProfile}
            />
            {!updateProfile && (
              <ActionButton
                name="Update Subscription"
                icon={<MdModeEdit />}
                className="px-3 py-3 text-center col-span-2 justify-center w-full mt-4"
              />
            )}
          </>
        )}

        {activeNav === "account" && (
          <>
            <BankAccount
              updateProfile={updateProfile}
              setUpdateProfile={setUpdateProfile}
            />
            {!updateProfile && (
              <ActionButton
                name="Update Account"
                icon={<MdModeEdit />}
                className="px-3 py-3 text-center col-span-2 justify-center w-full mt-4"
              />
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default ProfileDetails;
