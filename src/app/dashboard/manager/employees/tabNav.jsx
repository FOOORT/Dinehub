"use client";
import React, { useState } from "react";
import ActionButton from "@/components/common/actionbutton";
import { FaPlus } from "react-icons/fa";
import { BsArrowUpRight } from "react-icons/bs";
import AddRestaurant from "@/components/common/Dashboard/admin/restaurant/modal/addrestaurant";
import AddUser from "@/components/common/Dashboard/admin/restaurant/modal/adduser";

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
  const HandleSingleUser = (e) => {
    e.preventDefault();
    alert("View single Employee");
  };
  return (
    <div className="mt-4 w-full">
      <div className="w-full flex justify-between items-center my-3">
        <ActionButton
          name="Add employee"
          icon={<FaPlus />}
          click={userHandleModal}
        />
        {addUserModal && <AddUser closeModal={userHandleModal} />}
      </div>
      <table className="bg-white w-full mt-2 text-sm rounded-lg" border="1">
        <thead className="">
          <tr className="h-8">
            <th className="text-left pl-4">#</th>
            <th className="text-left">Name</th>
            <th className="text-left hidden md:block">Info</th>
            <th className="text-left">Active plan</th>
            <th className="text-left hidden xl:block">Progress</th>
            <th className="text-left">Balance</th>
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
                  setSelectedTr(item);
                }}
              >
                <td className="pl-4">{index + 1}</td>
                <td>
                  {item.firstname} {item.lastname}
                  <div className="text-xs block md:hidden">
                    <h2>{item.email}</h2>
                    <p>{item.phone}</p>
                  </div>
                </td>
                <td className="hidden md:flex items-center h-1 pt-5">
                  <div className="flex flex-col w-full">
                    <h2 className="text-xs hidden md:block">{item.email}</h2>
                    <p>{item.phone}</p>
                  </div>
                </td>
                <td>
                  <p>{item.activeplan} rwf</p>
                  <p className="block xl:hidden mt-1">{item.progress} %</p>
                </td>
                <td className="hidden xl:block h-10">{item.progress} %</td>
                <td>34000 rwf</td>
                <td>
                  <ActionButton
                    icon={<BsArrowUpRight />}
                    className="px-2"
                    click={HandleSingleUser}
                  />
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
