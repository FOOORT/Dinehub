
import CardsContainer from "@/components/Main/CardsContainer";
import Footer from "@/components/Main/Footer";
import Header from "@/components/Main/Header";
import React from "react";

const page = () => {
  return (
    <section className="w-screen py-12">
      <Header />
      <div className="px-8 pt-20">
        <CardsContainer />
      </div>
      <Footer />
    </section>
  );
};

export default page;
