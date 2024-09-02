import { FC, Fragment } from "react";
import ClickCounter from "./ClickCounter";
import HoverCounter from "./HoverCounter";
import Counter from "./Counter";
import RenderString from "./RenderString";
import RenderComponent from "./RenderComponent";
import RenderName from "./RenderName";

const RenderingProps: FC = () => {
  return (
    <Fragment>
      <h2>Rendering Props</h2>

      <RenderString renderString={() => "Test String"} />

      <RenderComponent
        renderComponent={(loged) => <RenderName loged={loged} name="Awan" />}
      />

      <Counter
        renderProps={(count, incrementCount) => (
          <ClickCounter count={count} incrementCount={incrementCount} />
        )}
      />
      <HoverCounter />
    </Fragment>
  );
};
export default RenderingProps;
