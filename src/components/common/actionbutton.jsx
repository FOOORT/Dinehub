import Link from "next/link";
import React from "react";

const ActionButton = ({ name, icon, click }) => {
  return (
    <button
      className="bg-black text-white px-4 py-2 rounded-md flex items-center gap-3 duration-100 active:scale-110 border border-white text-xs"
      onClick={click}
    >
      {name}
      <span className="text-xs">{icon}</span>
    </button>
  );
};

export default ActionButton;
