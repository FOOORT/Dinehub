import React from "react";
import { FaPhoneAlt } from "react-icons/fa";

const ContactCard = () => {
  return (
    <div className="w-full rounded-xl p-4 mt-4 border">
      <h3 className="text-2xl py-2 font-medium flex items-center gap-2">
        <FaPhoneAlt className="text-xs" /> Contact
      </h3>
      <div className="border rounded-lg w-full">
        <div className="flex w-full">
          <div className="flex flex-col w-1/2 border p-2 rounded-l-md">
            <h2 className="text-lg font-medium py-2">Call</h2>
            <p className="text-xl font-normal">+250 788 888 898</p>
          </div>
          <div className="flex flex-col w-1/2 border p-2 rounded-r-md">
            <h2 className="text-lg font-medium py-2">Whatsapp</h2>
            <p className="text-xl font-normal">+250 788 888 898</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactCard;
