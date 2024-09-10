import { render } from "@testing-library/react";
import { FC, Fragment } from "react";

interface UserProps {
  count: number;
  incrementCount: () => void;
}
const RenderComponent: FC<UserProps> = ({ count, incrementCount }) => {
  return (
    <Fragment>
      <h3>Render Component</h3>
      <h4>{count}</h4>
      <div>
        <button onClick={incrementCount}>Click Counter</button>
      </div>
    </Fragment>
  );
};

export default RenderComponent;
