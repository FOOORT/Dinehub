import OptionsBtn from "@/components/common/optionsBtn";
import React from "react";

const RestoTable = ({ title, name, location, contact, email, decision }) => {
  return (
    <div className="w-full mt-4">
      <div className="w-full flex justify-between">
        <h1 className="text-lg pt-2 font-bold">{title}</h1>
        <button className="text-xs "></button>
      </div>
      <table className="w-full mt-2 text-sm" border="1">
        <thead className="bg-slate-300">
          <tr className="h-8">
            <th className="text-left pl-4">#</th>
            <th className="text-left">Name</th>
            <th className="text-left hidden md:block">Location</th>
            <th className="text-left">Contact</th>
            <th className="text-left hidden xl:block">Email</th>
            <th className="text-left">Decision</th>
            <th className="text-left"></th>
          </tr>
        </thead>
        <tbody>
          <tr className="h-10 border-b border-transparent hover:border-slate-400 duration-300">
            <td className="pl-4 bg-red-200 h-10">1</td>
            <td className="bg-blue-200">{name}</td>
            <td className="bg-yellow-200  hidden md:flex items-center h-1">
              {location}
            </td>
            <td className="bg-green-200">
              <p>{contact}</p>
              <h2 className="text-xs block xl:hidden">{email}</h2>
              <h3 className="text-xs block md:hidden text-slate-700">
                {location}
              </h3>
            </td>
            <td className="hidden xl:block bg-gray-200 h-10">{email}</td>
            <td>
              <button className="bg-red-100 px-3 rounded-md py-2 text-xs font-medium">
                {decision}
              </button>
            </td>
            <td>
              <OptionsBtn />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default RestoTable;
