import React from "react";
import Navbar from "../Navbar/Navbar";
import Buttons from "../Buttons/Buttons";

export default function Landing() {
  return (
    <>
      <Navbar />
      <div className="flex flex-col items-center justify-center h-screen">
        <h1 className="max-w-2xl py-2 pt-36 text-center text-5xl font-extrabold tracking-tighter md:text-6xl xl:text-7xl">
          <span className="w-fit bg-gradient-to-b from-blue-400 to-blue-700 bg-clip-text pr-1.5 text-center text-transparent md:mb-4">
            100xDevs,
          </span>
          <span>because 10x ain't enough!</span>
        </h1>
        <p className="mx-auto text-center text-lg font-medium tracking-tight text-primary/80 md:text-xl">
          A beginner-friendly platform for mastering programming skills
        </p>
        <div className="flex items-center justify-center gap-4 py-10">
          <Buttons name="Explore Cources" />
          <Buttons name="Explore Notes" />
        </div>
      </div>
    </>
  );
}
