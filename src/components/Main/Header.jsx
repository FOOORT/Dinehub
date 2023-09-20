import React from "react";
import Image from "next/image";
import SearchFilter from "../common/SearchFilter";
import Auth from "../common/Auth";
import Hamburger from "../common/Main/Hamburger";
import Link from "next/link";

const Header = () => {
  return (
    <div className="w-screen bg-white/80 flex justify-between items-center p-2 fixed left-0 z-50 px-4 lg:px-12 top-0 backdrop-blur-md">
      <Link href="/">
        <Image src="/image/Logo.png" alt="Logo" width={50} height={50} />
      </Link>
      <SearchFilter />
      <Auth />
      <Hamburger />
    </div>
  );
};

export default Header;
