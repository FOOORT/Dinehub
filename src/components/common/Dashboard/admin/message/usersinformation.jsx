import SearchInput from "@/components/common/SearchInput";
import React from "react";
import { IoMdAdd } from "react-icons/io";
import MessageFilter from "./messagefilter";
import UsersContainer from "./userscontainer";

const UsersInformation = () => {
  return (
    <div className="w-full">
      <div className="flex justify-between items-center">
        <h2>Message</h2>
        <button className="bg-black text-white w-8 h-8 flex justify-center items-center rounded-full">
          <IoMdAdd />
        </button>
      </div>
      <div className="pt-4">
        <SearchInput />
      </div>
      <MessageFilter />
      <div className="mt-3">
        <UsersContainer />
        <UsersContainer />
        <UsersContainer />
        <UsersContainer />
        <UsersContainer />
        <UsersContainer />
      </div>
    </div>
  );
};

export default UsersInformation;
