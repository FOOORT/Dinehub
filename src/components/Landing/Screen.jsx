import React from "react";

const Screen = () => {
  return (
    <ul className="bg-black text-white fixed z-50 bottom-0 left-0 px-4 py-2 m-2 rounded-md">
      <li className="hidden sm:hidden md:hidden lg:hidden xl:block">Xlarge</li>
      <li className="hidden sm:hidden md:hidden lg:block xl:hidden">Large</li>
      <li className="hidden sm:hidden md:block lg:hidden xl:hidden">Medium</li>
      <li className="hidden sm:block md:hidden lg:hidden xl:hidden">Small</li>
      <li className="block sm:hidden md:hidden lg:hidden xl:hidden">Xsmall</li>
    </ul>
  );
};

export default Screen;
