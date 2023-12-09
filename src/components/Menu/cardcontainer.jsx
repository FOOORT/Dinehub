"use client";
import React from "react";
import Cards from "../common/Menu/cards";
import { useEffect } from "react";

import { getMenu, loadVerifiedMenu } from "@/store/restaurant/menu";
import { useDispatch, useSelector } from "react-redux";

const CardContainer = () => {
  const dispatch = useDispatch();
  const menus = useSelector(getMenu);

  useEffect(() => {
    dispatch(loadVerifiedMenu);
  }, []);

  console.log("Menus: ", menus);

  return (
    <div className="w-full grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 mt-2">
      {menus.map((dish, index) => (
        <Cards
          key={index}
          name={dish.menuName}
          desc={dish.menuDescription}
          price={dish.menuPrice}
          category={dish.menuCategory}
          restaurant={dish.restaurant}
          // status={dish.status}
          // ingredients={dish.ingredients}
          image={dish.menuImage}
        />
      ))}
    </div>
  );
};

export default CardContainer;
