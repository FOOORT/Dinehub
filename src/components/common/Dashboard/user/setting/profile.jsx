import DashboardContainer from "@/components/common/DashboardContainer";
import React from "react";
import ActionButton from "../../actionbutton";

const profile = () => {
  return (
    <DashboardContainer title="Profile">
      <ul className="flex flex-col gap-2">
        <li className="flex gap-6 items-center group py-2">
          <h3 className="text-slate-600">Contact email</h3>
          <span className="flex gap-2 items-center">
            <p>danny.reco2002@gmail.com</p>
            <button className="px-4 py-1 border rounded-md text-sm font-extralight text-black duration-300 scale-0 group-hover:scale-100 active:scale-105 group-hover:bg-black group-hover:text-white">
              Edit
            </button>
          </span>
        </li>
        <li className="flex gap-6 items-center group py-2">
          <h3 className="text-slate-600">Fullname</h3>
          <span className="flex gap-2 items-center">
            <p>Reconfort Daniel</p>
            <button className="px-4 py-1 border rounded-md text-sm font-extralight text-black duration-300 scale-0 group-hover:scale-100 active:scale-105 group-hover:bg-black group-hover:text-white">
              Edit
            </button>
          </span>
        </li>
        <li className="flex gap-6 items-center group py-2">
          <h3 className="text-slate-600">Username</h3>
          <span className="flex gap-2 items-center">
            <p>@Reconfort</p>
            <button className="px-4 py-1 border rounded-md text-sm font-extralight text-black duration-300 scale-0 group-hover:scale-100 active:scale-105 group-hover:bg-black group-hover:text-white">
              Edit
            </button>
          </span>
        </li>
        <li>
          <ActionButton />
        </li>
      </ul>
    </DashboardContainer>
  );
};

export default profile;
