import { FC, Fragment } from "react";
import NaveBar from "./NaveBar";
import Router from "./Router";

const MainLayout: FC = () => {
  return (
    <Fragment>
      <NaveBar />
      <Router />
    </Fragment>
  );
};

export default MainLayout;
