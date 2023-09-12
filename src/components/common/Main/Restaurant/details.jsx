import React from "react";

const Details = () => {
  return (
    <div className="flex flex-col w-full gap-4">
      <h2>Hosted by Alee</h2>
      <p>
        <span>Open-now</span>
        <span>06:00A AM - 11:00 PM</span>
      </p>
      <div className="flex">
        <button>Overview</button>
        <button>Review</button>
        <button>Menus</button>
      </div>
      <h2>About this Place</h2>
    </div>
  );
};

export default Details;
