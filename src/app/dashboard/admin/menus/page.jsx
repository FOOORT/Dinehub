"use client";
import React, { useState } from "react";
import AdminLayout from "../adminlayout";
import Header from "@/components/common/Dashboard/admin/header";
import StatsContainer from "@/components/common/Dashboard/admin/statscontainer";
import TabNav from "./tabNav";
import RightDetails from "@/components/common/Dashboard/admin/rightDetails";

const restaurantMenu = [
  {
    name: "Margherita Pizza",
    description:
      "Classic pizza with tomato sauce, mozzarella cheese, and basil.",
    price: 12.99,
    category: "Pizza",
    restaurant: "Fantastic Restaurant 1",
  },
  {
    name: "Chicken Alfredo Pasta",
    description:
      "Creamy Alfredo sauce with grilled chicken and fettuccine noodles.",
    price: 15.99,
    category: "Pasta",
    restaurant: "Amazing Italian Kitchen",
  },
  {
    name: "Caesar Salad",
    description:
      "Fresh romaine lettuce with Caesar dressing, croutons, and Parmesan cheese.",
    price: 8.99,
    category: "Salad",
    restaurant: "Healthy Bites",
  },
  {
    name: "BBQ Burger",
    description:
      "Beef patty topped with BBQ sauce, cheddar cheese, lettuce, and tomato.",
    price: 10.99,
    category: "Burger",
    restaurant: "Burger Heaven",
  },
  {
    name: "Vegetable Stir-Fry",
    description:
      "Assorted vegetables stir-fried with soy sauce and served with rice.",
    price: 11.99,
    category: "Burger",
    restaurant: "Wok Delight",
  },
  {
    name: "Chocolate Brownie Sundae",
    description:
      "Warm chocolate brownie topped with vanilla ice cream and chocolate syrup.",
    price: 6.99,
    category: "Dessert",
    restaurant: "Sweet Delights",
  },
  {
    name: "Iced Coffee",
    description:
      "Chilled coffee served with ice and your choice of cream and sweeteners.",
    price: 3.99,
    category: "Sushi",
    restaurant: "Cafe Oasis",
  },
  {
    name: "Sushi Platter",
    description: "Assortment of fresh sushi rolls and sashimi.",
    price: 18.99,
    category: "Sushi",
    restaurant: "Sushi Master",
  },
  {
    name: "Grilled Steak",
    description:
      "Tender grilled steak served with garlic mashed potatoes and vegetables.",
    price: 22.99,
    category: "Steak",
    restaurant: "Steakhouse Royale",
  },
  {
    name: "Mediterranean Wrap",
    description:
      "A wrap filled with Mediterranean flavors, including hummus and grilled veggies.",
    price: 9.99,
    category: "Sushi",
    restaurant: "Mediterranean Eats",
  },
  {
    name: "Pho Noodle Soup",
    description:
      "Vietnamese noodle soup with beef or chicken, fresh herbs, and rice noodles.",
    price: 10.49,
    category: "Sushi",
    restaurant: "Pho Express",
  },
  {
    name: "Vegan Quinoa Bowl",
    description:
      "A healthy and delicious vegan bowl with quinoa, vegetables, and tahini dressing.",
    price: 13.99,
    category: "Bowl",
    restaurant: "Green Haven",
  },
  {
    name: "Fish and Chips",
    description:
      "Crispy battered fish served with french fries and tartar sauce.",
    price: 14.99,
    category: "Seafood",
    restaurant: "Fisherman's Cove",
  },
  {
    name: "Taco Platter",
    description:
      "A variety of tacos with your choice of fillings and toppings.",
    price: 10.99,
    category: "Tacos",
    restaurant: "Taco Fiesta",
  },
  {
    name: "Pad Thai Noodles",
    description:
      "Stir-fried rice noodles with shrimp or tofu, peanuts, and lime.",
    price: 12.99,
    category: "Tacos",
    restaurant: "Thai Delight",
  },
];

const page = () => {
  const [selectedTr, setSelectedTr] = useState({});

  const handleRowClick = (index) => {
    setSelectedTr(index);
  };

  return (
    <AdminLayout>
      <div className="flex justify-between items-start">
        <div className="w-full lg:w-[75%] xl:w-[80%] px-3">
          <Header />
          <StatsContainer />
          <TabNav
            Menus={restaurantMenu}
            selectedTr={selectedTr}
            setSelectedTr={setSelectedTr}
            handleRowClick={handleRowClick}
          />
        </div>
        <div className="lg:w-[25%] xl:w-[20%] h-screen pl-1 bg-fixed bg-white">
          <div className="lg:w-[20%]  xl:w-[16.5%] h-screen fixed bg-white">
            {/* <RightDetails
              selectedTr={selectedTr}
              setSelectedTr={setSelectedTr}
              item={selectedTr !== null ? Menus[selectedTr] : null}
            /> */}
          </div>
        </div>
      </div>
    </AdminLayout>
  );
};

export default page;
