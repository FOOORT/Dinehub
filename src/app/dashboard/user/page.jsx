import Layout from '@/components/Dashboard/user/layout';
import SideBar from '@/components/Dashboard/user/sidebar';
import Header from '@/components/Main/Header'
import React from 'react'

const page = () => {
  return (
    <div className="w-screen h-screen flex justify-start items-start pt-20">
      <Header />
      <div className="w-full flex flex-col lg:flex-row gap-4 px-4 lg:px-12 bg-white">
        <div className="w-full lg:w-3/12">
          <SideBar />
        </div>
        <div className="w-full lg:w-9/12">
          <Layout />
        </div>
      </div>
    </div>
  );
}

export default page
