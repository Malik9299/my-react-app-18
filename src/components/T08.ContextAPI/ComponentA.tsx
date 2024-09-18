import { FC, Fragment, useState } from "react";
import ComponentB from "./ComponentB";
import { UserProvider } from "../../UserContext";

const ComponentA: FC = () => {
  const [personName, setPersonName] = useState("Malik");
  return (
    <Fragment>
      <h2>ComponentA</h2>
      <button onClick={() => setPersonName("AG")}>Change user name</button>
      <UserProvider value={personName}>
        <ComponentB />
      </UserProvider>
    </Fragment>
  );
};

export default ComponentA;
