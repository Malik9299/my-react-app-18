import { FC, Fragment, useState } from "react";
import UserRenderProps from "./UserRenderProps";
import RenderComponent from "./RenderComponent";
import RenderFunction from "./RenderFunction";

const RenderProps: FC = () => {
  const [name, setName] = useState("");
  return (
    <Fragment>
      <h2>RenderProps</h2>
      <p>
        The term “render prop” refers to a technique for sharing code between
        React components using a prop whose value is a function.
      </p>
      <p>
        A component with a render prop takes a function that returns a React
        element and calls it instead of implementing its own render logic.
      </p>
      <UserRenderProps
        title="Render Props"
        name={() => "Malik"}
        age={() => 20}
        loged={(isLogedIn) => (isLogedIn ? "Malik" : "Guest")}
      />
      <UserRenderProps
        title="Render Props with Render Component"
        render={(count, incrementCount) => (
          <RenderComponent count={count} incrementCount={incrementCount} />
        )}
      />
      <h2>Simple Render a Function</h2>
      <RenderFunction name={name} setName={setName} />
    </Fragment>
  );
};

export default RenderProps;
