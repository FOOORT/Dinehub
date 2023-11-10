"use client";
import { FcGoogle } from "react-icons/fc";
import Link from "next/link";

const ManagerAccount = ({
  setActive,
  firstname,
  setFirstname,
  lastname,
  setLastname,
  email,
  setEmail,
  password,
  setPassword,
  confirmPassword,
  setConfirmPassword,
}) => {
  return (
    <div className="bg-gray-50 w-[90%] md:w-5/6 lg:w-4/6 xl:w-2/6 flex flex-col justify-center items-center p-4 py-8 rounded-lg border">
      <h1 className="text-xl font-semibold text-center py-2">
        Let your business discoverable
      </h1>

      <div className="flex flex-col gap-4 p-4 w-full">
        <div className="flex flex-col md:flex-row gap-2 w-full">
          <div className="flex flex-col gap-2 w-full md:w-1/2">
            <label htmlFor="name">Firstname</label>
            <input
              type="text"
              placeholder="John"
              value={firstname}
              onChange={(e) => setFirstname(e.target.value)}
              className="border outline-none active:outline-none p-3 rounded-md"
            />
          </div>
          <div className="flex flex-col gap-2 w-full md:w-1/2">
            <label htmlFor="pass">Lastname</label>
            <input
              type="text"
              placeholder="Doe"
              value={lastname}
              onChange={(e) => setLastname(e.target.value)}
              className="border outline-none active:outline-none p-3 rounded-md"
            />
          </div>
        </div>
        <div className="flex flex-col gap-2 w-full">
          <label htmlFor="name">Email</label>
          <input
            type="text"
            placeholder="Johndoe@gmail.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="border outline-none active:outline-none p-3 rounded-md"
          />
        </div>
        <div className="flex flex-col md:flex-row gap-2 w-full">
          <div className="flex flex-col gap-2 w-full md:w-1/2">
            <label htmlFor="name">Password</label>
            <input
              type="password"
              placeholder="*******"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="border outline-none active:outline-none p-3 rounded-md"
            />
          </div>
          <div className="flex flex-col gap-2 w-full md:w-1/2">
            <label htmlFor="pass">Confirm Password</label>
            <input
              type="password"
              placeholder="*******"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="border outline-none active:outline-none p-3 rounded-md"
            />
          </div>
        </div>
        <button
          type="button"
          className="bg-black text-white py-3 rounded-md cursor-pointer"
          onClick={(e) => {
            e.preventDefault();
            setActive(false);
          }}
        >
          Continue
        </button>
      </div>
      <div className="w-full flex flex-col md:flex-row justify-start items-start md:justify-between md:items-center gap-2 p-4">
        <Link href="/signin">
          <p className="duration-300 scale-95 hover:scale-100 cursor-pointer text-md">
            Already have account
            <span className="text-blue-600 ml-2">Sign in</span> now
          </p>
        </Link>
      </div>
      <div className="flex w-full bg-blue-500 p-1 rounded-lg justify-start items-center gap-4 text-white scale-95 hover:scale-100 duration-300 cursor-pointer">
        <span className="p-2 rounded-md bg-white">
          <FcGoogle className="text-xl" />
        </span>
        Continue with google
      </div>
    </div>
  );
};

export default ManagerAccount;
