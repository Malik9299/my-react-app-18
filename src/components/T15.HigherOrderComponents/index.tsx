import { FC, Fragment, useState } from "react";
import ClickCounter from "./ClickCounter";

const HigherOrderComponents: FC = () => {
  const [name, setName] = useState("");
  return (
    <Fragment>
      <h2>Higher Order Components</h2>
      <p>
        A higher-order component is a function that takes a component and
        returns a new component.
      </p>
      <p>
        A component with a render prop takes a function that returns a React
        element and calls it instead of implementing its own render logic.
      </p>
      <ClickCounter />
    </Fragment>
  );
};

export default HigherOrderComponents;
