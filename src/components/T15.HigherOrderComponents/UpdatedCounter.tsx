import { useState } from "react";
import { Fragment } from "react/jsx-runtime";

const UpdatedCounter = (OriginalComponent: any) => {
  const NewComponent = () => {
    const [count, setCount] = useState<number>(0);
    const incrementCount = () => {
      setCount((n) => n + 1);
    };
    return (
      <Fragment>
        <OriginalComponent count={count} incrementCount={incrementCount} />
      </Fragment>
    );
  };
  return NewComponent;
};
export default UpdatedCounter;
