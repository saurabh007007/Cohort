import React from "react";

export default function Button({ disabled, children, onClick }) {
  return (
    <div
      className="cursor-pointer px-32 py-8 text-white ${} "
      onClick={onClick}
    >
      {children}
    </div>
  );
}
