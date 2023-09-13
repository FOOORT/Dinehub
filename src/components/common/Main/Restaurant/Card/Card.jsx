import Link from "next/link";
import React from "react";

const Card = () => {
  return (
    <div className="w-full rounded-xl p-4 mt-2 border">
      <h3 className="text-2xl py-2 font-medium">Total : 64,000 rwf</h3>
      <div className="rounded-lg w-full">
        <div className="flex w-full">
          <div className="flex flex-col w-1/2 p-2 border rounded-tl-md">
            <h2 className="text-lg font-medium">Month</h2>
            <input
              type="number"
              value="1"
              className="w-full p-4 rounded-md outline-none active:outline-none"
            />
          </div>
          <div className="flex flex-col w-1/2 p-2 border rounded-tr-md">
            <h2 className="text-lg font-medium">Day</h2>
            <input
              type="number"
              value="30"
              className="w-full p-4 rounded-md outline-none active:outline-none"
            />
          </div>
        </div>
        <div className="flex w-full">
          <div className="flex flex-col w-full p-2 border rounded-b-md">
            <h2 className="text-lg font-medium">Month</h2>
            <input
              type="number"
              value="1"
              className="w-full p-4 rounded-md outline-none active:outline-none"
            />
          </div>
        </div>
        <Link href="/auth/signin">
          <button className="w-full bg-black py-4 px-2 rounded-md text-white font-medium mt-2 scale-95 hover:scale-100 duration-300">
            Sign in
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Card;
