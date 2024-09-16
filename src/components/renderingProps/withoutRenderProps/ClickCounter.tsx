import { FC, Fragment, useState } from "react";

const ClickCounter = () => {
  const [count, setCount] = useState<number>(0);
  const incrementCount = () => {
    setCount((prev) => prev + 1);
  };
  return (
    <Fragment>
      <div>Click Counter</div>
      <div>Count: {count}</div>
      <button onClick={incrementCount}>Click</button>
    </Fragment>
  );
};

export default ClickCounter;
