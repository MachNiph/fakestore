import React from "react";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div className="py-20  flex flex-col gap-5 items-center ">
      <div className="flex flex-col gap-3 items-center ">
        <h1 className="font-bold text-2xl border-b border-black">Register</h1>
        <p>Kindly fill in this form to register.</p>
      </div>

      <form
        action=""
        className="flex flex-col gap-2 w-[320px] md:w-[450px] lg:w-[600px]"
      >
        <label htmlFor="username">Username</label>
        <input className="border h-10 p-1" type="text" id="username" />

        <label htmlFor="email">Email</label>
        <input className="border h-10 p-1" type="email" id="email" />

        <label htmlFor="password">Password</label>
        <input
          className="border h-10 p-1"
          type="password"
          name="password"
          id="password"
        />

        <button className="bg-black text-white p-2 w-2/3 rounded-sm">
          Register
        </button>

        <div>
          Already have an account ?
          <Link className="underline text-green-500"> Log In</Link>
        </div>
      </form>
    </div>
  );
};

export default Register;
