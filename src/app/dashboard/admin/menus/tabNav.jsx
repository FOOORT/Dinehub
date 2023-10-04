"use client";
import React, { useState } from "react";
import ActionButton from "@/components/common/actionbutton";
import { FaPlus } from "react-icons/fa";
import { BiDotsHorizontal } from "react-icons/bi";
import AddRestaurant from "@/components/common/Dashboard/admin/restaurant/modal/addrestaurant";
import AddUser from "@/components/common/Dashboard/admin/restaurant/modal/adduser";
import Cards from "@/components/common/Menu/cards";
import { MdReadMore } from "react-icons/md";

const getButtonClass = (UserType) => {
  if (UserType === "admin") {
    return "bg-blue-100";
  } else if (UserType === "client") {
    return "bg-green-100";
  } else {
    return "bg-slate-200";
  }
};

const TabNav = ({ Menus, setSelectedTr, selectedTr, handleRowClick }) => {
  const [activeLink, setActiveLink] = useState("all"); // Set the default active link
  const [filteredMenus, setFilteredMenus] = useState(Menus);

  const uniqueCategories = Array.from(
    new Set(filteredMenus.map((item) => item.category))
  );

  const shouldDisplaySeeMore = uniqueCategories.length > 7;

  const displayedCategories = shouldDisplaySeeMore
    ? uniqueCategories.slice(0, 8)
    : uniqueCategories;

  const handleSeeMoreClick = () => {
    // You can implement the logic here to handle the "See More" button click
  };

  const handleLinkClick = (activeTab) => {
    // console.log("activeTab: ", activeTab);
    setActiveLink(activeTab);
    const filterdData =
      activeTab === "all"
        ? Menus
        : Menus.filter((user) => {
            return user.UserType === activeTab;
          });
    setFilteredMenus(filterdData);
  };

  // console.log("FILTERED Menus: ", filteredMenus);

  const [options, setOptions] = useState(false);

  const handleMoreBtn = () => {
    setOptions((prev) => !prev);
  };

  const [selectedItem, setSelectedItem] = useState();
  const [addUserModal, setAddUserModal] = useState(false);
  const userHandleModal = () => setAddUserModal((prev) => !prev);
  return (
    <div className="mt-4 w-full">
      <div className="w-full flex justify-between items-center my-3">
        <ul className="flex items-center p-[1px] rounded-lg gap-2 cursor-pointer overflow-x-visible">
          <li
            className={`px-4 py-2 rounded-md text-xs font-medium ${
              activeLink === "all" ? "text-white bg-black" : ""
            }`}
            onClick={() => handleLinkClick("all")}
          >
            All
          </li>

          {displayedCategories.map((category, index) => (
            <li
              key={index}
              className={`px-4 py-2 rounded-md text-xs font-medium ${
                activeLink === category ? "text-white bg-black" : ""
              }`}
              onClick={() => handleLinkClick(category)}
            >
              {category}
            </li>
          ))}
          {shouldDisplaySeeMore && (
            <ActionButton
              name="See more"
              icon={<MdReadMore />}
              click={handleSeeMoreClick}
            />
            // <button onClick={handleSeeMoreClick}>See More</button>
          )}
        </ul>
        <ActionButton
          name="Add Menu"
          icon={<FaPlus />}
          click={userHandleModal}
        />
        {addUserModal && <AddUser closeModal={userHandleModal} />}
      </div>

      <div className="w-full grid grid-cols-2 md:grid-cols-3  xl:grid-cols-4">
        {filteredMenus.map((item, index) => (
          <>
            <Cards
              name={item.name}
              desc={item.description}
              price={item.price}
              category={item.category}
              restaurant={item.restaurant}
            />
          </>
        ))}
      </div>
      {/* </table> */}

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
