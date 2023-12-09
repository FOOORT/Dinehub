"use client";
import React from "react";
import Sidebar from "@/components/common/Dashboard/sidebar";
import ActionButton from "@/components/common/actionbutton";
import { RiLogoutCircleRLine } from "react-icons/ri";
import { logoutUser } from "@/store/auth";
import { useRouter } from "next/navigation";
import { useDispatch } from "react-redux";

import Navs from "@/components/json/admin/navbar";
import withAuth from "@/utils/ProtectRouters";

const Layout = ({ children }) => {
  
  const dispatch = useDispatch();
  const router = useRouter();
  
  const handleLogout = () => {
    dispatch(logoutUser());
    router.push("/auth/signin/");
  }

  return (
    <div className="w-screen h-screen bg-slate-200 flex justify-between items-start">
      <div className="bg-white lg:w-[18vw] xl:w-[15vw]  h-screen hidden lg:block">
        <div className="lg:w-[17vw] xl:w-[14vw] h-full fixed pl-4 bg-white">
          <Sidebar Navs={Navs} />
          <ActionButton name="Logout" icon={<RiLogoutCircleRLine />} click={() => handleLogout()} className="w-[95%] justify-between"/>
        </div>
      </div>
      <div className="w-screen xl:ml-[15vw] lg:ml-[18vw] ml:w-[14vw] lg:w-[82vw] xl:w-[85vw] fixed overflow-y-scroll">
        {children}
      </div>
    </div>
  );
};

export default Layout;
// export default withAuth(Layout, ["Admin"]);
