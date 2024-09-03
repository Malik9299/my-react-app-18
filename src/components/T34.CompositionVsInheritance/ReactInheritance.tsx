import React, { Fragment } from "react";

interface DialogProps {
  title: string;
}

class Dialog extends React.Component<DialogProps> {
  render() {
    return (
      <Fragment>
        <div className="dialog">
          <h4>{this.props.title}</h4>
          <div className="dialog-content">{this.renderContent()}</div>
        </div>
      </Fragment>
    );
  }
  protected renderContent(): React.ReactNode {
    return null;
  }
}

class WelcomeDialog extends Dialog {
  protected renderContent(): React.ReactNode {
    return (
      <Fragment>
        <p>Hello, thank you for visiting our website!</p>
      </Fragment>
    );
  }
}
class ErrorDialog extends Dialog {
  protected renderContent(): React.ReactNode {
    return (
      <Fragment>
        <p>Something went wrong. Please try again later.</p>
      </Fragment>
    );
  }
}

class ReactInheritance extends React.Component {
  render() {
    return (
      <Fragment>
        <h3>Using Inheritance</h3>
        <p>
          Inheritance is less commonly used in React, as it's not as well-suited
          to React's component model. Inheritance involves creating a new
          component class based on an existing one, sharing some of its
          functionality.
        </p>
        <WelcomeDialog title="Welcome" />
        <ErrorDialog title="Error" />
      </Fragment>
    );
  }
}
export default ReactInheritance;
