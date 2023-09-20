import Link from "next/link";
import React from "react";
import { GoHome } from "react-icons/go";
import { TbUserCircle } from "react-icons/tb";

const Auth = () => {
  return (
    <div className="lg:flex gap-1 rounded-md items-center justify-center hidden duration-300">
      <div className="h-full text-sm px-4 py-3 rounded-md duration-300 hover:scale-95 hover:bg-slate-100">
        <Link href="/home">
          <GoHome className="text-xl" />
        </Link>
      </div>
      <Link href="/auth/signin">
        <button className="h-full text-sm px-4 py-3 hover:rounded-md duration-300 hover:scale-95 hover:bg-slate-100">
          Sign in
        </button>
      </Link>
      <Link href="/auth">
        <button className="h-full text-sm px-4 py-3 rounded-md duration-300 hover:scale-95 bg-black text-white flex items-center gap-2 hover:rounded-md">
          <TbUserCircle />
          Sign up
        </button>
      </Link>
    </div>
  );
};

export default Auth;
