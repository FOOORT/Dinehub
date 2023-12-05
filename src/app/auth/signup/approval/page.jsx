"use client";
import Image from "next/image";
import Link from "next/link";
import { GoHome } from "react-icons/go";

const Page = () => {
  return (
    <div className="w-screen bg-white h-screen flex justify-center items-center">
      <div className="bg-gray-50 w-[90%] md:w-5/6 lg:w-4/6 xl:w-2/6 flex flex-col justify-center items-center p-4 py-8 rounded-lg border">
        <h1 className="text-sm font-semibold text-center text-black">
          We will get back to you in less than 48hrs
        </h1>
        <div className=" p-24 rounded-lg">
          <Image
            layout="responsive"
            src="/image/undraw_approve.svg"
            alt="Approved"
            width={200}
            height={200}
          />
        </div>
        <h1 className="text-sm font-semibold text-center text-black py-8">
          Check your email
        </h1>
        <Link href="/">
          <button className="bg-black py-3 px-4 text-white rounded-lg flex gap-4 items-center duration-100 active:scale-90">
            <GoHome />
            Home
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Page;
