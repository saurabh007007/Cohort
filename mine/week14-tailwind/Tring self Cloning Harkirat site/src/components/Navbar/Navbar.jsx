import React from "react";
import kirat from "../../assets/NavbarAssets/kirat.jpg";
import Buttons from "../Buttons/Buttons";

export default function Navbar() {
  return (
    <nav className="fixed top-0 z-[999] w-full border-b border-primary/10 bg-background flex justify-center">
      <div className="wrapper flex w-full items-center justify-between p-3 mx-80 ">
        <div className="flex items-center gap-4">
          <img src={kirat} alt="" className="w-10 h-10 rounded-full" />
          <h1 className="text-2xl font-bold">100xDevs</h1>
        </div>
        <div className="flex items-center gap-4 justify-between">
          <Buttons name="Login" bg="blue" />
          <Buttons name="Signup" bg="red" />
        </div>
      </div>
    </nav>
  );
}
