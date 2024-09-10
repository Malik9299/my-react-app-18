import { FC, Fragment } from "react";

interface RenderProps {
  loged: (value: boolean) => string;
}
const PropsRendering: FC<RenderProps> = ({ loged }) => {
  return (
    <Fragment>
      <div> User: {loged(true)}</div>
    </Fragment>
  );
};

function App() {
  return (
    <div className="App">
      <PropsRendering loged={(isLogedin) => (isLogedin ? "Admin" : "guest")} />
    </div>
  );
}

export default App;
