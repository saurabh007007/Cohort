import React from "react";

export default function Buttons({ name }) {
  return (
    <div className="flex items-center gap-4">
      <button
        className={`bg-primary text-white px-4 py-2 rounded-lg border border-primary bg-blue-600`}
      >
        {name}
      </button>
    </div>
  );
}
