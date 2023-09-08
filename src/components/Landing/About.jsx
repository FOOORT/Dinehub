import Image from "next/image";
import React from "react";
import { FaArrowRight } from "react-icons/fa";

const About = () => {
  return (
    <div className="w-full flex px-12  gap-4 py-4 group">
      <div className="flex bg-slate-50 p-12 rounded-md lg:rounded-l-full gap-12 ml-6 justify-center lg:justify-center">
        <Image
          src="/image/Plate.png"
          alt="Plain"
          width={320}
          height={300}
          className="w-56 h-56 duration-500 group:scale-100 hidden lg:block"
        />
        <div className="flex flex-col justify-start items-start gap-2">
          <h1 className="uppercase text-5xl font-semibold">About us</h1>
          <p>
            Our platform offers seamless access to any restaurant, resolving all
            your dining concerns. Book dishes from your preferred restaurants,
            and subscribe for flexible eating plans with chosen durations. Our
            professional service ensures easy, fast, and secure transactions,
            providing you with a hassle-free dining experience. Enjoy a wide
            range of culinary options and pay for subscriptions with confidence,
            knowing your data and transactions are protected. Savor the joy of
            dining, with convenience and peace of mind, all on our platform.
          </p>
          <button className="border border-black px-6 py-3 flex justify-center items-center gap-4 scale-95 hover:scale-100 mt-2 duration-300 rounded-md hover:bg-black hover:text-white">
            Full Story
            <FaArrowRight className="animate-bounce" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
