import React from "react";
import Cards from "../common/Menu/cards";
import Dishes from "../json/menu";

const CardContainer = () => {
  // console.log("Dishes", Dishes);
  return (
    <div className="w-full grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 mt-2">
      {Dishes.map((dish, index) => (
        <Cards
          key={index}
          name={dish.name}
          desc={dish.details}
          price={dish.price}
          category={dish.category}
          restaurant={dish.restaurant}
          status={dish.status}
          ingredients={dish.ingredients}
          image={dish.image}
        />
      ))}
    </div>
  );
};

export default CardContainer;
