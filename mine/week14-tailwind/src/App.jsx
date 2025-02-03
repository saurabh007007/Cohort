import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="grid grid-cols-12 ">
        <div className="bg-red-500 col-span-12 sm:col-span-5 ">child 1</div>
        <div className="bg-blue-500 col-span-12 sm:col-span-3">child 2</div>
        <div className="bg-green-500 col-span-12 sm:col-span-4">child 3</div>
      </div>
    </>
  );
}

export default App;
