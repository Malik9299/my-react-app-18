import { FC, Fragment, useState } from "react";

const HoverCounter: FC = () => {
  const [count, setCount] = useState<number>(0);
  const incrementCount = () => {
    setCount((prev) => prev + 1);
  };
  return (
    <Fragment>
      <h3>Hover Counter</h3>
      <div onMouseOver={incrementCount}>
        <strong>Count: {count}</strong>
      </div>
    </Fragment>
  );
};

export default HoverCounter;
