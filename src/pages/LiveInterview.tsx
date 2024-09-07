import { NavLink, Outlet } from "react-router-dom";

const { Fragment } = require("react");

const LiveInterview = () => {
  return (
    <Fragment>
      <div>LiveInterview</div>
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
