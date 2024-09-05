import { FC, Fragment } from "react";
import LiveInterviewSolutions from "./liveInterviewSolutions";
import NaveBar from "./NaveBar";
import Router from "./Router";
// import FunctionalAndClassComponents from "./T01.functionalAndClassComponents";
// import ReactBatchesStateUpdates from "./T02ReactBatchesStateUpdates";
// import ImplementProps from "./typeScript";
// import RenderingProps from "./renderingProps";

const MainComponent: FC = () => {
  return (
    <Fragment>
      {/* <h1>Main Component</h1> */}
      {/* <FunctionalAndClassComponents /> */}
      {/* <ReactBatchesStateUpdates /> */}
      {/* <ImplementProps /> */}
      {/* <RenderingProps /> */}
      {/* <LiveInterviewSolutions /> */}
      <NaveBar />
      <Router />
    </Fragment>
  );
};

export default MainComponent;
