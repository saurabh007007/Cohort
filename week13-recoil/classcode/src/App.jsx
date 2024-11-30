import { memo, useState } from "react";
import "./App.css";
import {
  RecoilRoot,
  atom,
  selector,
  useRecoilValue,
  useSetRecoilState,
} from "recoil";
import { counterAtom } from "./store/atom/Counter";

function App() {
  return (
    <RecoilRoot>
      <Counter />
      <IsEven />
    </RecoilRoot>
  );
}
const memorized = memo(CurrentCount);
function Counter() {
  return (
    <div>
      <CurrentCount />
      <Increase />
      <Decrease />
    </div>
  );
}
const even = selector({
  key: "isEvenSelector",
  get: ({ get }) => {
    const count = get(counterAtom);
    const isEven = CurrentCount % 2 === 0;
    return isEven;
  },
});
const IsEven = () => {
  const isEven = useRecoilValue(counterAtom);
  return <div>{isEven ? "Even" : "Odd"}</div>;
};

function CurrentCount() {
  const count = useRecoilValue(counterAtom);
  return <div>{count}</div>;
}

function Decrease() {
  const setCount = useSetRecoilState(counterAtom);

  function decrease() {
    setCount((c) => c - 1);
  }

  return (
    <div>
      <button onClick={decrease}>Decrease</button>
    </div>
  );
}

function Increase() {
  const setCount = useSetRecoilState(counterAtom);

  function increase() {
    setCount((c) => c + 1);
  }

  return (
    <div>
      <button onClick={increase}>Increase</button>
    </div>
  );
}

export default App;
