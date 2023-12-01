"use client";
import React, { useEffect } from "react";
import Cards from "../common/Main/Cards";
import { useDispatch, useSelector } from "react-redux";
import SkeletonLoader from "./skeletonloader";
import { getRestaurant, loadRestaurant } from "@/store/restaurant/restaurant";

const CardsContainer = () => {
  const dispatch = useDispatch();
  const restaurant = useSelector(getRestaurant)

  useEffect(() => {
    dispatch(loadRestaurant);
  }, []);

  return (
    <div className='w-full grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 mt-2'>
    {restaurant && restaurant.length < 1 ? (
      <div className='w-full'>
        <SkeletonLoader />
        <SkeletonLoader />
      </div>
      ) : (
        restaurant.map((restaurant, index) => (
          <Cards
            key={index}
            image={restaurant.businessImage}
            name={restaurant.businessName}
            location={restaurant.businessAddress}
          />
          ))
          )}
          </div>
  );
};

export default CardsContainer;
