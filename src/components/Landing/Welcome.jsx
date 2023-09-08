import Image from "next/image";
import React from "react";
import {
  FaArrowDown,
  FaFacebook,
  FaInstagram,
  FaTwitter,
} from "react-icons/fa";

const Welcome = () => {
  return (
    <div className="w-full bg-white h-screen flex flex-col justify-center items-start px-12 gap-4 pt-[20%]">
      <h3 className="text-3xl">Easy, Fast, Secure</h3>
      <h1 className="text-8xl uppercase font-medium">DINEHUB</h1>
      <h2 className="text-xl">
        Discover, subscribe to favorite restaurant effortlessly.
      </h2>
      <div className="flex justify-between items-center mt-16 w-full">
        <div className="flex gap-4">
          <Image
            src="/image/Rectangle6.png"
            alt="image1"
            width={300}
            height={100}
            className=" saturate-0 hover:saturate-100 duration-300 rounded-md w-1/3"
          />
          <Image
            src="/image/Rectangle7.png"
            alt="image2"
            width={300}
            height={100}
            className=" saturate-0 hover:saturate-100 duration-300 rounded-md w-1/3"
          />
          <Image
            src="/image/Rectangle8.png"
            alt="image3"
            width={300}
            height={100}
            className=" saturate-0 hover:saturate-100 duration-300 rounded-md w-1/3 hidden lg:block"
          />
        </div>
        <div className="flex flex-col justify-center items-center gap-4">
          <FaFacebook />
          <FaInstagram />
          <FaTwitter />
          <p className=" rotate-90">Scroll</p>
          <FaArrowDown className="animate-bounce" />
        </div>
      </div>
    </div>
  );
};

export default Welcome;
