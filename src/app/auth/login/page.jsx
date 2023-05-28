"use client";

import Head from "next/head";
import { useRouter } from "next/navigation";
import React from "react";

const Login = () => {
   const router = useRouter();
   return (
      <div className="w-[100%] h-[100%] flex items-center flex-col gap-5 py-5">
         <Head>
            <title>Socials: Login</title>
         </Head>
         <h1 className="text-2xl font-extrabold">Welcome Back!</h1>
         <form className="flex-with-gap w-full">
            <input
               type="email"
               placeholder="youremail@host.com"
               name="email"
               className="form-input"
            />
            <input
               type="password"
               placeholder="yoursecretpassword"
               name="email"
               className="form-input"
            />
            <button className="primary-button">Log In</button>
            <span className="w-full flex items-end justify-end">
               <span className="w-max cursor-pointer">Forgot Password?</span>
            </span>
         </form>
         <span>Or</span>
         <button
            className="secondary-button w-full"
            onClick={() => router.push("/auth/register")}
         >
            Create New Account
         </button>
      </div>
   );
};

export default Login;
