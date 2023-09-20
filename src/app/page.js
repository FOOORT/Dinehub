import CardsContainer from "@/components/Main/CardsContainer";
import FilterContainer from "@/components/Main/filtercontainer";
import Footer from "@/components/Main/Footer";
import Header from "@/components/Main/Header";
import React from "react";

const page = () => {
  return (
    <section className="w-screen py-12">
      <Header />
      <div className="px-4 lg:px-8 pt-8">
        <FilterContainer />
        <CardsContainer />
      </div>
      <Footer />
    </section>
  );
};

export default page;
