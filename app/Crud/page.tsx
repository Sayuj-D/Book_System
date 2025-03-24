"use client";

import React, { useState } from "react";
import Link from "next/link";

interface Book {
  name: string;
  description: string;
}

const Greetings: React.FC = () => {
  let myDate = new Date();
  let hours = myDate.getHours();
  let greet: string;

  if (hours < 12) greet = "morning";
  else if (hours >= 12 && hours <= 17) greet = "afternoon";
  else if (hours >= 17 && hours <= 24) greet = "evening";

  return (
    <span className="text-3xl font-medium text-slate-800 font-primary">
      Good {greet}, Sayujya
    </span>
  );
};

const handleAddBook = (name: string, description: string) => {
  if (name && description) {
    const newBook = { name, description };

    // return book if there are any if not [].
    const storedBooks = localStorage.getItem("books");
    const books = storedBooks ? JSON.parse(storedBooks) : [];

    // check for the duplicacy here
    const isDuplicate = books.some(
      (book: { name: string }) => book.name.toLowerCase() === name.toLowerCase()
    );

    if (isDuplicate) {
      alert("This book already exists!");
    } else {
      books.push(newBook);
      localStorage.setItem("books", JSON.stringify(books));
      alert("Book added successfully!");
    }
  } else {
    alert("Please fill up both fields!");
  }
};

const page: React.FC = () => {
  const [name, setName] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  return (
    <>
      {/* header section here */}
      <header className="bg-black text-white z-50 md:max-w-[1440px] mx-auto">
        <nav className="flex items-center max-w-[1280px] container mx-auto px-8 py-2 justify-between">
          <div className="flex justify-center items-center">
            <img src="/logo_image.png" alt="" className="w-20 h-20" />
            <h1 className="font-primary tracking-wide text-[#CC9600] font-bold text-xl">
              NETH <br /> BOOKPOINT{" "}
            </h1>
          </div>

          <ul className="gap-8 font-primary hidden md:flex">
            <Link href={"/Home"}>Home</Link>
            <li className="cursor-pointer">About</li>
            <Link href={"/Shop"}>Shop</Link>
            <Link href={"/View"}>View</Link>
            <Link href={"/Crud"}>MyShelf</Link>
          </ul>
          <div className="flex gap-8 justify-center items-center">
            <img src="/Bell_nav.png" alt="" className=" h-5 w-5" />
            <div className="flex flex-col justify-center items-center">
              {" "}
              <img src="/user_image.png" alt="" className="w-9 h-8" />
              <p className="text-[12px] cursor-pointer">Sayujya</p>
            </div>
          </div>
        </nav>
      </header>

      {/* today' quote and normal book list section */}
      <section className="md:flex-row flex flex-col md:max-w-[1440px] mx-auto justify-around p-8 gap-4 h-[250px]">
        {/* API section, quote */}
        <div className="bg-gradient-to-r  from-[#333333] to-[#000000] w-full h-full md:w-1/2 rounded-2xl text-white px-4 justify-center flex flex-col ">
          <span className="font-medium mb-2 text-xl">Today's Quote</span>
          “There is more treasure in books than in all the pirate’s loot on
          Treasure Island.” <br />
          <br />
          {/* icon here */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="lucide lucide-ellipsis"
          >
            <circle cx="12" cy="12" r="1" />
            <circle cx="19" cy="12" r="1" />
            <circle cx="5" cy="12" r="1" />
          </svg>
        </div>

        {/* Book display section */}

        <div className="border-slate-600 border-2 rounded-2xl hidden md:block md:w-1/2">
          {/* right side */}
          <div className="h-full">
            <button className="h-full w-1/9 bg-gradient-to-b from-[#000000] to-[#555555] rounded-l-xl text-white font-medium ">
              <p className="rotate-270 tracking-widest">Books</p>
            </button>
          </div>
          {/* left side */}
          <div></div>
        </div>
      </section>

      {/* greeting section */}
      <section className="md:max-w-[1440px] mx-auto px-8 py-5">
        <div>
          {" "}
          <Greetings />
          <div className="text-[16px] tracking-wider text-slate-600">
            Add your Books Down Here
          </div>
        </div>
      </section>

      {/* Crud Operation: */}

      {/* Add operation here */}
      <section className="md:max-w-[1440px] mx-auto p-8 ">
        <form
          className="flex flex-col gap-1"
          onSubmit={(e) => {
            e.preventDefault();
          }}
        >
          <input
            type="text"
            placeholder="Book Name"
            className="border-2 border-zinc-300 p-2  focus:outline-zinc-400"
            value={name}
            onChange={(e) => {
              // trim here
              setName(e.target.value.trim());
            }}
          />
          <br />
          <textarea
            placeholder="Description"
            className="border-2 border-zinc-300 p-2 focus:outline-zinc-400"
            value={description}
            onChange={(e) => {
              setDescription(e.target.value);
            }}
          ></textarea>

          <button
            className="bg-black text-white font-semibold p-4 mt-4 hover:bg-[#333333] hover:shadow-xl duration-250 cursor-pointer"
            onClick={() => {
              handleAddBook(name, description);
              setName("");
              setDescription("");
            }}
          >
            Add Book
          </button>
        </form>
      </section>
    </>
  );
};

export default page;
