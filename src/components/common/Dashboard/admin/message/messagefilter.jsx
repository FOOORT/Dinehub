"use client";
import React, { useState } from "react";

const MessageFilter = () => {
  const [activeFilter, setActiveFilter] = useState("all");

  return (
    <div className="mt-4 flex border-b-2 border-red-100">
      <button
        className={`border-b-2 ${
          activeFilter === "all" ? `border-green-600` : `border-transparent`
        } px-4 py-2 hover:border-blue-400 duration-100 active:scale-90 -mb-[2px]`}
        onClick={() => setActiveFilter("all")}
      >
        All
      </button>
      <button
        className={`border-b-2 ${
          activeFilter === "unread" ? `border-blue-600` : `border-transparent`
        } px-4 py-2 hover:border-blue-400 duration-100 active:scale-90 -mb-[2px]`}
        onClick={() => setActiveFilter("unread")}
      >
        Unread
      </button>
      <button
        className={`border-b-2 ${
          activeFilter === "read" ? `border-slate-600` : `border-transparent`
        } px-4 py-2 hover:border-blue-400 duration-100 active:scale-90 -mb-[2px]`}
        onClick={() => setActiveFilter("read")}
      >
        Read
      </button>
    </div>
  );
};

export default MessageFilter;
