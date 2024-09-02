import { NavLink, Outlet } from "react-router-dom";
import APIIntegration from "../components/liveInterviewSolutions/APIIntegration/APIIntegration";

const { Fragment } = require("react");

const LiveInterview = () => {
  return (
    <Fragment>
      <div>LiveInterview</div>
      {/* <APIIntegration /> */}
      <nav className="nav">
        <NavLink className="eachNave" to="api-integration">
          API Integration
        </NavLink>
        <NavLink className="eachNave" to="make-dropdown">
          Drop down
        </NavLink>
      </nav>
      <Outlet />
    </Fragment>
  );
};

export default LiveInterview;
