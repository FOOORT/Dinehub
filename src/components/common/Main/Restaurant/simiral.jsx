import React from "react";
import Cards from "../cards";
import { Asset } from "@/components/Asset";

const Simiral = () => {
  return (
    <div className="w-full flex flex-col gap-4 justify-start items-start p-4 rounded-lg bg-white tex-black">
      <h2 className="text-2xl font-semibold">Simiral Restaurant</h2>
      <div className="w-full grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
        <Cards image={Asset.logo} name="Villa" location="South, Huye" />
        <Cards image={Asset.Image1} name="Obinasom" location="South, Huye" />
        <Cards image={Asset.Image2} name="E-Bis" location="South, Huye" />
        <Cards image={Asset.Image3} name="Fantastic" location="South, Huye" />
        <Cards image={Asset.Image4} name="Villas" location="South, Huye" />
      </div>
    </div>
  );
};

export default Simiral;
