import { FC, Fragment } from "react";
// import SimpleProps from "./SimpleProps";
import StringOrNumber from "./genericTypes/StringOrNumber";
import GenericTypes from "./genericTypes/GenericTypes";
import GenericButton from "./genericTypes/GenericButton";
import AllAboutGeneric from "./genericTypes";

const ImplementProps: FC = () => {
  const data = [
    { id: 121, designation: "SSE" },
    { id: 122, designation: "SE" },
  ];

  return (
    <Fragment>
      <h3>Implement Props</h3>
      <AllAboutGeneric />
      aaa
    </Fragment>
  );
};
export default ImplementProps;
