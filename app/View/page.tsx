"use client";

import Link from "next/link";
import React, { useState, useEffect } from "react";

// variable decleration here
const ViewBooks = () => {
  const [books, setBooks] = useState([]);
  const [editingBook, setEditingBook] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [updatedName, setUpdatedName] = useState("");
  const [updatedDescription, setUpdatedDescription] = useState("");

  // Load books from localStorage
  useEffect(() => {
    const storedBooks = JSON.parse(localStorage.getItem("books") || "[]");
    setBooks(storedBooks);
  }, []);

  // Delete a book not string but with index, trim is used for string.
  const handleDelete = (index: number) => {
    const updatedBooks = books.filter((_, i) => i !== index);
    setBooks(updatedBooks);
    localStorage.setItem("books", JSON.stringify(updatedBooks));
  };

  // Open modal and set book data for editing
  const handleEdit = (
    book: { name: string; description: string },
    index: number
  ) => {
    setEditingBook(index);
    setUpdatedName(book.name || "");
    setUpdatedDescription(book.description || "");
    setShowModal(true);
  };

  // Update book details
  const handleUpdate = () => {
    if (editingBook !== null) {
      const updatedBooks = [...books];
      updatedBooks[editingBook] = {
        name: updatedName,
        description: updatedDescription,
      };
      setBooks(updatedBooks);
      localStorage.setItem("books", JSON.stringify(updatedBooks));
      alert("Book updated successfully!");
      setShowModal(false);
      setEditingBook(null);
    }
  };

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

      <section className="max-w-[1440px] container mx-auto p-8">
        <h1 className="text-3xl font-semibold mb-6 font-primary text-[#CC9600] text-center">
          Explore All Books Here
        </h1>
        {books.length === 0 ? (
          <p>No books available</p>
        ) : (
          <ul className="space-y-4">
            {books.map(
              (book: { name: string; description: string }, index: number) => (
                <li
                  key={index}
                  className="border p-4 rounded-lg flex justify-between items-center"
                >
                  <div>
                    <h2 className="text-lg font-semibold">
                      {book.name || "No Title"}
                    </h2>{" "}
                    <p className="text-gray-600">
                      {book.description || "No Description"}
                    </p>
                  </div>
                  <div className="space-x-2">
                    <button
                      onClick={() => handleEdit(book, index)}
                      className="bg-gray-700 text-white px-3 py-1 rounded cursor-pointer hover:bg-green-700 hover:shadow-xl hover:shadow-green-200"
                    >
                      Update
                    </button>
                    <button
                      onClick={() => handleDelete(index)}
                      className="bg-gray-700 text-white px-3 py-1 rounded cursor-pointer hover:bg-red-500"
                    >
                      Delete
                    </button>
                  </div>
                </li>
              )
            )}
          </ul>
        )}

        {/* Update Modal */}
        {showModal && (
          <div className="fixed inset-0 bg-gray-50 bg-opacity-25 flex items-center justify-center gap-8">
            <div className="bg-gray-100 p-6 rounded-lg shadow-lg w-96">
              <h2 className="font-semibold mb-6 text-xl text-center">
                Update Book
              </h2>
              <input
                type="text"
                value={updatedName}
                onChange={(e) => setUpdatedName(e.target.value)}
                className="w-full border p-2 rounded mb-2"
                placeholder="Book Name"
              />
              <textarea
                value={updatedDescription}
                onChange={(e) => setUpdatedDescription(e.target.value)}
                className="w-full border p-2 rounded mb-2"
                placeholder="Book Description"
              />
              <div className="flex justify-end space-x-2">
                <button
                  onClick={() => setShowModal(false)}
                  className="bg-gray-700 text-white px-3 py-1 rounded hover:bg-red-500 cursor-pointer"
                >
                  Cancel
                </button>
                <button
                  onClick={handleUpdate}
                  className="bg-gray-700 text-white px-3 py-1 rounded hover:bg-green-600 cursor-pointer"
                >
                  Save
                </button>
              </div>
            </div>
          </div>
        )}
      </section>

      {/* footer section starts here */}
      <div className="flex flex-col min-h-screen justify-end">
        <footer className="max-w-[1440px] container mx-auto flex flex-col bg-black">
          <div>
            <img src="main_footer_img.png" alt="footer_image" />
          </div>

          <hr className="h-px my-2 mx-4 bg-gray-200 border-0 dark:bg-gray-700"></hr>

          <div className="md:flex-row flex flex-col justify-around items-center py-8">
            <p className="text-white">© 2024 | Neth BookPoint</p>
            <p className="text-[#CC9600]">
              Visit our branches in Galle, Kurunegala, Kandy, and Colombo, and
              register for our online platform to enjoy maximum benefits!
            </p>
            <img src="fb_icon.png" alt="fb_icon" />
            <img src="in_icon.png" alt="in_icon" />
          </div>
        </footer>
      </div>
    </>
  );
};

export default ViewBooks;
