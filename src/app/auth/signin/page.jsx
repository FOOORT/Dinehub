"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { ToastContainer } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { addAuth, getAuth } from "@/store/auth";

// Import Yup and formik
import * as Yup from "yup";
import { Form, Formik } from "formik";
import FormField from "@/components/common/Form/Field/FormField";

const Page = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const auth = useSelector(getAuth);
  const dispatch = useDispatch();

  useEffect(() => {
    const roleRoutes = {
      Admin: "/dashboard/admin/",
      Employee: "/dashboard/employee/",
      Manager: "/dashboard/manager/",
      Client: "/dashboard/user",
    };

    if (auth?.token) {
      const userRole = auth.user.role;
      const redirectRoute = roleRoutes[userRole] || "/auth/signin";
      router.push(redirectRoute);
    }
  }, [auth, router]);

  const schema = Yup.object().shape({
    email: Yup.string()
      .required("Email is required")
      .min(3, "Email must be at least 3 characters")
      .max(255, "Email must be at most 255 characters"),
    password: Yup.string().required("Password is required"),
  });

  return (
    <div className="w-screen bg-white h-screen flex justify-center items-center">
      <div className="bg-gray-50 w-[90%] md:w-5/6 lg:w-4/6 xl:w-2/6 flex flex-col justify-center items-center p-4 py-8 rounded-lg border">
        <Formik
          validationSchema={schema}
          initialValues={{
            email: "",
            password: "",
          }}
          onSubmit={(values) => {
            const formData = new FormData();
            formData.append("email", values.email);
            formData.append("password", values.password);
            setLoading(true);
            dispatch(addAuth(formData));
          }}
        >
          <Form className="w-full flex flex-col gap-4">
            <ToastContainer />
            <h1 className="text-3xl font-semibold text-center">Sign in</h1>
            <div className="flex flex-col gap-4 p-4 w-full">
              <FormField
                containerClassName="col-span-2"
                label="Email"
                name="email"
              />
              <FormField
                containerClassName="col-span-2"
                label="Password"
                name="password"
                type="password"
              />
              <button
                type="submit"
                className="bg-black text-white py-3 rounded-md cursor-pointer"
              >
                {loading ? "Logging in..." : "Log In"}
              </button>
            </div>
          </Form>
        </Formik>
        <div className="w-full flex flex-col md:flex-row justify-start items-start md:justify-between md:items-center gap-2 p-4">
          <Link href="/auth">
            <p className="duration-300 scale-95 hover:scale-100 cursor-pointer text-md">
              If you dont have account
              <span className="text-blue-600 ml-2">Sign up</span> now
            </p>
          </Link>
          <Link href="/auth/forgot">
            <button className="px-8 rounded-md text-red-600 text-md font-medium duration-300 scale-95 hover:scale-100 cursor-pointer">
              Forgot Password
            </button>
          </Link>
        </div>
        <Link
          href={`${process.env.NEXT_PUBLIC_BACKEND_URL}/user/auth/google`}
          className="flex w-full bg-blue-500 p-1 rounded-lg justify-start items-center gap-4 text-white scale-95 hover:scale-100 duration-300 cursor-pointer"
        >
          <span className="p-2 rounded-md bg-white">
            <FcGoogle className="text-xl" />
          </span>
          Continue with google
        </Link>
      </div>
    </div>
  );
};

export default Page;
