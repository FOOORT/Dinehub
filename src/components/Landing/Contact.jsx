import React from "react";
import { FaEnvelope, FaLocationArrow, FaPhoneAlt } from "react-icons/fa";

const Contact = () => {
  return (
    <div className="bg-white w-full p-12">
      <div className="bg-gray-100 flex flex-col gap-4 lg:flex-row rounded-md p-12">
        <div className=" w-full lg:w-2/6">
          <p>Join Our Culinary Community</p>
          <h2 className="uppercase text-5xl font-semibold my-2 mb-6">
            Contact us
          </h2>
          <span className="flex gap-4 items-center">
            <FaLocationArrow />
            <p className="text-lg">Southern, Huye</p>
          </span>
          <span className="flex gap-4 items-center">
            <FaPhoneAlt />
            <p className="text-lg">(+250) 788 698 973</p>
          </span>
          <span className="flex gap-4 items-center">
            <FaEnvelope />
            <p className="text-lg">dinehub@gmail.com</p>
          </span>
        </div>
        <div className="w-full lg:w-4/6 grid grid-cols-1 gap-2 p-0 lg:p-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
            <div className="flex flex-col">
              <label htmlFor="Name">Names</label>
              <input
                type="text"
                placeholder="John doe"
                className="text-lg p-2 rounded-md"
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="Email">Email</label>
              <input
                type="text"
                placeholder="example@gmail.com"
                className="text-lg p-2 rounded-md"
              />
            </div>
          </div>
          <div className="grid grid-cols-1 gap-2">
            <div className="flex flex-col">
              <label htmlFor="Subject">Subject</label>
              <input
                type="text"
                placeholder="Your subject"
                className="text-lg p-2 rounded-md"
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="Message">Message</label>
              <textarea
                name=""
                id=""
                cols="30"
                rows="5"
                className="text-lg p-2 rounded-md"
              >
                Your message ...
              </textarea>
            </div>
            <input
              type="submit"
              value="Send us message"
              className="text-lg p-2 rounded-md bg-black text-white"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
