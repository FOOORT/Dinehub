import React from "react";
import Rating from "./rating";
import Card from "./Card/Card";
import ContactCard from "./Card/ContactCard";


const PayCard = () => {
  return (
    <div className="w-full flex flex-col justify-start items-end rounded-lg p-2 sticky top-24">
      <Rating/>
      <Card/>
      <ContactCard/>
    </div>
  );
};

export default PayCard;
