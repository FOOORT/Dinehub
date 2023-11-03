"use client";
import React, { useState } from "react";
import { BiDotsHorizontal } from "react-icons/bi";
// import ActionButton from "@/components/common/actionbutton";
import { BsFillEnvelopeAtFill } from "react-icons/bs";
// import { IoCall } from "react-icons/io";

const getButtonClass = (UserType) => {
  if (UserType === "approved") {
    return "bg-blue-100";
  } else if (UserType === "pending") {
    return "bg-green-100";
  } else {
    return "bg-red-200";
  }
};

const TabNav = ({ Users, setSelectedTr, selectedTr, handleRowClick }) => {
  const [activeLink, setActiveLink] = useState("all"); // Set the default active link
  const [filteredUsers, setFilteredUsers] = useState(Users);

  const handleLinkClick = (activeTab) => {
    setActiveLink(activeTab);
    const filterdData =
      activeTab === "all"
        ? Users
        : Users.filter((user) => {
            return user.decision === activeTab;
          });
    setFilteredUsers(filterdData);
  };

  const [options, setOptions] = useState(false);

  const handleMoreBtn = () => {
    setOptions((prev) => !prev);
  };

  const [selectedItem, setSelectedItem] = useState();
  return (
    <div className="mt-4 w-full">
      <div className="w-full flex justify-between items-center my-3">
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
              activeLink === "approved" ? "text-white bg-black" : ""
            }`}
            onClick={() => handleLinkClick("approved")}
          >
            Approved
          </li>
          <li
            className={`px-4 py-2 rounded-md text-xs font-medium ${
              activeLink === "pending" ? "text-white bg-black" : ""
            }`}
            onClick={() => handleLinkClick("pending")}
          >
            Pending
          </li>
          <li
            className={`px-4 py-2 rounded-md text-xs font-medium ${
              activeLink === "rejected" ? "text-white bg-black" : ""
            }`}
            onClick={() => handleLinkClick("rejected")}
          >
            Rejected
          </li>
        </ul>
      </div>
      <table className="bg-white w-full mt-2 text-sm rounded-lg">
        <thead className="">
          <tr className="h-8">
            <th className="text-left pl-4">#</th>
            <th className="text-left">Client</th>
            <th className="text-left hidden md:block">Information</th>
            <th className="text-left">Amount</th>
            <th className="text-left">Status</th>
            {/* <th className="text-left hidden xl:block">Status</th> */}
            <th className="text-left">Action</th>
            <th className="text-left"></th>
          </tr>
        </thead>
        {filteredUsers.map((item, index) => (
          <>
            <tbody key={index}>
              <tr
                className={`duration-200 hover:bg-slate-100 rounded-md ${
                  selectedTr === index ? "bg-slate-100" : ""
                }`}
                onClick={function (e) {
                  setSelectedTr(item);
                }}
              >
                <td className="pl-4">{index + 1}</td>
                <td>{item.username}</td>
                <td>
                  <p>{item.phone}</p>
                  <h2 className="text-xs block xl:hidden">{item.email}</h2>
                  <h3 className="text-xs block md:hidden text-slate-700">
                    {item.location}
                  </h3>
                </td>
                <td className="hidden md:flex items-start pt-1 flex-col">
                  <span className="text-sm flex gap-2 items-center">
                    <h1 className=" text-lg">{item.amount}</h1> rwf
                  </span>
                  <span className="text-sm flex gap-2 items-center -mt-1">
                    <h1 className=" text-lg">{item.duration}</h1> days
                  </span>
                </td>
                {/* <td className="hidden xl:block h-10">{item.email}</td> */}
                <td>
                  <button
                    className={`px-3 rounded-md py-2 text-xs font-medium w-5/6 ${getButtonClass(
                      item.decision
                    )}`}
                  >
                    {item.decision}
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
