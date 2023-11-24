"use client";
import React, { useState } from "react";
import ManagerLayout from "../managerlayout";
import Image from "next/image";
import Header from "@/components/common/Dashboard/admin/header";
import Navs from "@/components/json/manager/navbar";
import ActionButton from "@/components/common/actionbutton";
import { FaEdit } from "react-icons/fa";
import ProfileDetails from "@/components/common/Dashboard/manager/profiledetails";

const Page = () => {
  const [updateProfile, setUpdateProfile] = useState(true);
  return (
    <ManagerLayout>
      <div className="flex justify-between items-start pr-2">
        <div className="w-full px-3">
          <Header Navs={Navs} />
          <div className="grid grid-cols-1 w-full rounded-md mt-4 gap-4">
            <div className="bg-white p-2 rounded-md flex flex-col ">
              <div className="bg-slate-200 w-full h-48 rounded-md flex justify-end items-start">
                <ActionButton
                  name="edit"
                  icon={<FaEdit />}
                  className="px-5 py-3 m-2"
                  click={() => setUpdateProfile((prev) => !prev)}
                />
              </div>
              <div className="flex w-full h-1 justify-start items-center px-8">
                <Image
                  src="/image/10.jpg"
                  alt="banner"
                  width={100}
                  height={50}
                  className="rounded-full border-4 border-white relative z-10"
                />
              </div>
              <ProfileDetails
                updateProfile={updateProfile}
                setUpdateProfile={setUpdateProfile}
              />
            </div>
          </div>
        </div>
      </div>
    </ManagerLayout>
  );
};

export default Page;
