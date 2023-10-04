"use client";
import React, { useState } from "react";
import AdminLayout from "../adminlayout";
import Header from "@/components/common/Dashboard/admin/header";
import StatsContainer from "@/components/common/Dashboard/admin/statscontainer";
import TabNav from "./tabNav";
import RightDetails from "@/components/common/Dashboard/admin/rightDetails";

const Users = [
  {
    username: "John",
    firstname: "John",
    lastname: "Muhoza",
    email: "John@gmail.com",
    location: "Huye, South",
    phone: "078837833",
    UserType: "client",
  },
  {
    username: "Alice",
    firstname: "Alice",
    lastname: "Smith",
    email: "alice@gmail.com",
    location: "New York, USA",
    phone: "123456789",
    UserType: "admin",
  },
  {
    username: "Bob",
    firstname: "Bob",
    lastname: "Johnson",
    email: "bob@gmail.com",
    location: "Los Angeles, USA",
    phone: "987654321",
    UserType: "mini-admin",
  },
  {
    username: "Emma",
    firstname: "Emma",
    lastname: "Davis",
    email: "emma@gmail.com",
    location: "London, UK",
    phone: "555555555",
    UserType: "mini-admin",
  },
  {
    username: "David",
    firstname: "David",
    lastname: "Lee",
    email: "david@gmail.com",
    location: "Toronto, Canada",
    phone: "777777777",
    UserType: "client",
  },
  {
    username: "Sarah",
    firstname: "Sarah",
    lastname: "Brown",
    email: "sarah@gmail.com",
    location: "Sydney, Australia",
    phone: "999999999",
    UserType: "admin",
  },
  {
    username: "Michael",
    firstname: "Michael",
    lastname: "Wilson",
    email: "michael@gmail.com",
    location: "Berlin, Germany",
    phone: "333333333",
    UserType: "client",
  },
  {
    username: "Olivia",
    firstname: "Olivia",
    lastname: "Miller",
    email: "olivia@gmail.com",
    location: "Paris, France",
    phone: "666666666",
    UserType: "client",
  },
  {
    username: "William",
    firstname: "William",
    lastname: "Jones",
    email: "william@gmail.com",
    location: "Madrid, Spain",
    phone: "222222222",
    UserType: "client",
  },
  {
    username: "Sophia",
    firstname: "Sophia",
    lastname: "Harris",
    email: "sophia@gmail.com",
    location: "Rome, Italy",
    phone: "444444444",
    UserType: "client",
  },
  {
    username: "Liam",
    firstname: "Liam",
    lastname: "Clark",
    email: "liam@gmail.com",
    location: "Tokyo, Japan",
    phone: "888888888",
    UserType: "admin",
  },
  {
    username: "Ella",
    firstname: "Ella",
    lastname: "Turner",
    email: "ella@gmail.com",
    location: "Mumbai, India",
    phone: "111111111",
    UserType: "client",
  },
  {
    username: "James",
    firstname: "James",
    lastname: "Wright",
    email: "james@gmail.com",
    location: "Seoul, South Korea",
    phone: "555555555",
    UserType: "client",
  },
  {
    username: "Ava",
    firstname: "Ava",
    lastname: "Parker",
    email: "ava@gmail.com",
    location: "Beijing, China",
    phone: "999999999",
    UserType: "client",
  },
  {
    username: "Noah",
    firstname: "Noah",
    lastname: "Hall",
    email: "noah@gmail.com",
    location: "Sao Paulo, Brazil",
    phone: "777777777",
    UserType: "admin",
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
            Users={Users}
            selectedTr={selectedTr}
            setSelectedTr={setSelectedTr}
            handleRowClick={handleRowClick}
          />
        </div>
        <div className="lg:w-[25%] xl:w-[20%] h-screen pl-1 bg-fixed bg-white">
          <div className="lg:w-[20%]  xl:w-[16.5%] h-screen fixed bg-white">
            <RightDetails
              selectedTr={selectedTr}
              setSelectedTr={setSelectedTr}
              item={selectedTr !== null ? Users[selectedTr] : null}
            />
          </div>
        </div>
      </div>
    </AdminLayout>
  );
};

export default page;
