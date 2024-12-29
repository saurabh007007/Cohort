import React from "react";

interface PropsType {
  placeholder: string;
}
export default function TextInput({ placeholder }: PropsType) {
  return (
    <div
      style={{
        padding: "10px",
        margin: "10px",
        border: "1px solid #ccc",
      }}
    >
      <input
        type="text"
        placeholder={placeholder}
        style={{
          padding: "5px",
          fontSize: "16px",
          border: "1px solid #ccc",
        }}
      />
    </div>
  );
}
