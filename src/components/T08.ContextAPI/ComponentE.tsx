import { FC, Fragment } from "react";
import { UserConsumer } from "../../UserContext";

const ComponentE: FC = () => {
  return (
    <Fragment>
      <h2>ComponentE</h2>
      <UserConsumer>
        {(userName) => {
          return <div>Hi: {userName}</div>;
        }}
      </UserConsumer>
    </Fragment>
  );
};

export default ComponentE;
