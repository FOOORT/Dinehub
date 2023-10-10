import Image from "next/image";
import React from "react";

const LowQuantity = () => {
  return (
    <div className="bg-white w-full rounded-lg p-4">
      <div className="flex justify-between">
        <h2 className="text-lg font-semibold mb-3"> Low Quantity</h2>
        <span className="text-blue-500 text-xs">See all</span>
      </div>
      <div className="flex gap-1 w-full mt-1  ">
        <div className="bg-blue-300 w-[20%]">
          <Image
            src="/image/product1.png"
            alt="salsa"
            width={100}
            height={100}
          />
        </div>
        <div className="bg-green-300 col-span-2 flex flex-col justify-center w-[70%]">
          <h3>Tata salt</h3>
          <p>Remaining Quantity : 10 Packet</p>
        </div>
        <div className="bg-red-300 flex flex-col justify-center items-end w-[10%]">
          <span className="text-xs text-red-500 bg-red-100 p-2 rounded-lg">
            Low
          </span>
        </div>
      </div>
    </div>
  );
};

export default LowQuantity;
