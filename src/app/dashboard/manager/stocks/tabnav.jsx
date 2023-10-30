"use client";
import React, { useState } from "react";
import ActionButton from "@/components/common/actionbutton";
import { FaPlus } from "react-icons/fa";
import { BiDotsHorizontal } from "react-icons/bi";
import AddRestaurant from "@/components/common/Dashboard/admin/restaurant/modal/addrestaurant";
import AddUser from "@/components/common/Dashboard/admin/restaurant/modal/adduser";

const getButtonClass = (UserType) => {
  if (UserType === "admin") {
    return "bg-blue-100";
  } else if (UserType === "client") {
    return "bg-green-100";
  } else {
    return "bg-slate-200";
  }
};

const TabNav = ({ Users, setSelectedTr, selectedTr, handleRowClick }) => {
  const [activeLink, setActiveLink] = useState("all"); // Set the default active link
  const [filteredUsers, setFilteredUsers] = useState(Users);

  const handleLinkClick = (activeTab) => {
    // console.log("activeTab: ", activeTab);
    setActiveLink(activeTab);
    const filterdData =
      activeTab === "all"
        ? Users
        : Users.filter((user) => {
            return user.UserType === activeTab;
          });
    setFilteredUsers(filterdData);
  };

  const [options, setOptions] = useState(false);

  const handleMoreBtn = () => {
    setOptions((prev) => !prev);
  };

  const [selectedItem, setSelectedItem] = useState();
  const [addUserModal, setAddUserModal] = useState(false);
  const userHandleModal = () => setAddUserModal((prev) => !prev);
  return (
    <div className="mt-4 w-full bg-white p-4 rounded-lg">
      <ul className="flex items-center p-[1px] rounded-lg gap-2 cursor-pointer">
        <li
          className={`px-4 py-2 rounded-md text-xs font-medium ${
            activeLink === "all" ? "text-white bg-black" : ""
          }`}
          onClick={() => handleLinkClick("all")}
        >
          All
        </li>

        <li
          className={`px-4 py-2 rounded-md text-xs font-medium ${
            activeLink === "client" ? "text-white bg-black" : ""
          }`}
          onClick={() => handleLinkClick("client")}
        >
          Client
        </li>
        <li
          className={`px-4 py-2 rounded-md text-xs font-medium ${
            activeLink === "mini-admin" ? "text-white bg-black" : ""
          }`}
          onClick={() => handleLinkClick("mini-admin")}
        >
          Mini Admin
        </li>
      </ul>
      <table className="bg-white w-full mt-2 text-sm rounded-lg" border="1">
        <thead className="">
          <tr className="h-8">
            <th className="text-left pl-4">#</th>
            <th className="text-left">Name</th>
            <th className="text-left hidden md:block">Location</th>
            <th className="text-left">Contact</th>
            <th className="text-left hidden xl:block">Email</th>
            <th className="text-left">UserType</th>
            <th className="text-left"></th>
          </tr>
        </thead>
        {filteredUsers.map((item, index) => (
          <>
            <tbody key={index}>
              <tr
                className={`h-10 duration-200 hover:bg-slate-100 rounded-md ${
                  selectedTr === index ? "bg-slate-100" : ""
                }`}
                onClick={function (e) {
                  // console.log("itemherererererre", item);
                  // console.log("iiiindex", index);
                  setSelectedTr(item);
                }}
              >
                <td className="pl-4">{index + 1}</td>
                <td>
                  {item.firstname} {item.lastname}
                </td>
                <td className="hidden md:flex items-center h-1 pt-5">
                  {item.location}
                </td>
                <td>
                  <p>{item.phone}</p>
                  <h2 className="text-xs block xl:hidden">{item.email}</h2>
                  <h3 className="text-xs block md:hidden text-slate-700">
                    {item.location}
                  </h3>
                </td>
                <td className="hidden xl:block h-10">{item.email}</td>
                <td>
                  <button
                    className={`px-3 rounded-md py-2 text-xs font-medium w-5/6 ${getButtonClass(
                      item.UserType
                    )}`}
                  >
                    {item.UserType}
                  </button>
                </td>
                <td>
                  <button
                    className="active:bg-black active:text-white h-5 w-6 flex justify-center items-center rounded-md border relative z-40 "
                    onClick={() => {
                      handleMoreBtn;
                      setSelectedItem(index);
                    }}
                  >
                    <BiDotsHorizontal />
                  </button>
                  {selectedItem === index && options && (
                    <ul className="rounded-lg flex flex-col absolute gap-1 text-white text-xs font-semibold mt-7 z-50 active:z-50">
                      <button className="px-4 py-2 rounded-lg bg-blue-600">
                        Approve
                      </button>
                      <button className="px-4 py-2 rounded-lg bg-red-600">
                        Reject
                      </button>
                    </ul>
                  )}
                </td>
              </tr>
            </tbody>
          </>
        ))}
      </table>

      <div className="mt-4 w-full flex justify-between items-center">
        <button className="px-4 py-2 bg-black text-white text-xs rounded-lg font-semibold">
          Prev
        </button>
        <h2>
          Page <span className="font-semibold">1</span> of{" "}
          <span className="font-semibold">3</span>
        </h2>
        <button className="px-4 py-2 bg-black text-white text-xs rounded-lg font-semibold">
          Next
        </button>
      </div>
    </div>
  );
};

export default TabNav;
