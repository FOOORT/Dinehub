"use client";
import Link from "next/link";
import React, { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { useRouter } from "next/navigation";
import { ToastContainer, toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { addClient } from "@/store/auth/client";
import FormField from "@/components/common/Form/Field/FormField";
// Import Yup and formik
import * as Yup from "yup";
import { Form, Formik } from "formik";

// ... (import statements)

const Page = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();

  const schema = Yup.object().shape({
    firstname: Yup.string().required("First Name is required"),
    lastname: Yup.string().required("Last Name is required"),
    email: Yup.string()
      .email("Invalid email format")
      .required("Email is required"),
    username: Yup.string().required("Username is required"),
    address: Yup.string().required("Address is required"),
    gender: Yup.string().required("Gender is required"),
    dob: Yup.date().nullable().required("Date of Birth is required"),
    phone: Yup.string().required("Phone number is required"),
    password: Yup.string()
      .required("Password is required")
      .min(6, "Password must be at least 6 characters"),
    confirm_password: Yup.string()
      .oneOf([Yup.ref("password"), null], "Passwords must match")
      .required("Confirm Password is required"),
  });

  const genderOptions = [
    {
      value: "Male",
      label: "Male",
    },
    {
      value: "Female",
      label: "Female",
    },
  ];

  return (
    <div className="w-screen bg-white h-screen flex justify-center items-center">
      <ToastContainer />
      <div className="bg-gray-50 w-[90%] md:w-5/6 lg:w-4/6 xl:w-3/6 flex flex-col justify-center items-center p-4 py-8 rounded-lg border scale-90">
        <Formik
          validationSchema={schema}
          initialValues={{
            firstname: "",
            lastname: "",
            email: "",
            username: "",
            address: "",
            gender: "",
            dob: "",
            phone: "",
            password: "",
            confirm_password: "",
            role: "Client",
          }}
          onSubmit={(values) => {
            console.log(values);
            const formData = new FormData();
            formData.append("firstname", values.firstname),
              formData.append("lastname", values.lastname),
              formData.append("email", values.email),
              formData.append("username", values.username),
              formData.append("address", values.address),
              formData.append("gender", values.gender),
              formData.append("dob", values.dob),
              formData.append("role", values.role),
              formData.append("phone", values.phone),
              formData.append("password", values.password),
              formData.append("confirm_password", values.confirm_password),
              setLoading(true);
            dispatch(addClient(formData));
            router.push("/auth/signin/");
          }}
        >
          {({ isSubmitting }) => (
            <Form className="w-full grid grid-cols-2 gap-4">
              <FormField label="Firstname" name="firstname" />
              <FormField label="Lastname" name="lastname" />
              <FormField label="Email" name="email" />
              <FormField label="Username" name="username" />
              <FormField label="Address" name="address" />
              <FormField
                label="Gender"
                name="gender"
                as="select"
                options={genderOptions}
              />
              <FormField label="Date of Birth" name="dob" type="date" />
              <FormField label="Phone number" name="phone" type="number" />
              <FormField
                containerClassName="col-span-2"
                label="Password"
                name="password"
                type="password"
              />
              <FormField
                containerClassName="col-span-2"
                label="Confirm Password"
                name="confirm_password"
                type="password"
              />

              <button
                type="submit"
                className="bg-black text-white py-3 rounded-md cursor-pointer col-span-2"
                disabled={isSubmitting}
              >
                {loading ? "Creating Account ..." : "Create Account"}
              </button>
            </Form>
          )}
        </Formik>
        <div className="w-full flex flex-col md:flex-row justify-start items-start md:justify-between md:items-center gap-2 p-4">
          <Link href="/auth/signin">
            <p className="duration-300 scale-95 hover:scale-100 cursor-pointer text-md">
              Already have an account?{" "}
              <span className="text-blue-600 ml-2">Sign in</span> now
            </p>
          </Link>
        </div>
        <div className="flex w-full bg-blue-500 p-1 rounded-lg justify-start items-center gap-4 text-white scale-95 hover:scale-100 duration-300 cursor-pointer">
          <span className="p-2 rounded-md bg-white">
            <FcGoogle className="text-xl" />
          </span>
          Continue with Google
        </div>
      </div>
    </div>
  );
};

export default Page;
