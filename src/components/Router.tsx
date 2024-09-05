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
import JsQuestion from "./JsQuestion";
import Hoisting from "./JsQuestion/Hoisting";
import LexicalScope from "./JsQuestion/LexicalScope";
import T03Closure from "./JsQuestion/T03Closure";

const Router = () => {
  return (
    <Fragment>
      <div id="main-layout" style={{ display: "flex" }}>
        <div className="left-side-bar">Design Patterns (Research)</div>
        <div className="main-content">
          <Routes>
            <Route path="live-interview" element={<LiveInterview />}>
              <Route path="api-integration" element={<APIIntegration />} />
              <Route path="make-dropdown" element={<MakeDropDown />} />
            </Route>
            <Route
              path="composition-vs-inheritance"
              element={<CompositionVsInheritance />}
            />
            <Route
              path="ClientSideRendering"
              element={<ClientSideRendering />}
            />
            <Route path="js-questions" element={<JsQuestion />}>
              <Route path="hoisting" element={<Hoisting />} />
              <Route path="lexical-scope" element={<LexicalScope />} />
              <Route path="closure" element={<T03Closure />} />
            </Route>
          </Routes>
        </div>
      </div>
    </Fragment>
  );
};

export default Router;
