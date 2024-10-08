import { Route, Routes } from "react-router-dom";
import LiveInterview from "../pages/LiveInterview";
import APIIntegration from "./liveInterviewSolutions/APIIntegration/APIIntegration";
import MakeDropDown from "./liveInterviewSolutions/makeDropDown";
import { Fragment } from "react/jsx-runtime";
import CompositionVsInheritance from "./T34.CompositionVsInheritance";
import ClientSideRendering from "./T42.ClientSideRendering/ClientSideRendering";
import JsQuestion from "./JsQuestion";
import Hoisting from "./JsQuestion/Hoisting";
import LexicalScope from "./JsQuestion/LexicalScope";
import T03Closure from "./JsQuestion/T03Closure";
import Home from "../pages/Home";
import T04UseOfThis from "./JsQuestion/T04UseOfThis";
import Tests from "./T33.Tests/Tests";
import RenderProps from "./T16.RenderProps";
import HigherOrderComponents from "./T15.HigherOrderComponents";
import ContextAPI from "./T08.ContextAPI/ContextAPI";

const Router = () => {
  return (
    <Fragment>
      <div id="main-layout" style={{ display: "flex" }}>
        <div className="left-side-bar">Design Patterns (Research)</div>
        <div className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/tests" element={<Tests />} />

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
              <Route path="use-of-this" element={<T04UseOfThis />} />
            </Route>
            <Route path="render-props" element={<RenderProps />} />
            <Route path="hoc" element={<HigherOrderComponents />} />
            <Route path="context" element={<ContextAPI />} />
          </Routes>
        </div>
      </div>
    </Fragment>
  );
};

export default Router;
