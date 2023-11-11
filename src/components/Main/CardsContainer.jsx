"use client";
import React, { useEffect } from "react";
import Cards from "../common/Main/Cards";
import { useSelector, useDispatch } from "react-redux";
import { restosDetails } from "@/redux/slice/resto/restoSlice";
import SkeletonLoader from "./skeletonloader";

const CardsContainer = () => {
  const dispatch = useDispatch();
  const { loading, error, resto } = useSelector((state) => state.restaurant);

  useEffect(() => {
    // Fetch restaurant details when the component mounts
    dispatch(restosDetails());
  }, [dispatch]);

  if (loading) {
    return (
      <div className="w-full grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mt-2">
        <SkeletonLoader />
        <SkeletonLoader />
        <SkeletonLoader />
        <SkeletonLoader />
        <SkeletonLoader />
        <SkeletonLoader />
        <SkeletonLoader />
        <SkeletonLoader />
        <SkeletonLoader />
        <SkeletonLoader />
        <SkeletonLoader />
        <SkeletonLoader />
        <SkeletonLoader />
        <SkeletonLoader />
        <SkeletonLoader />
        <SkeletonLoader />
        <SkeletonLoader />
        <SkeletonLoader />
        <SkeletonLoader />
        <SkeletonLoader />
      </div>
    );
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  if (!resto) {
    return (
      <div className="w-full grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mt-2">
        <SkeletonLoader />
        <SkeletonLoader />
        <SkeletonLoader />
        <SkeletonLoader />
        <SkeletonLoader />
        <SkeletonLoader />
        <SkeletonLoader />
        <SkeletonLoader />
        <SkeletonLoader />
        <SkeletonLoader />
        <SkeletonLoader />
        <SkeletonLoader />
        <SkeletonLoader />
        <SkeletonLoader />
        <SkeletonLoader />
        <SkeletonLoader />
        <SkeletonLoader />
        <SkeletonLoader />
        <SkeletonLoader />
        <SkeletonLoader />
      </div>
    );
  }

  // console.log("Restos: ", resto.data);
  return (
    <div className="w-full grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mt-2">
      {resto.data && resto.data.length < 1 ? (
        <div className="w-full h-[75vh] col-span-2 md:col-span-3 lg:col-span-5 bg-slate-100 flex justify-center items-center rounded-xl">
          <h1>There is no register restaurant</h1>
        </div>
      ) : (
        resto.data &&
        resto.data.map((restaurant, index) => (
          <Cards
            key={restaurant._id}
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
