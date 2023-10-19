"use client";
import React, { useState } from "react";

const Changestatus = () => {
  const [on, setOn] = useState(false);

  return (
    <div
      className={`w-12 h-8 border  rounded-full flex  items-center p-1 ${
        on ? "bg-black justify-end" : "bg-white justify-start"
      }`}
      onClick={(e) => {
        e.preventDefault();
        setOn(!on);
      }}
    >
      <div
        className={`rounded-full h-6 w-6 ${on ? "bg-white" : "bg-black"}`}
      ></div>
    </div>
  );
};

export default Changestatus;
