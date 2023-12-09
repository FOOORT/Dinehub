"use client";
import React, { useState } from "react";
import ActionButton from "../../actionbutton";
import { FaPlus, FaTimes } from "react-icons/fa";

const initialTags = [
  "Italian",
  "Pasta",
  "Continental",
  "Pizza",
  "Asian",
  "African",
  "Dessert",
];

const RestoAbout = ({ updateProfile, setUpdateProfile }) => {
  const [tags, setTags] = useState(initialTags);
  const [cuisineTags, setCuisineTags] = useState([]);
  const [restaurantTags, setRestaurantTags] = useState([]);
  const [nearbyRestaurantTags, setNearbyRestaurantTags] = useState([]);
  const [newTag, setNewTag] = useState("");

  const handleAddTag = (setTags) => {
    if (newTag.trim() !== "") {
      setTags((prevTags) => [...prevTags, newTag]);
      setNewTag("");
    }
  };

  const handleRemoveTag = (index, updateTags) => {
    updateTags((prevTags) => {
      const newTags = [...prevTags];
      newTags.splice(index, 1);
      return newTags;
    });
  };

  const renderTags = (tagList, tagSetter, label) => (
    <div className="flex flex-col w-full gap-2 items-start mt-4 ">
      <label className="text-sm font-semibold">{label}</label>
      <div className="flex gap-1 w-full">
        <input
          type="text"
          value={newTag}
          onChange={(e) => setNewTag(e.target.value)}
          className="border border-slate-100 px-2 py-1 rounded-md w-full outline-none active:outline-none"
        />
        <ActionButton
          icon={<FaPlus />}
          className="rounded-full"
          click={() => handleAddTag(tagSetter)}
        />
      </div>
      <div className="w-full flex flex-wrap gap-2">
        {tagList.map((tag, index) => (
          <li
            key={index}
            className="border border-black text-sm rounded-md px-2 gap-2 py-2 flex justify-between items-center group duration-100"
          >
            {tag}
            <button
              onClick={() => handleRemoveTag(index, tagSetter)}
              className="scale-0 group-hover:scale-100 duration-150"
            >
              <FaTimes />
            </button>
          </li>
        ))}
      </div>
    </div>
  );

  return (
    <>
      {updateProfile ? (
        <div className="w-full mt-4 border-t pt-4">
          <h2 className="font-bold">About your restaurant</h2>
          <h3 className="text-sm font-medium my-2 text-slate-500">
            Cuisine Tags
          </h3>
          <ul className="flex gap-2 items-center flex-wrap w-full">
            {cuisineTags.map((tag, index) => (
              <li
                key={index}
                className="border border-black text-sm rounded-md px-4 py-2 flex justify-center items-center"
              >
                {tag}
              </li>
            ))}
          </ul>

          <h2 className="text-sm font-medium my-2 text-slate-500 mt-4">
            Related to your restaurant
          </h2>
          <ul className="flex gap-2 items-center flex-wrap w-full">
            {restaurantTags.map((tag, index) => (
              <li
                key={index}
                className="border border-black text-sm rounded-md px-4 py-2 flex justify-center items-center"
              >
                {tag}
              </li>
            ))}
          </ul>

          <h2 className="text-sm font-medium my-2 text-slate-500 mt-4">
            Restaurants around
          </h2>
          <ul className="flex gap-2 items-center flex-wrap w-full">
            {nearbyRestaurantTags.map((tag, index) => (
              <li
                key={index}
                className="border border-black text-sm rounded-md px-4 py-2 flex justify-center items-center"
              >
                {tag}
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <div className="w-full border-t pt-4">
          <h2 className="font-bold mt-4">Tags about your restaurant</h2>

          {renderTags(cuisineTags, setCuisineTags, "Add cuisine tags")}
          {renderTags(
            restaurantTags,
            setRestaurantTags,
            "Add tags related to your restaurant"
          )}
          {renderTags(
            nearbyRestaurantTags,
            setNearbyRestaurantTags,
            "Add nearby restaurant"
          )}
        </div>
      )}
    </>
  );
};

export default RestoAbout;
