import React from "react";

const SkeletonLoader = () => {
  return (
    <div className="flex flex-col gap-2">
      <div className="animate-pulse bg-gray-100 h-32 w-full rounded-lg"></div>
      <div className="animate-pulse bg-gray-100 h-8 w-3/5 rounded-lg"></div>
    </div>
  );
};

export default SkeletonLoader;
