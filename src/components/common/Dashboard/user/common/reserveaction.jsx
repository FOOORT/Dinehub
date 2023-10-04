import React from "react";
import { FaPlusSquare } from "react-icons/fa";
import ActionButton from "../../../actionbutton";

const ReserveAction = () => {
  return (
    <div className="flex flex-col gap-2 items-end">
      <h2 className="text-xl font-bold text-black">
        1 <span className="text-sm text-slate-400"> Plate of </span> 1,300rwf
      </h2>
      <ActionButton />
    </div>
  );
};

export default ReserveAction;
