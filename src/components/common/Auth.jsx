import Link from 'next/link';
import React from 'react'
import { GoHome } from 'react-icons/go';
import { TbUserCircle } from 'react-icons/tb';

const Auth = () => {
  return (
    <div className="bg-white p-1 lg:flex gap-1 rounded-md items-center justify-center hidden scale-90 hover:scale-100 duration-500 border">
      <div className="h-full text-sm px-4 py-3 rounded-md duration-300 scale-90 hover:scale-100 hover:bg-slate-100">
        <Link href="/home">
          <GoHome className="text-2xl" />
        </Link>
      </div>
      <button className="h-full text-xl px-4 py-3 hover:rounded-md duration-300 scale-90 hover:scale-100 hover:bg-slate-100">
        Sign in
      </button>
      <button className="h-full text-xl px-4 py-3 rounded-md duration-300 scale-90 hover:scale-100 bg-black text-white flex items-center gap-2 hover:rounded-md">
        <TbUserCircle />
        Sign up
      </button>
    </div>
  );
}

export default Auth
