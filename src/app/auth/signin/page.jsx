"use client";
import Link from "next/link";
import {useRouter} from "next/navigation";
import React, {useEffect, useState} from "react";
import {FcGoogle} from "react-icons/fc";
import {ToastContainer} from "react-toastify";
import {useDispatch, useSelector} from "react-redux";
import {addAuth, getAuth} from "@/store/auth";

const Page = () => {
    const router = useRouter();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const auth = useSelector(getAuth)
    const dispatch = useDispatch()

    useEffect(() => {
        if (auth?.token) {
            const userRole = auth.user.role
            if (userRole === "Admin") {
                router.push("/dashboard/admin/");
            } else if (userRole === "Employee") {
                router.push("/dashboard/employee/");
            } else if (userRole === "Manager") {
                router.push("/dashboard/manager/");
            } else if (userRole === "Client") {
                router.push("/dashboard/user");
            } else {
                router.push("/auth/signin");
            }
        }
    }, [auth]);

    const handleLogin = (e) => {
        e.preventDefault();
        setLoading(true)
        dispatch(addAuth({
            email,
            password
        }))
    };
    //
    const handleGoogleLogin = () => {
        console.log("google login");
    };

    return (
        <div className="w-screen bg-white h-screen flex justify-center items-center">
            <div
                className="bg-gray-50 w-[90%] md:w-5/6 lg:w-4/6 xl:w-2/6 flex flex-col justify-center items-center p-4 py-8 rounded-lg border">
                <ToastContainer/>
                <h1 className="text-3xl font-semibold text-center">Sign in</h1>
                <form className="flex flex-col gap-4 p-4 w-full" onSubmit={handleLogin}>
                    <div className="flex flex-col gap-2">
                        <label htmlFor="name">Username or email</label>
                        <input
                            type="email"
                            placeholder="Johndoe@gmail.com"
                            onChange={(e) => setEmail(e.target.value)}
                            value={email}
                            required
                            className="border outline-none active:outline-none p-3 rounded-md"
                        />
                    </div>
                    <div className="flex flex-col gap-2">
                        <label htmlFor="pass">Password</label>
                        <input
                            type="password"
                            placeholder="*******"
                            onChange={(e) => setPassword(e.target.value)}
                            value={password}
                            required
                            className="border outline-none active:outline-none p-3 rounded-md"
                        />
                    </div>
                    <button
                        type="submit"
                        // value="Sign in"
                        className="bg-black text-white py-3 rounded-md cursor-pointer"
                    >
                        {loading ? "Logging in..." : "Log In"}
                    </button>
                </form>
                <div
                    className="w-full flex flex-col md:flex-row justify-start items-start md:justify-between md:items-center gap-2 p-4">
                    <Link href="/auth">
                        <p className="duration-300 scale-95 hover:scale-100 cursor-pointer text-md">
                            If you dont have account
                            <span className="text-blue-600 ml-2">Sign up</span> now
                        </p>
                    </Link>
                    <Link href="/auth/forgot">
                        <button
                            className="px-8 rounded-md text-red-600 text-md font-medium duration-300 scale-95 hover:scale-100 cursor-pointer">
                            Forgot Password
                        </button>
                    </Link>
                </div>
                <Link
                    href={`${process.env.NEXT_PUBLIC_BACKEND_URL}/user/auth/google`}
                    className="flex w-full bg-blue-500 p-1 rounded-lg justify-start items-center gap-4 text-white scale-95 hover:scale-100 duration-300 cursor-pointer"
                >
          <span className="p-2 rounded-md bg-white">
            <FcGoogle className="text-xl"/>
          </span>
                    Continue with google
                </Link>
            </div>
        </div>
    );
};

export default Page;
