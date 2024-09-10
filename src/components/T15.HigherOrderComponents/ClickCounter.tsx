import { FC, Fragment } from "react";

import UpdatedCounter from "./UpdatedCounter";

interface CounterProps {
  count: number;
  incrementCount: () => void;
}
const ClickCounter: FC<CounterProps> = ({ count, incrementCount }) => {
  return (
    <Fragment>
      <div>Count: {count}</div>
      <button onClick={incrementCount}>Click</button>
    </Fragment>
  );
};
export default UpdatedCounter(ClickCounter);
