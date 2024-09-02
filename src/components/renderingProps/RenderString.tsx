import { FC, Fragment } from "react";

const RenderString: FC<{ renderString: () => string }> = ({ renderString }) => {
  return (
    <Fragment>
      <h3>Render String</h3>
      <div>{renderString()}</div>
    </Fragment>
  );
};
export default RenderString;
