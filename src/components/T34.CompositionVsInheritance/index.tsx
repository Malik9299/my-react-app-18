import { useState } from "react";
import { Fragment } from "react/jsx-runtime";
import ReactComposition from "./ReactComposition";
import ReactInheritance from "./ReactInheritance";

const CompositionVsInheritance = () => {
  return (
    <Fragment>
      <h2>Composition Vs Inheritance</h2>
      <p>
        In React, composition and inheritance are two ways to reuse code between
        components. React recommends favoring composition over inheritance, as
        it's a more natural fit for React's component model.
      </p>
      <ReactComposition />
      <ReactInheritance />
    </Fragment>
  );
};

export default CompositionVsInheritance;
