"use client";
import React, { useState } from "react";
import Filter from "./filter";

const NotifyFilters = () => {
  // const [currentDate, setCurrentDate] = useState(new Date());

  const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };

  const currentDate = new Date();
  const formattedDate = currentDate.toLocaleDateString(undefined, options);

  const filterlist = [
    {
      name: "All",
      count: 47,
    },
    {
      name: "Orders",
      count: 19,
    },
    {
      name: "Subscription",
      count: 7,
    },
    {
      name: "Stocks",
      count: 12,
    },
    {
      name: "Message",
      count: 8,
    },
    {
      name: "Others",
      count: 4,
    },
  ];
  const [active, setActive] = useState("All");

  console.log("active", active);

  return (
    <div className="w-full flex flex-col gap-2">
      <h2 className=" text-black text-2xl">Notifications</h2>
      <p className="text-sm text-slate-500">{formattedDate}</p>

      <div className="mt-5 flex flex-col gap-2">
        {filterlist.map((item, i) => (
          <Filter
            key={i}
            name={item.name}
            count={item.count}
            active={active}
            setActive={setActive}
          />
        ))}
      </div>
    </div>
  );
};

export default NotifyFilters;
