import { Fragment } from "react/jsx-runtime";
import Hoisting from "./Hoisting";
import { NavLink, Outlet } from "react-router-dom";

const JsQuestion = () => {
  return (
    <Fragment>
      <h2>All about JS Questions</h2>
      <nav className="nav">
        <NavLink className="eachNave" to="hoisting">
          Hoisting
        </NavLink>
        <NavLink className="eachNave" to="lexical-scope">
          Lexical scope
        </NavLink>
        <NavLink className="eachNave" to="closure">
          Closure
        </NavLink>
        <NavLink className="eachNave" to="use-of-this">
          Use of This
        </NavLink>
      </nav>
      <Outlet />
      {/* <Hoisting /> */}
    </Fragment>
  );
};
export default JsQuestion;
