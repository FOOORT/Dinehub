import React from "react";
import StatsContainer from "./component/statscontainer";
import ReserveNow from "./component/reservenow";

const Layout = () => {
  return (
    <div className="w-full p-4 flex flex-col gap-4">
      <StatsContainer />
      <ReserveNow/>
    </div>
  );
};

export default Layout;
