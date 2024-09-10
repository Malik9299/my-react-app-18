import { render } from "@testing-library/react";
import { FC, Fragment, useState } from "react";

interface UserProps {
  title?: string;
  age?: () => number;
  name?: () => string;
  loged?: (value: boolean) => string;
  render?: (value: number, incrementValue: () => void) => React.ReactNode;
}
const UserRenderProps: FC<UserProps> = ({
  title,
  age,
  name,
  loged,
  render,
}) => {
  const [value, setValue] = useState(0);
  const incrementValue = () => {
    setValue((n) => n + 1);
  };
  return (
    <Fragment>
      <h3>{title ? title : "Other title"}</h3>
      <div>Name: {name ? name() : "Not Provided"}</div>
      <div> Age: {age ? age() : "Not provided"}</div>
      <div>Loged: {loged ? loged(true) : "Loged Not Found"}</div>
      <div>Loged: {loged ? loged(false) : "Loged Not Found"}</div>
      <div>
        Render Component:{" "}
        {render ? render(value, incrementValue) : "No Render Component"}
      </div>
    </Fragment>
  );
};

export default UserRenderProps;
