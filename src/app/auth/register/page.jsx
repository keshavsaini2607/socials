"use client";

import React from "react";
import { useRouter } from "next/navigation";
import Head from "next/head";

const Register = () => {
   const router = useRouter();
   return (
      <div className="w-[100%] h-[100%] flex items-center flex-col gap-5 py-5">
         <Head>
            <title>Socials: Register</title>
         </Head>
         <h1 className="text-2xl font-extrabold">Welcome Aboard</h1>
         <form className="flex-with-gap w-full">
            <input
               type="text"
               placeholder="yourfullname"
               name="name"
               className="form-input"
            />
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
            <button className="primary-button">Register</button>
         </form>
         <span>Or</span>
         <button
            className="secondary-button w-full"
            onClick={() => router.replace("/auth/login")}
         >
            Login With Existing Account
         </button>
      </div>
   );
};

export default Register;
