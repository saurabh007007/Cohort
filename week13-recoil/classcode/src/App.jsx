import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { RecoilRoot, atom, useSetRecoilState, useRecoilValue } from "recoil";
import { counterAtom } from "./store/atom/Counter";

function App() {
  return (
    <RecoilRoot>
      <h1>Hello World</h1>
      <Counter></Counter>
    </RecoilRoot>
  );
}

function Button() {
  const setCount = useSetRecoilState(counterAtom);
  function increase() {
    setCount((c) => c + 1);
  }
  function decrease() {
    setCount((c) => c - 1);
  }
  return (
    <div>
      <button onClick={increase}>Increase </button>

      <button onClick={decrease}>Decrease</button>
    </div>
  );
}
function Counter() {
  const count = useRecoilValue(counterAtom);
  return (
    <div>
      {count}
      <Button></Button>
    </div>
  );
}
export default App;
