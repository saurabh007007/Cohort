import React from "react";

export default function Signin() {
  return (
    <div className="bg-red-500">
      <div>
        <input type="text" placeholder="username" />
        <br />
        <br />
        <input type="password" placeholder="password" />

        <br />
        <button>Submit</button>
      </div>
    </div>
  );
}
