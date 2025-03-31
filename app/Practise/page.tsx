"use client";
import React from "react";

import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { z, ZodType } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { get_date } from "@/utils/dateutil";
import { get_time } from "@/utils/timeutil";
import Tost from "./tost"; // Import the tost component
import Tic_tak from "./tic_tak";

import Main_here from "@/Components/Main_here";
import Testing from "@/Components/testing";

// helper function
const format_time = (time: string) => {
  const [hrs, min, sec]: string[] = time.split(":");
  if (hrs && min && sec) {
    if (parseInt(hrs) % 2 == 0) {
      return <h1>Odd hour</h1>;
    } else {
      return <h1 className="text-red-600 text-2xl text-center">Even hour</h1>;
    }
  }
};

// helper function
const notify = () => {
  toast("Button Clicked! 🥳");
};

type FormData = {
  f_name: string;
  l_name: string;
  e_mail: string;
  age: number;
  pwd: string;
  c_pwd: string;
};

// main function
const page: React.FC = () => {
  const currentTime = get_time();

  const schema: ZodType<FormData> = z
    .object({
      f_name: z
        .string()
        .min(2, { message: "First name is required !" })
        .max(20),
      l_name: z
        .string()
        .min(2, { message: "Last name is required !" })
        .max(20)
        .optional(),
      e_mail: z.string().email({ message: "Email format mismatch" }),
      age: z.number(),
      pwd: z.string().min(5, { message: "Password not entred" }).max(20),
      c_pwd: z.string().min(5, { message: "Password mis-match" }).max(20),
    })
    .refine((data) => data.pwd === data.c_pwd, {
      message: " password doesn't match",
      path: ["c_pwd"],
    });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const submitData = (data: FormData) => {
    console.log("Data passes", data);
  };

  return (
    <>
      <h1>The current date is: {get_date()}</h1>
      <br />
      <h1>The current time is: {get_time()}</h1>
      {format_time(currentTime)} <br />
      <button
        onClick={notify}
        className="bg-amber-100 px-4 py-2 rounded-xl cursor-pointer"
      >
        Click me!
      </button>
      <form className="flex flex-col ml-2" onSubmit={handleSubmit(submitData)}>
        <label className="mt-4" htmlFor="f_name">
          First Name:
        </label>
        <input
          className="border-2 rounded max-w-60"
          type="text"
          id="f_name"
          {...register("f_name")}
        />
        {errors.f_name && (
          <span className="text-red-500"> {errors.f_name.message}</span>
        )}
        <label className="mt-4" htmlFor="l_name">
          Last Name:
        </label>
        <input
          className="border-2 rounded max-w-60 "
          type="text"
          id="l_name"
          {...register("l_name")}
        />
        {errors.l_name && (
          <span className="text-red-500"> {errors.l_name.message}</span>
        )}
        <label className="mt-4" htmlFor="e_mail">
          Email:
        </label>
        <input
          className="border-2 rounded max-w-60 "
          type="email"
          id="e_mail"
          {...register("e_mail")}
        />
        {errors.e_mail && (
          <span className="text-red-500"> {errors.e_mail.message}</span>
        )}
        <label className="mt-4" htmlFor="age">
          Age:
        </label>
        <input
          className="border-2 rounded max-w-60 "
          type="number"
          id="age"
          {...register("age", { valueAsNumber: true })}
        />

        <label className="mt-4" htmlFor="pwd">
          Password:
        </label>
        <input
          className="border-2 rounded max-w-60 "
          type="password"
          id="pwd"
          {...register("pwd")}
        />
        {errors.pwd && (
          <span className="text-red-500"> {errors.pwd.message}</span>
        )}
        <label className="mt-4" htmlFor="c_pwd">
          Confirm Password:
        </label>
        <input
          className="border-2 rounded max-w-60 "
          type="password"
          id="c_pwd"
          {...register("c_pwd")}
        />
        {errors.c_pwd && (
          <span className="text-red-500"> {errors.c_pwd.message}</span>
        )}
        <input
          type="submit"
          className="bg-amber-100 mt-4 max-w-60 px-4 py-2 rounded-xl cursor-pointer"
        />
      </form>
      <ToastContainer />
      {/* Render the Tost component here */}
      <Tost />
      <Tic_tak />
      <Main_here />
      <Testing />
    </>
  );
};

export default page;
