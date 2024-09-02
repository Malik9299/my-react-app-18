import { FC, Fragment } from "react";
import ClassComponent from "./ClassComponent";
import FunctionalComponent from "./FunctionalComponent";

const FunctionalAndClassComponents: FC = () => {
  return (
    <Fragment>
      <div>Functional And Class Components</div>
      <ClassComponent name="Malik" />
      <FunctionalComponent />
    </Fragment>
  );
};

export default FunctionalAndClassComponents;
