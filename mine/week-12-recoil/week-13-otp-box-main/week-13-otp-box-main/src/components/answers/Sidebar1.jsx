import React from "react";

export default function Sidebar1() {
  return (
    <div className="flex">
      <div className="bg-green-500 transition-all duration-200 ease-in-out w-74 h-screen w-0 md:w-96 ">
        Sidebar1
      </div>
      <div className="bg-red-500 w-full">Content</div>
    </div>
  );
}
