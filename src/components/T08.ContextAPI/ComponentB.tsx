import { FC, Fragment } from "react";
import ComponentC from "./ComponentC";

const ComponentB: FC = () => {
  return (
    <Fragment>
      <h2>ComponentB</h2>
      <ComponentC />
    </Fragment>
  );
};

export default ComponentB;
