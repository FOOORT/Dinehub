import React from "react";
import { FaEnvelope, FaFacebook, FaInstagram, FaLocationArrow, FaPhoneAlt, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="bg-white w-full p-12">
      <div className="bg-black text-white flex flex-col gap-4 lg:flex-row rounded-md p-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="w-full flex flex-col gap-2">
            <h2 className="text-2xl font-semibold">Dinehub</h2>
            <p>
              We connect you with your preferred restaurants, offering
              customizable subscription plans that cater to your unique tastes
              and schedule. Join our culinary community and embark on a journey
              of unforgettable flavors. Welcome to a new era of dining!
            </p>
          </div>
          <div className="w-full flex flex-col gap-2">
            <h2 className="text-2xl font-semibold">Navigation</h2>
            <ul className="flex flex-col gap-2">
              <li>Home</li>
              <li>Subscription</li>
              <li>About us</li>
              <li>Contact us</li>
            </ul>
          </div>
          <div className="w-full flex flex-col gap-2">
            <h2 className="text-2xl font-semibold">Services</h2>
            <ul className="flex flex-col gap-2">
              <li>Subscribe</li>
              <li>Reserve Dishes</li>
              <li>Manage your Restaurants</li>
            </ul>
          </div>
          <div className="w-full flex flex-col gap-2">
            <h2 className="text-2xl font-semibold">Contact</h2>
            <ul className="flex flex-col gap-2">
              <li className="flex gap-4 items-center">
                <FaLocationArrow />
                <p className="text-lg">Southern, Huye</p>
              </li>
              <li className="flex gap-4 items-center">
                <FaPhoneAlt />
                <p className="text-lg">(+250) 788 698 973</p>
              </li>
              <li className="flex gap-4 items-center">
                <FaEnvelope />
                <p className="text-lg">dinehub@gmail.com</p>
              </li>
              <li className="flex gap-4 items-center">
                <FaInstagram />
                <FaTwitter />
                <FaFacebook />
                <FaEnvelope />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
