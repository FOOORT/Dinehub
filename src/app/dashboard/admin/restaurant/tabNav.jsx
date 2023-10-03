"use client";
import TopFilter from "@/components/common/Dashboard/admin/restaurant/topfilter";
import OptionsBtn from "@/components/common/optionsBtn";
import React, { useState } from "react";
import ActionButton from "@/components/common/actionbutton";
import Link from "next/link";
import { FaPlus } from "react-icons/fa";
import { BiDotsHorizontal } from "react-icons/bi";
import AddRestaurant from "@/components/common/Dashboard/admin/restaurant/modal/addrestaurant";

const Restos = [
  {
    name: "Restos0",
    location: "South, Huye",
    contact: "07886337833",
    email: "reconfortdanny@gmail.com",
    decision: "rejected",
  },
  {
    name: "Restos3",
    location: "South, Huye",
    contact: "07886337833",
    email: "reconfortdanny@gmail.com",
    decision: "approved",
  },
  {
    name: "Restos2",
    location: "South, Huye",
    contact: "07886337833",
    email: "reconfortdanny@gmail.com",
    decision: "approved",
  },
  {
    name: "Restos3",
    location: "South, Huye",
    contact: "07886337833",
    email: "reconfortdanny@gmail.com",
    decision: "pending",
  },
  {
    name: "Restos4",
    location: "South, Huye",
    contact: "07886337833",
    email: "reconfortdanny@gmail.com",
    decision: "rejected",
  },
  {
    name: "Restos5",
    location: "South, Huye",
    contact: "07886337833",
    email: "reconfortdanny@gmail.com",
    decision: "pending",
  },
  {
    name: "Restos6",
    location: "South, Huye",
    contact: "07886337833",
    email: "reconfortdanny@gmail.com",
    decision: "approved",
  },
  {
    name: "Restos7",
    location: "South, Huye",
    contact: "07886337833",
    email: "reconfortdanny@gmail.com",
    decision: "rejected",
  },
  {
    name: "Restos8",
    location: "South, Huye",
    contact: "07886337833",
    email: "reconfortdanny@gmail.com",
    decision: "pending",
  },
  {
    name: "Restos9",
    location: "South, Huye",
    contact: "07886337833",
    email: "reconfortdanny@gmail.com",
    decision: "rejected",
  },
  {
    name: "Restos10",
    location: "South, Huye",
    contact: "07886337833",
    email: "reconfortdanny@gmail.com",
    decision: "approved",
  },
  {
    name: "Restos11",
    location: "South, Huye",
    contact: "07886337833",
    email: "reconfortdanny@gmail.com",
    decision: "pending",
  },
  {
    name: "Restos12",
    location: "South, Huye",
    contact: "07886337833",
    email: "reconfortdanny@gmail.com",
    decision: "pending",
  },
  {
    name: "Restos13",
    location: "South, Huye",
    contact: "07886337833",
    email: "reconfortdanny@gmail.com",
    decision: "pending",
  },
  {
    name: "Restos14",
    location: "South, Huye",
    contact: "07886337833",
    email: "reconfortdanny@gmail.com",
    decision: "pending",
  },
];

const getButtonClass = (decision) => {
  if (decision === "rejected") {
    return "bg-red-100";
  } else if (decision === "approved") {
    return "bg-green-100";
  } else {
    return "bg-blue-100";
  }
};

const TabNav = () => {
  const [activeLink, setActiveLink] = useState("all"); // Set the default active link
  const [filteredRestos, setFilteredRestos] = useState(Restos);

  const handleLinkClick = (activeTab) => {
    // console.log("activeTab: ", activeTab);
    setActiveLink(activeTab);
    const filterdData =
      activeTab === "all"
        ? Restos
        : Restos.filter((resto) => {
            return resto.decision === activeTab;
          });
    setFilteredRestos(filterdData);
  };

  // console.log("FILTERED RESTOS: ", filteredRestos);

  const [options, setOptions] = useState(false);

  const handleMoreBtn = () => {
    setOptions((prev) => !prev);
  };

  const [selectedItem, setSelectedItem] = useState();

  const [addRestoModal, setAddRestoModal] = useState(false);
  const restoHandleModal = () => setAddRestoModal((prev) => !prev);
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
              activeLink === "pending" ? "text-white bg-black" : ""
            }`}
            onClick={() => handleLinkClick("pending")}
          >
            Pending
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
              activeLink === "rejected" ? "text-white bg-black" : ""
            }`}
            onClick={() => handleLinkClick("rejected")}
          >
            Rejected
          </li>
        </ul>
        <ActionButton
          name="Add restaurant"
          icon={<FaPlus />}
          click={restoHandleModal}
        />
        {addRestoModal && <AddRestaurant closeModal={restoHandleModal} />}
      </div>

      <table className="bg-white w-full mt-2 text-sm rounded-lg" border="1">
        <thead className="">
          <tr className="h-8">
            <th className="text-left pl-4">#</th>
            <th className="text-left">Name</th>
            <th className="text-left hidden md:block">Location</th>
            <th className="text-left">Contact</th>
            <th className="text-left hidden xl:block">Email</th>
            <th className="text-left">Decision</th>
            <th className="text-left"></th>
          </tr>
        </thead>
        {filteredRestos.map((item, index) => (
          <>
            <tbody>
              <tr className="h-10 duration-200 hover:bg-slate-100 rounded-md">
                <td className="pl-4">{index + 1}</td>
                <td>{item.name}</td>
                <td className="hidden md:flex items-center h-1">
                  {item.location}
                </td>
                <td>
                  <p>{item.contact}</p>
                  <h2 className="text-xs block xl:hidden">{item.email}</h2>
                  <h3 className="text-xs block md:hidden text-slate-700">
                    {item.location}
                  </h3>
                </td>
                <td className="hidden xl:block h-10">{item.email}</td>
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
