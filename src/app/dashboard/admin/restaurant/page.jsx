"use client";
import React, { useState } from "react";
import AdminLayout from "../adminlayout";
import Header from "@/components/common/Dashboard/admin/header";
import StatsContainer from "@/components/common/Dashboard/admin/statscontainer";
import TabNav from "./tabNav";
import RightDetails from "@/components/common/Dashboard/admin/rightDetails";

const Restos = [
  {
    name: "Obinasom",
    location: "South, Huye",
    contact: "07886337833",
    email: "Obinasom@gmail.com",
    decision: "rejected",
  },
  {
    name: "Obinasom",
    location: "Kigali, Nyarugenge",
    contact: "07886337833",
    email: "Obinasom@gmail.com",
    decision: "approved",
  },
  {
    name: "4B2 Resto",
    location: "South, Nyanza",
    contact: "07886337833",
    email: "4B2Resto@gmail.com",
    decision: "approved",
  },
  {
    name: "Villa",
    location: "South, Huye",
    contact: "07886337833",
    email: "Villa@gmail.com",
    decision: "pending",
  },
  {
    name: "Muhazi",
    location: "West, Rwamagana",
    contact: "07886337833",
    email: "Muhazi@gmail.com",
    decision: "rejected",
  },
  {
    name: "Eagle Resto",
    location: "Noth, Burera",
    contact: "07886337833",
    email: "eagleresto@gmail.com",
    decision: "pending",
  },
  {
    name: "Innove",
    location: "South, Huye",
    contact: "07886337833",
    email: "Innove@gmail.com",
    decision: "approved",
  },
  {
    name: "Ebis",
    location: "South, Huye",
    contact: "07886337833",
    email: "Ebis@gmail.com",
    decision: "rejected",
  },
  {
    name: "144",
    location: "South, Huye",
    contact: "07886337833",
    email: "onefourfour@gmail.com",
    decision: "pending",
  },
  {
    name: "Tousaint",
    location: "South, Huye",
    contact: "07886337833",
    email: "tousaint@gmail.com",
    decision: "rejected",
  },
  {
    name: "Upendi",
    location: "South, Huye",
    contact: "07886337833",
    email: "Upendipub@gmail.com",
    decision: "approved",
  },
  {
    name: "Restos11",
    location: "South, Huye",
    contact: "07886337833",
    email: "reconfortdanny@gmail.com",
    decision: "pending",
  },
];

const Page = () => {
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
            Restos={Restos}
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
              item={selectedTr !== null ? Restos[selectedTr] : null}
            />
          </div>
        </div>
      </div>
    </AdminLayout>
  );
};

export default Page;
