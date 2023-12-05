import OptionsBtn from "@/components/common/optionsBtn";
import Image from "next/image";
import React from "react";

const Notifyitem = () => {
  return (
    <div className="w-full flex gap-4 items-center border-l-2 border-blue-500 px-4 py-1 rounded-md hover:bg-slate-100 cursor-pointer duration-100">
      <div className="bg-white h-full p-2 rounded-full border">
        <Image
          layout="responsive"
          src="/image/Rectangle23.png"
          alt="Profile"
          width="130"
          height="30"
        />
      </div>
      <h2>
        <b> Reconfort Daniel</b>
        <span className="text-sm pl-1">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Est totam ut
          eligendi minus consequuntur dolorum beatae provident veritatis,
          corrupti ipsa sunt doloribus maxime ipsum consequatur voluptas
          possimus fugit voluptates fuga.
        </span>
      </h2>
      <div className="flex flex-col gap-4">
        <h3 className=" whitespace-nowrap text-sm">1 hr ago</h3>
        <OptionsBtn />
      </div>
    </div>
  );
};

export default Notifyitem;
