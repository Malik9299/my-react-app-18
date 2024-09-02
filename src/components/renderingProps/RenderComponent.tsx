import { FC, Fragment } from "react";

const RenderComponent: FC<{
  renderComponent: (loged: boolean) => JSX.Element;
}> = ({ renderComponent }) => {
  return (
    <Fragment>
      <h3>Render Component</h3>
      <div>{renderComponent(false)}</div>
    </Fragment>
  );
};
export default RenderComponent;
