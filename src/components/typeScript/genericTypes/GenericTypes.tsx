import { FC, Fragment } from "react";

import { getFirstWithGeneric } from "../GenericInFunction";

interface GenericProps<T> {
  numbers: T[];
}

const GenericTypes: FC<GenericProps<string | number>> = ({ numbers }) => {
  return (
    <Fragment>
      <h3>Generic Types</h3>
      <div>numbers[0]: {getFirstWithGeneric(numbers)}</div>
    </Fragment>
  );
};

export default GenericTypes;
