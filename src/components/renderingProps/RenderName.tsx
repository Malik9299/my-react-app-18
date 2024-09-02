import { FC, Fragment } from "react";

const RenderName: FC<{ loged: boolean; name: string }> = ({ loged, name }) => {
  return (
    <Fragment>
      <div>Render Name: {loged ? name : "guest"} </div>
    </Fragment>
  );
};
export default RenderName;
