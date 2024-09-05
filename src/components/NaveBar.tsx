import { NavLink } from "react-router-dom";

import { Fragment } from "react/jsx-runtime";

const NaveBar = () => {
  const nav = [
    // { title: "Home", link: "/" },
    // { title: "About", link: "/about" },
    { title: "Live-interview", link: "/live-interview" },
    { title: "JS-Questions", link: "/js-questions" },
    {
      title: "Composition Vs Inheritance",
      link: "/composition-vs-inheritance",
    },
  ];

  return (
    <Fragment>
      <div>
        <nav className="top-menu">
          {nav.map((item) => (
            <NavLink className="top-eachNave" to={item.link}>
              {item.title}
            </NavLink>
          ))}
        </nav>
      </div>
    </Fragment>
  );
};

export default NaveBar;
