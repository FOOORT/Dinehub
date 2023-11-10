"use client";
import React, { useState } from "react";
import BusinessInfo from "@/components/Auth/businessinfo";
import ManagerAccount from "@/components/Auth/manageraccount";
import { ToastContainer, toast } from "react-toastify";
import { useRouter } from "next/navigation";

import axios from "axios";

const Page = () => {
  const router = useRouter();

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
  const managerDetails = {
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

  const handleCreateBusiness = async () => {
    // console.log("Create Business", managerDetails);
    try {
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/business/register`,
        managerDetails
      );

      console.log("response data: ", response);

      if ((response.status = 201)) {
        toast.success(response.data.message);
        // Redirect or perform any other actions
        router.push("/auth/signup/approval");
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      // Handle error
      console.error("Error:", error.response.data.message);
      toast.error(error.response.data.message);

      // Display error message to the user
    }
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
