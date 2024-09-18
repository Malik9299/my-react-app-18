import { FC, Fragment } from "react";
import ComponentD from "./ComponentD";

const ComponentC: FC = () => {
  return (
    <Fragment>
      <h2>ComponentC</h2>
      <ComponentD />
    </Fragment>
  );
};

export default ComponentC;
