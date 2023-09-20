import Link from "next/link";
import React from "react";
import { FaCaretSquareLeft, FaCheck } from "react-icons/fa";

const Details = () => {
  return (
    <div className="flex flex-col w-full gap-4 rounded-md p-4">
      <h2 className="text-2xl font-medium">Hosted by Alee</h2>
      <p className="text-lg">
        <span className="text-blue-600 pr-2">Open-now</span>
        <span>06:00A AM - 11:00 PM</span>
      </p>
      <div className="flex gap-1">
        <button className="px-6 text-sm py-2 border-b hover:bg-black hover:text-white active:scale-95 border-blue-600 text-blue-600">
          Overview
        </button>
        <button className="px-6 text-sm py-2 border-b hover:bg-black hover:text-white active:scale-95 border-black">
          Review
        </button>
        <button className="px-6 text-sm py-2 border-b hover:bg-black hover:text-white active:scale-95 border-black">
          Menus
        </button>
      </div>
      <h2 className="text-2xl font-medium">About this Place</h2>
      <h3 className="text-xl font-medium">Cuisine</h3>
      <ul className="flex gap-2 item-center flex-wrap w-full">
        <li className="border border-black text-sm rounded-md px-4 py-2">
          Italia
        </li>
        <li className="border border-black text-sm rounded-md px-4 py-2">
          Pasta
        </li>
        <li className="border border-black text-sm rounded-md px-4 py-2">
          Continental
        </li>
        <li className="border border-black text-sm rounded-md px-4 py-2">
          Pizaa
        </li>
        <li className="border border-black text-sm rounded-md px-4 py-2">
          Asian
        </li>
        <li className="border border-black text-sm rounded-md px-4 py-2">
          African
        </li>
        <li className="border border-black text-sm rounded-md px-4 py-2">
          Dessert
        </li>
      </ul>

      <h3 className="text-xl font-medium">This place known for</h3>
      <p className="text-sm">
        Professional Service, Japanese Cuisine, Sanitised Service, Amazing Vibe,
        Great Host, Great Vibe
      </p>

      <h3 className="text-xl font-medium">Average Cost</h3>
      <p className="text-sm">2,500 rwf (approx.) Without alcohol</p>
      <p className="text-sm">Cash and Cards accepted</p>
      <p className="text-sm">Digital payments accepted</p>

      <h3 className="text-xl font-medium">More Info</h3>
      <ul className="grid grid-cols-2">
        <li className="flex items-center gap-2">
          <FaCheck className="text-blue-500" />
          <span>Takeaway Available</span>
        </li>
        <li className="flex items-center gap-2">
          <FaCheck className="text-blue-500" />
          <span>Full Bar Available</span>
        </li>
        <li className="flex items-center gap-2">
          <FaCheck className="text-blue-500" />
          <span>Table booking recommended</span>
        </li>
        <li className="flex items-center gap-2">
          <FaCheck className="text-blue-500" />
          <span>Smoking Area</span>
        </li>
        <li className="flex items-center gap-2">
          <FaCheck className="text-blue-500" />
          <span>Desserts and Bakes</span>
        </li>
        <li className="flex items-center gap-2">
          <FaCheck className="text-blue-500" />
          <span>Romantic Dining</span>
        </li>
        <li className="flex items-center gap-2">
          <FaCheck className="text-blue-500" />
          <span>Indoor Seating</span>
        </li>
      </ul>

      <h3 className="text-xl font-medium">Report an error in this listing</h3>
      <p className="text-sm">
        Help us make Dinehub more updated and relevant for everyone
      </p>
      <Link
        href="report"
        className="text-blue-500 font-medium flex items-center gap-2"
      >
        Report now
        <FaCaretSquareLeft />
      </Link>

      <h3 className="text-xl font-medium">RELATED TO AFRICANO RESTAURANT</h3>
      <Link href="/restaurant" className="text-sm">
        Restaurants in New Delhi, New Delhi Restaurants, Mehrauli restaurants,
        Best Mehrauli restaurants, South Delhi restaurants, Casual Dining in
        Delhi NCR, Casual Dining near me, Casual Dining in South Delhi, Casual
        Dining in Mehrauli, in Delhi NCR, near me, in South Delhi, in Mehrauli,
        New Year Parties in Delhi NCR, Christmas Special in Delhi NCR
      </Link>

      <h3 className="text-xl font-medium">
        RESTAURANTS AROUND AFRICANO RESTAURANT
      </h3>
      <Link href="/restaurant" className="text-sm">
        Lado Sarai restaurants, Qutab Institutional Area restaurants, Adchini
        restaurants, Geetanjali Enclave restaurants
      </Link>

      <h3 className="text-xl font-medium">
        FREQUENT SEARCHES LEADING TO THIS PAGE
      </h3>
      <Link href="/restaurant" className="text-sm">
        swan menu, swan mehrauli menu, swan new delhi, swan new delhi menu, swan
        restaurant
      </Link>
    </div>
  );
};

export default Details;
