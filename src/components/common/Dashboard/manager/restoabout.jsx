import React from "react";

const Tags = [
  "Italian",
  "Pasta",
  "Continental",
  "Pizza",
  "Asian",
  "African",
  "Dessert",
];

const RestoAbout = () => {
  return (
    <div className="w-full mt-4 border-t pt-4">
      <h2 className="font-bold">About your restaurant</h2>
      <h3 className="text-xs font-medium my-2 text-slate-500">Cuisine Tags</h3>
      <ul className="flex gap-2 items-center flex-wrap w-full">
        {Tags.map((tag, index) => (
          <li
            key={index}
            className="border border-black text-xs rounded-md px-4 py-2 flex justify-center items-center"
          >
            {tag}
          </li>
        ))}
      </ul>

      <h2 className="text-xs font-medium my-2 text-slate-500 mt-4">
        Related to your restaurant
      </h2>
      <ul className="flex gap-2 items-center flex-wrap w-full">
        {Tags.map((tag, index) => (
          <li
            key={index}
            className="border border-black text-xs rounded-md px-4 py-2 flex justify-center items-center"
          >
            {tag}
          </li>
        ))}
      </ul>

      <h2 className="text-xs font-medium my-2 text-slate-500 mt-4">
        Restaurants around
      </h2>
      <ul className="flex gap-2 items-center flex-wrap w-full">
        {Tags.map((tag, index) => (
          <li
            key={index}
            className="border border-black text-xs rounded-md px-4 py-2 flex justify-center items-center"
          >
            {tag}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RestoAbout;
