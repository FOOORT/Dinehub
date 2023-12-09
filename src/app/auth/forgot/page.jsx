"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { useDispatch } from "react-redux";
import { Formik, Form } from "formik";
import * as Yup from "yup";

import FormField from "@/components/common/Form/Field/FormField"; // Verify this path
import { ToastContainer } from "react-toastify";
import { forgotPassword } from "@/store/auth"; // Verify this path

const Page = () => {

  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const router = useRouter(); // Correctly using useRouter

  const schema = Yup.object().shape({
    email: Yup.string()
      .required("Email is required")
      .email("Invalid email format")
      .min(3, "Email must be at least 3 characters")
      .max(255, "Email must be at most 255 characters"),
  });

  const handleSubmit = async (values) => {
    setLoading(true);
    try {
      await dispatch(forgotPassword(values.email));
      router.push("/auth/forgot/verification");
    } catch (error) {
      // Handle error
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-screen bg-white h-screen flex justify-center items-center">
      <div className="bg-gray-50 w-[90%] md:w-5/6 lg:w-4/6 xl:w-2/6 flex flex-col justify-center items-center p-4 py-8 rounded-lg border">
      <Formik
        validationSchema={schema}
        initialValues={{ email: "" }}
        onSubmit={handleSubmit}
      >
        {() => (
          <Form className="flex flex-col gap-4 p-4 w-full">
            <ToastContainer />
            <h1 className="text-3xl font-semibold text-center">Recover Password</h1>
            <FormField
              containerClassName="col-span-2"
              label="Email"
              name="email"
            />
            <button
              type="submit"
              disabled={loading}
              className="bg-black text-white py-3 rounded-md cursor-pointer w-full"
            >
              {loading ? "Sending code ..." : "Send code"}
            </button>
          </Form>
        )}
      </Formik>
      <div className="w-full flex flex-col md:flex-row justify-start items-start md:justify-between md:items-center gap-2 p-4">
        <Link href="/auth/signin">
          <p className="duration-300 scale-95 hover:scale-100 cursor-pointer text-md">
            Back to
            <span className="text-blue-600 ml-2">Sign in</span>
          </p>
        </Link>
      </div>
      </div>
    </div>
  );
};

export default Page;
