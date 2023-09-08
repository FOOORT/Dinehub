import React from "react";
import { FaEnvelope, FaLocationArrow, FaPhoneAlt } from "react-icons/fa";

const Contact = () => {
  return (
    <div className="bg-white w-full p-12">
      <div className="bg-gray-100 flex rounded-md">
        <div className="w-2/6">
          <p>Join Our Culinary Community</p>
          <h2>Contact us</h2>
          <span className="flex">
            <FaLocationArrow />
            <p>Southern, Huye</p>
          </span>
          <span className="flex">
            <FaPhoneAlt />
            <p>(+250) 788 698 973</p>
          </span>
          <span className="flex">
            <FaEnvelope />
            <p>dinehub@gmail.com</p>
          </span>
        </div>
        <div className="w-4/6">
            Hello world
        </div>
      </div>
    </div>
  );
};

export default Contact;
