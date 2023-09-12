import React from "react";
import Layout from "./layout";
import Title from "@/components/common/Main/Restaurant/Title";
import ImageView from "@/components/common/Main/Restaurant/ImageView";
import Details from "@/components/common/Main/Restaurant/details";
import PayCard from "@/components/common/Main/Restaurant/paycard";

const page = () => {
  return (
    <Layout>
      <div className="w-screen h-screen flex flex-col justify-start items-start px-12 pt-24 gap-4">
        <Title />
        <ImageView />
        <div className="w-full bg-white p-2 flex gap-4">
          <div className="w-4/6">
            <Details/>
          </div>
          <div className="w-2/6">
            <PayCard/>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default page;
