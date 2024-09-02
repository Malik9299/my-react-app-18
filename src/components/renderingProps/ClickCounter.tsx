import { FC, Fragment, useState } from "react";

const ClickCounter: FC<{ count: number; incrementCount: () => void }> = ({
  count,
  incrementCount,
}) => {
  return (
    <Fragment>
      <h3>Click Counter</h3>
      <button onClick={incrementCount}>Count: {count}</button>
    </Fragment>
  );
};

export default ClickCounter;
