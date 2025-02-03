import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Sidebar from "./components/Sidebar";
import Dashboard from "./components/Dashboard";
function App() {
  return (
    <>
      <div className="flex">
        <Sidebar />
        <Dashboard />
      </div>
    </>
  );
}

export default App;
