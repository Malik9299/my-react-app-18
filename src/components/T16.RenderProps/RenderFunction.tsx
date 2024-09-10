import { FC, Fragment } from "react";

interface RenderFunctionProps {
  name: string;
  setName: (value: string) => void;
}

const RenderFunction: FC<RenderFunctionProps> = ({ name, setName }) => {
  return (
    <Fragment>
      <div>Simple Render a Function</div>
      <div>Name: {name}</div>
      <div>
        <button onClick={() => setName("Awan")}>Set Name</button>
      </div>
    </Fragment>
  );
};
export default RenderFunction;
