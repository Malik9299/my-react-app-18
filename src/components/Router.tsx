import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import LiveInterview from "../pages/LiveInterview";
import APIIntegration from "./liveInterviewSolutions/APIIntegration/APIIntegration";
import MakeDropDown from "./liveInterviewSolutions/makeDropDown";
// const { Fragment } = require("react");
import { Fragment } from "react/jsx-runtime";
import CompositionVsInheritance from "./T34.CompositionVsInheritance";
import ClientSideRendering from "./T42.ClientSideRendering/ClientSideRendering";

const Router = () => {
  return (
    <Fragment>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="live-interview" element={<LiveInterview />}>
          <Route path="api-integration" element={<APIIntegration />} />
          <Route path="make-dropdown" element={<MakeDropDown />} />
        </Route>
        <Route
          path="composition-vs-inheritance"
          element={<CompositionVsInheritance />}
        />
        <Route path="ClientSideRendering" element={<ClientSideRendering />} />
      </Routes>
    </Fragment>
  );
};

export default Router;
