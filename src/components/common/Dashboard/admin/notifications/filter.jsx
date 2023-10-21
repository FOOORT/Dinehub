"use client";
import React, { useState } from "react";

const Filter = ({ name, count, active, setActive }) => {
  let borderColor = "";

  if (name === "All") {
    borderColor = "border-green-500";
  } else if (name === "Orders") {
    borderColor = "border-black";
  } else if (name === "Message") {
    borderColor = "border-blue-500";
  } else if (name === "Subscription") {
    borderColor = "border-orange-600";
  } else if (name === "Stocks") {
    borderColor = "border-green-500";
  } else {
    borderColor = "border-indigo-500";
  }

  return (
    <div
      className={`flex gap-2 w-full border-l-2 ${borderColor} justify-between p-4 cursor-pointer  duration-100  hover:rounded-md ${
        active === name
          ? "bg-black rounded-md text-white"
          : "bg-transparent text-black rounded-none"
      }`}
      onClick={(e) => {
        e.preventDefault();
        setActive(name);
      }}
    >
      <h3>{name}</h3>
      <p>{count}</p>
    </div>
  );
};

export default Filter;
