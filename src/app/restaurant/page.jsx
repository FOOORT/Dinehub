import React from "react";
import Layout from "./layout";
import Title from "@/components/common/Main/Restaurant/title";
import ImageView from "@/components/common/Main/Restaurant/imageview";
import Details from "@/components/common/Main/Restaurant/details";
import PayCard from "@/components/common/Main/Restaurant/paycard";
import Simiral from "@/components/common/Main/Restaurant/simiral";

const page = () => {
  return (
    <Layout>
      <div className="w-screen flex flex-col justify-start items-start px-4 lg:px-12 pt-24 gap-4 pb-16">
        <Title />
        <Image layout="responsive" View />
        <div className="w-full flex flex-col lg:flex-row gap-4">
          <div className="w-full lg:w-4/6">
            <Details />
          </div>
          <div className="w-full lg:w-2/6">
            <PayCard />
          </div>
        </div>
        <Simiral />
      </div>
    </Layout>
  );
};

export default page;
