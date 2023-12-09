"use client";
import React from "react";
import Navs from "@/components/json/manager/navbar";
import Sidebar from "@/components/common/Dashboard/sidebar";
import ActionButton from "@/components/common/actionbutton";
import { RiLogoutCircleRLine } from "react-icons/ri";
import { useDispatch } from "react-redux";
import { logoutUser } from "@/store/auth";
import { useRouter } from "next/navigation";

const Layout = ({ children }) => {
  const dispatch = useDispatch();
  const router = useRouter();

  const handleLogout = () => {
    dispatch(logoutUser());
    router.push("/auth/signin");
  }
  return (
    <div className="w-screen min-h-screen bg-slate-200 flex justify-between items-start pb-4">
      <div className=" lg:w-[18vw] xl:w-[15vw]  h-screen hidden lg:block">
        <div className="lg:w-[17vw] xl:w-[14vw] min-h-screen fixed pl-4 bg-white">
          <Sidebar Navs={Navs} />
          <ActionButton name="Logout" icon={<RiLogoutCircleRLine />} click={() => handleLogout()} className="w-[95%] justify-between"/>
        </div>
      </div>
      <div className="w-screen ml:w-[14vw] lg:w-[88vw] xl:w-[95vw] overflow-y-scroll px-3 duration-150">
        {children}
      </div>
    </div>
  );
};

export default Layout;
// export default withAuth(ManagerLayout, ["Manager"]);
