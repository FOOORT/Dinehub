import React from "react";
import StatsContainer from "./component/statscontainer";
import ReserveNow from "./component/reservenow";

const UserHome = () => {
  return (
    <div className="w-full flex flex-col gap-4">
      <StatsContainer />
      <ReserveNow />
    </div>
  );
};

export default UserHome;
