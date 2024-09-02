import { NavLink } from "react-router-dom";

import { Fragment } from "react/jsx-runtime";

const NaveBar = () => {
  const nav = [
    { title: "Home", link: "/" },
    { title: "About", link: "/about" },
    { title: "Live-interview", link: "/live-interview" },
  ];

  return (
    <Fragment>
      <div>
        <nav className="nav">
          {nav.map((item) => (
            <NavLink className="eachNave" to={item.link}>
              {item.title}
            </NavLink>
          ))}
        </nav>
      </div>
    </Fragment>
  );
};

export default NaveBar;
