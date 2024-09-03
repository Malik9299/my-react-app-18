import { useState } from "react";
import { Fragment } from "react/jsx-runtime";

const ReactBatchesStateUpdates = () => {
  const [number, setNumber] = useState(0);
  const handleClick = () => {
    // setNumber(number + 1);
    // setNumber(number + 1);
    // setNumber(number + 1);
    setNumber((n) => n + 1);
    setNumber((n) => n + 1);
    setNumber((n) => n + 1);
  };
  console.log("Component Rendering");
  return (
    <Fragment>
      <div>ReactBatchesStateUpdates</div>
      <button onClick={handleClick}>number+3: {number}</button>
    </Fragment>
  );
};

export default ReactBatchesStateUpdates;
