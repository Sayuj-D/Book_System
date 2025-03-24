"use client";
import Link from "next/link";
import React, { useState } from "react";
import axios from "axios";

const API_KEY = "AIzaSyBe57R_xN0m2T0oTt6RTwgzlWRXVimtyQs";

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState("");

  const handleSearch = () => {
    if (query.trim() !== "") {
      onSearch(query);
    }
  };

  return (
    <div className="flex justify-center gap-4 my-4">
      <input
        type="text"
        placeholder="Search books..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="border p-2 w-64 rounded"
      />
      <button
        onClick={handleSearch}
        className="bg-black text-white px-4 py-2 rounded"
      >
        Search
      </button>
    </div>
  );
};

const BookList = ({ books }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
      {books.map((book) => (
        <div key={book.id} className="border p-4 rounded shadow-md">
          <img
            src={book.volumeInfo.imageLinks?.thumbnail || "/placeholder.png"}
            alt={book.volumeInfo.title}
            className="w-full h-40 object-cover"
          />
          <h3 className="text-lg font-semibold mt-2">
            {book.volumeInfo.title}
          </h3>
          <p className="text-sm text-gray-600">
            {book.volumeInfo.authors?.join(", ")}
          </p>
          <button className="bg-zinc-600 text-white">Buy Now</button>
        </div>
      ))}
    </div>
  );
};

const Page = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchBooks = async (query) => {
    setLoading(true);
    try {
      const response = await axios.get(
        `https://www.googleapis.com/books/v1/volumes?q=${query}&key=${API_KEY}`
      );
      setBooks(response.data.items || []);
    } catch (error) {
      console.error("Error fetching books:", error);
    }
    setLoading(false);
  };

  return (
    <>
      {/* Header Section */}
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
            <img src="/Bell_nav.png" alt="" className="h-5 w-5" />
            <div className="flex flex-col justify-center items-center">
              <img src="/user_image.png" alt="" className="w-9 h-8" />
              <p className="text-[12px] cursor-pointer">Sayujya</p>
            </div>
          </div>
        </nav>
      </header>

      {/* Main Section */}
      <section className="md:max-w-[1440px] mx-auto p-8">
        <h1 className="text-3xl text-center font-primary">Book Shop:</h1>
        <SearchBar onSearch={fetchBooks} />
        {loading ? (
          <p className="text-center">Loading...</p>
        ) : (
          <BookList books={books} />
        )}
      </section>
    </>
  );
};

export default Page;
