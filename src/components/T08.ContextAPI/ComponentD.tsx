import { FC, Fragment } from "react";
import ComponentE from "./ComponentE";

const ComponentD: FC = () => {
  return (
    <Fragment>
      <h2>ComponentD</h2>
      <ComponentE />
    </Fragment>
  );
};

export default ComponentD;
