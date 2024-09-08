import { Fragment } from "react/jsx-runtime";
import Counter from "./Counter";
import Todo from "./Todo";
const Tests = () => {
  const todo = [
    { id: 1, title: "User 1", active: true },
    { id: 2, title: "User 2", active: false },
    { id: 3, title: "User 3", active: true },
  ];
  return (
    <Fragment>
      <div>Tests</div>
      <Counter initialCount={5} />
      <Todo todo={todo} />
    </Fragment>
  );
};
export default Tests;
