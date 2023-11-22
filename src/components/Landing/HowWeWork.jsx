import React from "react";
import { FaCcAmazonPay, FaDatabase, FaHeart, FaUser } from "react-icons/fa";

const HowWeWork = () => {
  return (
    <section className='w-screen px-4 lg:px-12 py-8' id='operate'>
      <h1 className='uppercase text-5xl pt-[8%] font-semibold'>How we work</h1>
      <p className='mt-4'>This is how you can work with us , It’s easy</p>
      <div className='grid w-full grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-6'>
        <div className='w-full p-4 flex flex-col items-start justify-start gap-2 rounded-md duration-300 hover:bg-slate-100 scale-95 hover:scale-100'>
          <div className='bg-black p-4 rounded-full'>
            <FaUser className='text-white' />
          </div>
          <h2 className='text-xl font-semibold'>Create account</h2>
          <p>
            Sign up to become a member, granting you access to booking,
            subscribing, and more convenient features.
          </p>
        </div>
        <div className='w-full p-4 flex flex-col items-start justify-start gap-2 rounded-md duration-300 hover:bg-slate-100 scale-95 hover:scale-100'>
          <div className='bg-black p-4 rounded-full'>
            <FaHeart className='text-white' />
          </div>
          <h2 className='text-xl font-semibold'>Choose favorite</h2>
          <p>
            Select your favorite restaurant, subscribe for updates, and book
            meals conveniently.
          </p>
        </div>
        <div className='w-full p-4 flex flex-col items-start justify-start gap-2 rounded-md duration-300 hover:bg-slate-100 scale-95 hover:scale-100'>
          <div className='bg-black p-4 rounded-full'>
            <FaCcAmazonPay className='text-white' />
          </div>
          <h2 className='text-xl font-semibold'>Secure Pay </h2>
          <p>
            Choose a flexible meal plan, pay easily, and customize duration
            according to your convenience.
          </p>
        </div>
        <div className='w-full p-4 flex flex-col items-start justify-start gap-2 rounded-md duration-300 hover:bg-slate-100 scale-95 hover:scale-100'>
          <div className='bg-black p-4 rounded-full'>
            <FaDatabase className='text-white' />
          </div>
          <h2 className='text-xl font-semibold'>Manage your Dashboard</h2>
          <p>
            Manage dashboard, track subscriptions, access all restaurants.
            Convenient control.
          </p>
        </div>
      </div>
    </section>
  );
};

export default HowWeWork;
