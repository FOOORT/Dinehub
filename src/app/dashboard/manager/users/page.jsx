"use client";
import React, { useState } from "react";
import ManagerLayout from "../managerlayout";
import RightDetails from "@/components/common/Dashboard/admin/rightDetails";
import Header from "@/components/common/Dashboard/admin/header";
import StatsContainer from "@/components/common/Dashboard/admin/statscontainer";
import TabNav from "../tabNav";

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
    UserType: "mini-admin",
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
    UserType: "client",
  },
  {
    username: "Noah",
    firstname: "Noah",
    lastname: "Hall",
    email: "noah@gmail.com",
    location: "Sao Paulo, Brazil",
    phone: "777777777",
    UserType: "client",
  },
];

const Page = () => {
  const [selectedTr, setSelectedTr] = useState(0);

  const handleRowClick = (index) => {
    setSelectedTr(index);
  };

  return (
    <ManagerLayout>
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
          <div className="lg:w-[20%]  xl:w-[16.5%] h-screen fixed bg-white ">
            <RightDetails
              selectedTr={selectedTr}
              setSelectedTr={setSelectedTr}
              item={selectedTr !== null ? Users[selectedTr] : null}
            />
          </div>
        </div>
      </div>
    </ManagerLayout>
  );
};

export default Page;
