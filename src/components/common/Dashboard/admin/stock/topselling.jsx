import React from "react";

const TopSelling = () => {
  return (
    <div className="bg-white w-full rounded-lg p-4">
      <div className="flex justify-between">
        <h2 className="text-lg font-semibold mb-3">Top selling</h2>
        <span className="text-blue-500 text-xs">See all</span>
      </div>
      <table className="w-full">
        <thead>
          <th>Name</th>
          <th>Sold Quantity</th>
          <th>Remaining Quantity</th>
          <th>Price</th>
        </thead>
        <tbody>
          <td>Pizza</td>
          <td>30</td>
          <td>12</td>
          <td>100 rwf</td>
        </tbody>
      </table>
    </div>
  );
};

export default TopSelling;
