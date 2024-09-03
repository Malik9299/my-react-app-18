import React, { FC } from "react";
import { Fragment } from "react/jsx-runtime";

interface DialogProps {
  title: string;
  children: React.ReactNode;
}

// General-purpose Dialog component using composition
const Dialog: FC<DialogProps> = ({ title, children }) => {
  return (
    <div className="dialog">
      <h4>{title}</h4>
      <div className="dialog-content">{children}</div>
    </div>
  );
};

// Specialized components using composition
const WelcomeDialog: FC = () => {
  return (
    <Dialog title="Welcome">
      <p>Hello, thank you for visiting our website!</p>
    </Dialog>
  );
};

const ErrorDialog: FC = () => {
  return (
    <Dialog title="Error">
      <p>Something went wrong. Please try again later.</p>
    </Dialog>
  );
};

const ReactComposition = () => {
  return (
    <Fragment>
      <h3>Using Composition</h3>
      <p>
        Composition is the practice of building complex components from simpler
        ones by combining them together. It allows you to pass components as
        props or children, making it easy to create reusable and flexible code.
      </p>
      <WelcomeDialog />
      <ErrorDialog />
    </Fragment>
  );
};

export default ReactComposition;
