import React from "react";
import StatsContainer from "../user/component/statscontainer";
import StatsCard from "../../StatsCard";

const RightLayout = () => {
  return (
    <div className="bg-red-100 right-0 w-full p-2 lg:p-4">
      <h1 className="font-bold">Jeans sikora</h1>
      <p className="text-sm my-2 mb-4">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore,
        dolorum! Rem quas illo, incidunt natus reprehenderit quibusdam
        temporibus dolore eum enim. Aspernatur aperiam maiores molestias
        deleniti repellendus, cum voluptatem corporis.
      </p>
      <div className="grid grid-cols-1 gap-2">
        <StatsCard />
        <StatsCard />
        <StatsCard />
        <StatsCard />
      </div>
    </div>
  );
};

export default RightLayout;
