import React from "react";
import Cards from "../common/Main/cards";
import { Asset } from "../Asset";

const CardsContainer = () => {
  return (
    <div className="w-full grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mt-2">
      <Cards image={Asset.logo} name="Villa" location="South, Huye" />
      <Cards image={Asset.Image1} name="Obinasom" location="South, Huye" />
      <Cards image={Asset.Image2} name="E-Bis" location="South, Huye" />
      <Cards image={Asset.Image3} name="Fantastic" location="South, Huye" />
      <Cards image={Asset.Image4} name="Villas" location="South, Huye" />
      <Cards image={Asset.Image5} name="Villa" location="South, Huye" />
      <Cards image={Asset.Image6} name="Villa" location="South, Huye" />
      <Cards image={Asset.Image7} name="Villa" location="South, Huye" />
      <Cards image={Asset.Image8} name="Villa" location="South, Huye" />
      <Cards image={Asset.Image9} name="Villa" location="South, Huye" />
    </div>
  );
};

export default CardsContainer;
