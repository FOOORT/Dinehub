"use client";
import React, { useState } from "react";
import BusinessInfo from "@/components/Auth/businessinfo";
import ManagerAccount from "@/components/Auth/manageraccount";
import { ToastContainer } from "react-toastify";
import { useRouter } from "next/navigation";
import { useDispatch } from "react-redux";

// import axios from "axios";
import { addRestaurant } from "@/store/restaurant/restaurant";

const Page = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();

  const [activeComponent, setActiveComponent] = useState(true);
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [businessName, setBusinessName] = useState("");
  const [businessAddress, setBusinessAddress] = useState("");
  const [businessPhone, setBusinessPhone] = useState("");
  const [businessWhatsappNumber, setBusinessWhatsappNumber] = useState("");
  const [businessCategory, setBusinessCategory] = useState("");
  const [businessDescription, setBusinessDescription] = useState("");

  const managerForms = {
    firstname,
    lastname,
    email,
    password,
    confirmPassword,
    businessName,
    businessAddress,
    businessPhone,
    businessWhatsappNumber,
    businessCategory,
    businessDescription,
  };

  const handleCreateBusiness = () => {
      setLoading(true);
    dispatch(addRestaurant(managerForms));
    // router.push("/auth/signup/approval");
  };

  return (
    <div className="w-screen bg-white h-screen flex justify-center items-center">
      <ToastContainer />
      {activeComponent ? (
        <ManagerAccount
          setActive={setActiveComponent}
          firstname={firstname}
          setFirstname={setFirstname}
          lastname={lastname}
          setLastname={setLastname}
          email={email}
          setEmail={setEmail}
          password={password}
          setPassword={setPassword}
          confirmPassword={confirmPassword}
          setConfirmPassword={setConfirmPassword}
        />
      ) : (
        <BusinessInfo
          setActive={setActiveComponent}
          businessName={businessName}
          setBusinessName={setBusinessName}
          businessAddress={businessAddress}
          setBusinessAddress={setBusinessAddress}
          businessPhone={businessPhone}
          setBusinessPhone={setBusinessPhone}
          businessWhatsappNumber={businessWhatsappNumber}
          setBusinessWhatsappNumber={setBusinessWhatsappNumber}
          businessCategory={businessCategory}
          setBusinessCategory={setBusinessCategory}
          businessDescription={businessDescription}
          setBusinessDescription={setBusinessDescription}
          onSubmit={handleCreateBusiness}
        />
      )}
    </div>
  );
};

export default Page;
