import React from "react";

const UsersContainer = () => {
  return (
    <div className="mt-2 border-b flex gap-2 px-2 py-1 hover:bg-slate-50 duration-150 hover:scale-105 cursor-pointer">
      <div className="w-12 h-10 rounded-full border border-green-500"></div>
      <div className="flex gap-2 flex-col">
        <div className="flex items-center justify-between">
          <h2 className="text-sm text-black font-semibold">Shelby Goode</h2>
          <p className="text-sm text-gray-400">1min ago</p>
        </div>
        <p className="text-sm text-gray-400">
          Lorem Ipsum is simply dummy text of the printing{" "}
        </p>
      </div>
    </div>
  );
};

export default UsersContainer;
