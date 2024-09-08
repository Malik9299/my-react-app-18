import { FC, useState } from "react";
import { Fragment } from "react/jsx-runtime";

interface CounterProps {
  initialCount: number;
}
const Counter: FC<CounterProps> = ({ initialCount }) => {
  const [count, setCount] = useState(initialCount);
  return (
    <Fragment>
      <h3>
        Counter: <div data-testid="count">{count}</div>
      </h3>
      <div>
        <button data-testid="increment" onClick={() => setCount((n) => n + 1)}>
          Increment
        </button>
        <button onClick={() => setCount((n) => n - 1)}>Decrement</button>
        <button onClick={() => setCount(initialCount)}>Reset</button>
      </div>
    </Fragment>
  );
};
export default Counter;
