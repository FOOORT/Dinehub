import Header from "@/components/Landing/Header";
import About from "@/components/Landing/About";
import Contact from "@/components/Landing/Contact";
import Footer from "@/components/Landing/Footer";
import HowWeWork from "@/components/Landing/HowWeWork";
import Screen from "@/components/Screen";
import Subscription from "@/components/Landing/Subscription";
import Welcome from "@/components/Landing/Welcome";
import React from "react";

const Home = () => {
  return (
    <section className="bg-blue-5 w-screen h-screen">
      <Header />
      <Welcome />
      <HowWeWork />
      <About />
      <Subscription />
      <Contact />
      <Footer />
      <Screen />
    </section>
  );
};

export default Home;
