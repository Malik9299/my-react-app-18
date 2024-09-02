import { FC, Fragment } from "react";

type Number = number[];
type String = string[];

const StringOrNumber: FC<{ numbers: String | Number }> = ({ numbers }) => {
  return (
    <Fragment>
      <h3>String Or Number</h3>
      <div>numbers[0]: {numbers[0]}</div>
    </Fragment>
  );
};

export default StringOrNumber;
