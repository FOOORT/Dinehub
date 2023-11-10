"use client";
import React, { useState, useEffect } from "react";
import ActionButton from "@/components/common/actionbutton";
import { FaPlus } from "react-icons/fa";
import { BsArrowUpRight } from "react-icons/bs";
import AddRestaurant from "@/components/common/Dashboard/admin/restaurant/modal/addrestaurant";
import { useSelector, useDispatch } from "react-redux";
import { restosDetails } from "@/redux/slice/resto/restoSlice";
import SingleRestaurant from "@/components/common/Dashboard/admin/restaurant/modal/singlerestaurant";

const getButtonClass = (decision) => {
  switch (decision) {
    case "rejected":
      return "bg-red-100";
    case "verified":
      return "bg-green-100";
    default:
      return "bg-blue-100";
  }
};

const TabNav = () => {
  const dispatch = useDispatch();
  const { loading, error, resto } = useSelector((state) => state.restaurant);

  useEffect(() => {
    // Fetch restaurant details when the component mounts
    dispatch(restosDetails());
  }, [dispatch]);

  const [activeLink, setActiveLink] = useState("all");
  const [selectedTr, setSelectedTr] = useState(null);
  // const [filteredRestos, setFilteredRestos] = useState(resto);
  // const [options, setOptions] = useState(false);
  // const handleMoreBtn = () => setOptions((prev) => !prev);

  // const [selectedItem, setSelectedItem] = useState();
  const [addRestoModal, setAddRestoModal] = useState(false);
  const [singleRestoModal, setSingleRestoModal] = useState(false);

  if (loading) return <h1>Restos loading</h1>;
  if (error) return <p>Error: {error}</p>;
  if (!resto) return <h1>No resto found</h1>;

  const handleLinkClick = (activeTab) => {
    setActiveLink(activeTab);
    const filteredData =
      activeTab === "all"
        ? resto
        : resto.filter((restaurant) => restaurant.decision === activeTab);
    setFilteredRestos(filteredData);
  };

  console.log("Fetched resto: ", resto);

  const restoHandleModal = () => setAddRestoModal((prev) => !prev);
  const singleRestoHandleModal = () => setSingleRestoModal((prev) => !prev);

  return (
    <div className="mt-4 w-full">
      <div className="w-full flex justify-between items-center my-3">
        <ul className="flex items-center p-[1px] rounded-lg gap-2 cursor-pointer">
          {["all", "pending", "verified", "rejected"].map((tab) => (
            <li
              key={tab}
              className={`px-4 py-2 rounded-md text-xs font-medium ${
                activeLink === tab ? "text-white bg-black" : ""
              }`}
              onClick={() => handleLinkClick(tab)}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
            </li>
          ))}
        </ul>
        <ActionButton
          name="Add restaurant"
          icon={<FaPlus />}
          click={restoHandleModal}
        />
        {addRestoModal && <AddRestaurant closeModal={restoHandleModal} />}
      </div>
      <table className="bg-white w-full mt-2 text-sm rounded-lg" border="1">
        <thead className="">
          <tr className="h-8">
            <th className="text-left pl-4">#</th>
            <th className="text-left">Name</th>
            <th className="text-left hidden md:block">Location</th>
            <th className="text-left">Contact</th>
            <th className="text-left hidden xl:block">Email</th>
            <th className="text-left">Decision</th>
            <th className="text-left"></th>
          </tr>
        </thead>
        <>
          <tbody>
            {resto.data.length > 0 ? (
              resto.data.map((restaurant, index) => (
                <tr
                  key={index}
                  className={`h-10 duration-200 hover:bg-slate-100 rounded-md ${
                    selectedTr === index ? "bg-slate-100" : ""
                  }`}
                  onClick={() => setSelectedTr(index)}
                >
                  <td className="pl-4">{index + 1}</td>
                  <td>{restaurant.businessName}</td>
                  <td className="hidden md:flex items-center h-1 pt-5">
                    {restaurant.businessAddress}
                  </td>
                  <td>
                    <p>{restaurant.businessPhone}</p>
                    <h2 className="text-xs block xl:hidden">
                      {/* {restaurant.businessOwner.email} */}
                      danny.reco2002@gmail.com
                    </h2>
                    <h3 className="text-xs block md:hidden text-slate-700">
                      {restaurant.businessAddress}
                    </h3>
                  </td>
                  <td className="hidden xl:block h-10">
                    {/* {restaurant.businessOwner.email} */}
                    danny.reco2002@gmail.com
                  </td>
                  <td>
                    <button
                      className={`px-3 rounded-md py-2 text-xs font-medium w-5/6 ${getButtonClass(
                        restaurant.businessStatus
                      )}`}
                    >
                      {restaurant.businessStatus}
                    </button>
                  </td>
                  <td>
                    <button className="active:bg-black active:text-white h-5 w-6 flex justify-center items-center rounded-md border relative z-40 ">
                      <ActionButton
                        // name="Actions"
                        icon={<BsArrowUpRight />}
                        className="px-2"
                        click={() => {
                          setSingleRestoModal((prev) => !prev);
                        }}
                      />
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="7">No restaurant data available</td>
              </tr>
            )}
          </tbody>
        </>
      </table>

      <div className="mt-4 w-full flex justify-between items-center">
        <button className="px-4 py-2 bg-black text-white text-xs rounded-lg font-semibold">
          Prev
        </button>
        <h2>
          Page <span className="font-semibold">1</span> of{" "}
          <span className="font-semibold">3</span>
        </h2>
        <button className="px-4 py-2 bg-black text-white text-xs rounded-lg font-semibold">
          Next
        </button>
      </div>

      {singleRestoModal && (
        <SingleRestaurant closeModal={singleRestoHandleModal} />
      )}
    </div>
  );
};

export default TabNav;
