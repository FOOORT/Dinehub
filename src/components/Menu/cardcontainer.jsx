"use client";
import React from "react";
import Cards from "../common/Menu/cards";
import Dishes from "../json/menu";
import { useEffect, useState } from "react";

import { getMenu, loadMenu } from "@/store/restaurant/menu";
import { useDispatch, useSelector } from "react-redux";

const CardContainer = () => {
  const dispatch = useDispatch();
  const menus = useSelector(getMenu);

  useEffect(() => {
    dispatch(loadMenu);
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
