import { FC, Fragment, useState } from "react";

type RenderProps = (count: number, incrementCount: () => void) => JSX.Element;
const Counter: FC<{ renderProps: RenderProps }> = ({ renderProps }) => {
  const [count, setCount] = useState(0);
  const incrementCount = () => {
    setCount((prev) => prev + 1);
  };
  return (
    <Fragment>
      <h3>Counter</h3>
      <div>{renderProps(count, incrementCount)}</div>
    </Fragment>
  );
};

export default Counter;
