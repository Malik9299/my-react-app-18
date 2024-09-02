import { Component, Fragment } from "react";
interface ClassProps {
  name: string;
  id?: number;
}
interface ClassState {
  count: number;
}
class ClassComponent extends Component<ClassProps, ClassState> {
  constructor(props: ClassProps) {
    super(props);
    this.state = {
      count: 0,
    };
    // this.incrementCount = this.incrementCount.bind(this);
  }
  //  Note: Need to bind this method in constructor when method is a normal function but if we use the arrorw method then there is no need to bind
  //   incrementCount() {
  //     this.setState((prev) => ({
  //       count: prev.count + 1,
  //     }));
  //   }
  incrementCount = () => {
    this.setState((prev) => ({
      count: prev.count + 1,
    }));
  };
  render() {
    return (
      <Fragment>
        <div>Class Component</div>
        <div>Name: {this.props.name}</div>
        <button onClick={this.incrementCount}>Count: {this.state.count}</button>
      </Fragment>
    );
  }
}
export default ClassComponent;
