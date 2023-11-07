import Header from "@/components/Main/Header";
import React from "react";
import { AiOutlineShop } from "react-icons/ai";
import { BiUserCircle } from "react-icons/bi";
import Layout from "./Layout";
import Link from "next/link";

const page = () => {
  return (
    <Layout>
      <div className="w-screen bg-white h-screen flex justify-center items-center">
        {/* <Header /> */}
        <div className="bg-gray-50 w-[90%] md:w-6/6 lg:w-5/6 xl:w-4/6 flex flex-col justify-center items-center p-4 rounded-lg border">
          <h1 className="text-xl font-semibold text-center py-4">
            Join as Client or as Business
          </h1>
          <div className="flex flex-col md:flex-row gap-4 p-4 w-full">
            <Link
              href="auth/signup/user"
              className="w-full md:w-1/2 p-4 rounded-lg flex flex-col gap-2 scale-95 hover:scale-100 duration-300 border cursor-pointer"
            >
              <span className="w-16 h-16 flex flex-col justify-center items-center rounded-md border">
                <BiUserCircle className="text-xl" />
              </span>
              <h3 className="text-xl font-medium text-blue-600">Client</h3>
              <p>
                {" "}
                Join us now to explore the finest restaurants wherever you go.
                Register to access dining destinations at your fingertips.{" "}
              </p>
            </Link>
            <Link
              href="auth/signup/business"
              className="w-full md:w-1/2 p-4 rounded-lg flex flex-col gap-2 scale-95 hover:scale-100 duration-300 border cursor-pointer"
            >
              <span className="w-16 h-16 flex flex-col justify-center items-center rounded-md border">
                <AiOutlineShop className="text-xl" />
              </span>
              <h3 className="text-xl font-medium text-blue-600">Business</h3>
              <p>
                {" "}
                Elevate your restaurant business by registering with us. Unlock
                a world of opportunities and visibility.{" "}
              </p>
            </Link>
          </div>
          <div className="w-full flex flex-col md:flex-row justify-start items-start md:justify-between md:items-center gap-2 py-1 px-6">
            <Link href="/auth/signin">
              <p className="duration-300 scale-95 hover:scale-100 cursor-pointer hover:">
                Already have an account
                <span className="text-blue-600 ml-2">Sign in</span>
              </p>
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default page;
