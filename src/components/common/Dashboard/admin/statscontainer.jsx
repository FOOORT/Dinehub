import React from "react";
import StatsCard from "../../StatsCard";
import { LuGalleryHorizontal } from "react-icons/lu";
import { AiOutlineCheck, AiOutlineDelete } from "react-icons/ai";
import { TbProgressCheck } from "react-icons/tb";

const StatsContainer = () => {
  return (
    <div className="w-full grid grid-cols-2 md:grid-cols-2 xl:grid-cols-4 mt-4 gap-4  bg-">
      <StatsCard
        icon={<LuGalleryHorizontal className="text-base text-blue-600" />}
        title="15"
        details="All restaurant"
      />
      <StatsCard
        icon={<AiOutlineCheck className="text-base text-blue-600" />}
        title="5"
        details="Approved"
      />
      <StatsCard
        icon={<TbProgressCheck className="text-base text-blue-600" />}
        title="7"
        details="Pending"
      />
      <StatsCard
        icon={<AiOutlineDelete className="text-base text-blue-600" />}
        title="3"
        details="Rejected"
      />
    </div>
  );
};

export default StatsContainer;
