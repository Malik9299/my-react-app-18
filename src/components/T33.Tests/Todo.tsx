import { FC } from "react";
import { Fragment } from "react/jsx-runtime";
interface Todo {
  id: number;
  title: string;
  active: boolean;
}
interface TodoProps {
  todo: Todo[];
}
const Todo: FC<TodoProps> = ({ todo }) => {
  return (
    <Fragment>
      <h3>
        Todo: <div data-testid="todo">Todo is here</div>
      </h3>
      {todo ? (
        todo.map((item) => (
          <div data-testid="user-data" key={item.id}>
            {item.active ? item.title : <s>{item.title}</s>}
          </div>
        ))
      ) : (
        <div>No data</div>
      )}
    </Fragment>
  );
};
export default Todo;
