import Link from "next/link";
import React from "react";

const Login = () => {
  return (
    <>
      <div className="relative w-full h-screen shadow-2xl">
        <img
          src="/background.png"
          alt="image"
          className="absolute w-full h-full object-cover"
        />
        <div className="flex justify-center items-center h-screen flex-col gap-y-4">
          <div className="relative bg-white mx-auto w-sm p-8 rounded-2xl flex flex-col gap-y-4 shadow-xl">
            <h1 className="text-center text-2xl">
              My <span className="text-orange-400">Book</span> <br /> Shelf
            </h1>
            <p className="text-center text-gray-500">Welcome Back!</p>

            {/* form start here for username and password */}
            <form className="flex flex-col gap-y-0.5">
              <label htmlFor="email">Email:</label>
              <input
                id="email"
                type="text"
                className="border-2 p-2 rounded border-slate-200"
              />
              <br />
              <label htmlFor="pwd">Password:</label>
              <input
                id="pwd"
                type="password"
                className="border-2 rounded border-slate-200 p-2"
              />
            </form>

            <div className="flex justify-between items-center">
              {/* left section */}
              <div className="flex justify-center items-center gap-2">
                <label
                  htmlFor="remember_me"
                  className="justify-center items-center"
                >
                  Remember me
                </label>
                <input
                  id="remember_me"
                  type="checkbox"
                  className="justify-center items-center"
                />
                {/* right section */}
              </div>
              <a href="" className="text-blue-500">
                Fogot password?
              </a>
            </div>
            <Link
              href={"/Home"}
              className="bg-orange-400 py-2 rounded w-full text-white font-medium text-[18px] cursor-pointer text-center"
            >
              Login
            </Link>
            <div className="flex justify-between">
              <p>New User? Register Here</p>
              <p>Use as Guest</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
