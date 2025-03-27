"use client";
import React from "react";
import Link from "next/link";

const Home: React.FC = () => {
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
            <Link href={"/Practise"}>Practise</Link>
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

      {/* hero section */}
      <section className="max-w-[1440px] container mx-auto relative text-center">
        <img
          src="/hero_image.png"
          alt="hero_image"
          className="max-w-[1440px] container mx-auto items-center w-full h-screen object-cover mx-auto"
        />

        <div className="absolute inset-0 text-white mt-16">
          <h1 className="font-primary font-bold bg-gradient-to-r text-5xl mb-8 from-[#FF7700]  via-[#CC9600] to-[#FF7700] bg-clip-text text-transparent md:px-8 px-4 mx-auto">
            The Book Lover's Dreamland Awaits!
          </h1>
          <p className="text-center font-primary text-[18px] w-1/2 mx-auto">
            Welcome to the ultimate book lover's paradise! Join our community
            and contribute to the ever -evolving library of stories, where every
            book has a chance to inspire someone new.
          </p>
        </div>
      </section>

      {/* now best picks section */}
      <section className="mx-30 my-30">
        <h1 className="text-center text-4xl font-bold font-primary">
          Our Best Picks
        </h1>
        <div className="grid md:grid-cols-4 grid-cols-2 mx-auto max-w-6xl mt-8 gap-8">
          <div className="flex flex-col justify-center items-center p-4 shadow-xl hover:scale-110 duration-200">
            <img src="/home_book1.png" alt="img1" />
            <p className="font-bold">Thunmanhandiya</p>
            <p>Mahagamasekara</p>
          </div>
          <div className="flex flex-col justify-center items-center p-4 shadow-xl hover:scale-110 duration-200">
            <img src="/home_book2.png" alt="img2" />
            <p className="font-bold">Gamperaliya</p>
            <p>Martin Wickramasinghe</p>
          </div>
          <div className="flex flex-col justify-center items-center p-4 shadow-xl hover:scale-110 duration-200">
            <img src="/home_book3.png" alt="img3" />
            <p className="font-bold">Nectar in a Sieve</p>
            <p>Kamala Markandaya</p>
          </div>
          <div className="flex flex-col justify-center items-center p-4 shadow-xl hover:scale-110 duration-200">
            <img src="/home_book4.png" alt="img4" />
            <p className="font-bold">Adaraneeya Victoria</p>
            <p>Mohan Raj Madawala</p>
          </div>
        </div>
      </section>

      {/* last part starts here */}
      <section className="bg-black p-6 md:flex-row flex flex-col  justify-between items-center py-20 md:max-w-[1440px] mx-auto">
        {/* Left Section (Image) */}
        <div className="w-full md:w-1/2 flex justify-center">
          <img
            src="/footer_image.png"
            alt="footer_image"
            className="max-w-full h-auto"
          />
        </div>

        {/* Right Section (Text) */}
        <div className="flex flex-col gap-7 pl-8 text-white md:w-1/2 pr-10">
          <h1 className="text-3xl font-primary font-bold tracking-wide">
            Your favourite{" "}
            <span className="text-[#CC9600]">
              Reads <br /> Are Here!
            </span>
          </h1>
          <p>
            Buy your favorite books online with ease! Enjoy exclusive offers and
            discounts on selected titles. Dive into our collection and find
            special deals that make reading more affordable. Shop now and unlock
            more savings with every purchase!
          </p>
          <div className="flex justify-between">
            <p className="text-[#CC9600]">
              <span className="font-bold text-2xl">800+</span>
              <br /> Book Listing
            </p>
            <p className="text-[#CC9600]">
              <span className="font-bold text-2xl">1K+</span>
              <br /> Registered Members
            </p>
            <p className="text-[#CC9600]">
              <span className="font-bold text-2xl">50+</span>
              <br /> Branch Count
            </p>
          </div>
          <button className="border-2 py-2 cursor-pointer rounded hover:border-[#CC9600] hover:text-[#CC9600] duration-250">
            Explore More
          </button>
        </div>
      </section>
    </>
  );
};

export default Home;
