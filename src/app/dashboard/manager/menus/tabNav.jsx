"use client";
import React, { useState } from "react";
import ActionButton from "@/components/common/actionbutton";
import { MdReadMore } from "react-icons/md";
import MenuCard from "@/components/common/Menu/menucard";
import { FaPlus } from "react-icons/fa";
import ManagerMenuModal from "@/components/common/Menu/managermenumodal";

const TabNav = ({ Dishes }) => {
  const [activeLink, setActiveLink] = useState("all");
  const [filteredDishes, setFilteredDishes] = useState(Dishes);
  const [displayedCategoriesLimit, setDisplayedCategoriesLimit] = useState(8);

  const uniqueCategories = Array.from(
    new Set(filteredDishes.map((item) => item.category))
  );
  const shouldDisplaySeeMore =
    uniqueCategories.length > displayedCategoriesLimit;
  const displayedCategories = shouldDisplaySeeMore
    ? uniqueCategories.slice(0, displayedCategoriesLimit)
    : uniqueCategories;

  const handleSeeMoreClick = () => {
    setDisplayedCategoriesLimit((prevLimit) => prevLimit + 5);
  };

  const handleLinkClick = (category) => {
    setActiveLink(category);
    const filterData =
      category === "all"
        ? Dishes
        : Dishes.filter((dish) => dish.category === category);
    setFilteredDishes(filterData);
  };

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
            // "See More" Button
            <ActionButton
              name="See more"
              icon={<MdReadMore />}
              click={handleSeeMoreClick}
            />
          )}
        </ul>

        {/* "Add Menu" Button and Modal */}
        <ActionButton
          name="Add Menu"
          icon={<FaPlus />}
          click={userHandleModal}
        />
        {addUserModal && <ManagerMenuModal closeModal={userHandleModal} />}
      </div>

      {/* Grid of Menu Cards */}
      <div className="w-full grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
        {filteredDishes.length === 0 ? (
          // Message when no dishes found
          <p>No dishes found for the selected category.</p>
        ) : (
          // Display Menu Cards
          filteredDishes.map((item, index) => (
            <MenuCard
              key={index}
              name={item.name}
              desc={item.details}
              price={item.price}
              category={item.category}
              restaurant={item.restaurant}
              status={item.status}
              ingredients={item.ingredients}
              image={item.image}
            />
          ))
        )}
      </div>

      {/* Page Navigation */}
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
