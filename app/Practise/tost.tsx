import React, { useState } from "react";
import { ToastContainer, toast, Zoom } from "react-toastify";
import { SquareProps, FormData } from "./types/index";

import { z, ZodType } from "zod";
import { useForm } from "react-hook-form";
// import { register } from "module";
import { zodResolver } from "@hookform/resolvers/zod";
import next from "next";

const notify = () => {
  toast.success("Button Clicked", {
    position: "bottom-right",
    autoClose: 2000,
    hideProgressBar: true,
    closeOnClick: false,
    pauseOnHover: true,
    draggable: true,
    progress: 0,
    theme: "light",
    transition: Zoom,
  });
  toast.warn("Button Warned", {
    position: "bottom-right",
    autoClose: 3000,
    hideProgressBar: true,
    closeOnClick: false,
    pauseOnHover: true,
    draggable: true,
    progress: 0,
    theme: "light",
    transition: Zoom,
  });
  toast.warn("🦄 Wow so easy!", {
    position: "bottom-right",
    autoClose: 4000,
    hideProgressBar: true,
    closeOnClick: false,
    pauseOnHover: true,
    draggable: true,
    progress: 0,
    theme: "dark",
    transition: Zoom,
  });
};

// --------------------------------------------------
// tic tak toe
// helper function:
const Square: React.FC<SquareProps> = ({ value, onSquareClick }) => {
  // const [value, setValue] = useState(null);
  // const handleClick = () => {
  // setValue("X");
  // };

  return (
    <button
      onClick={onSquareClick}
      className="square border-2 border-zinc-400 h-16 w-16"
    >
      {value}
    </button>
  );
};

// tic tak toe ends there
// -------------------------------------------------

const tost = () => {
  // for the tic tak toe

  const schema: ZodType<FormData> = z.object({
    fullname: z.string().max(20).min(2),
    clzname: z.string().min(2).max(20),
    semester: z.number(),
    phone: z.string().min(10),
  });

  const { register, handleSubmit } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const submitedData = (data: FormData) => {
    console.log(data);
  };

  return (
    <>
      <button
        onClick={notify}
        className="bg-amber-100 px-4 py-2 mt-4 rounded-xl cursor-pointer"
      >
        Tost Implement
      </button>

      <hr className="mt-8" />
      <hr />
      <hr className="mb-8" />

      <p>Try</p>

      <div className="flex justify-center">
        <form
          className="bg-amber-100 flex flex-col gap-4 max-w-md p-4 justify-center items-center mt-4 rounded-xl"
          onSubmit={handleSubmit(submitedData)}
        >
          <p className="text-center font-bold text-2xl">Form</p>
          <input
            type="text"
            placeholder="Full Name"
            className="border-2 max-w-60"
            {...register("fullname")}
          />

          <input
            type="text"
            placeholder="College Name"
            className="border-2 max-w-60"
            {...register("clzname")}
          />

          <input
            type="number"
            placeholder="Semester/y]Year"
            className="border-2 max-w-60"
            {...register("semester", { valueAsNumber: true })}
          />

          <input
            type="text"
            placeholder="Mobile Number"
            className="border-2 max-w-60"
            {...register("phone")}
          />

          <input
            type="submit"
            className="bg-amber-300 w-full rounded cursor-pointer py-2"
          />
        </form>
      </div>

      <p>test </p>
      <hr className="mx-4 my-2" />
      <hr className="mx-4 my-2" />

      {/* ----------------------------------------- */}
      {/* tic tak toe section starts here */}

      <ToastContainer />
    </>
  );
};

export default tost;
