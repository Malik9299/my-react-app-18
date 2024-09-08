// test("test", () => {
//     expect(true).toBe(true);
//   });
import { render, screen, cleanup, getByTestId } from "@testing-library/react";

import Todo from "./Todo";

// test("should render todo component", () => {
//   render(<Todo />);
//   const todoElement = screen.getByTestId("todo-1");
//   expect(todoElement).toBeInTheDocument();
// });

afterEach(() => {
  cleanup();
});

test("should render todo component", () => {
  render(<Todo />);
  const todoElement = screen.getByTestId("todo");
  expect(todoElement).toBeInTheDocument();
  expect(todoElement).toHaveTextContent("Todo");
});

test("should render todo component", () => {
  const todoItem = [{ id: 1, title: "User 1", active: true }];
  render(<Todo todo={todoItem} />);
  const todoElement = screen.getByTestId("user-data");
  expect(todoElement).toBeInTheDocument();
  expect(todoElement).toHaveTextContent("User 1");
});

test("should render todo component", () => {
  const todoItem = [{ id: 2, title: "User 2", active: false }];
  render(<Todo todo={todoItem} />);
  const todoElement = screen.getByTestId("user-data");
  expect(todoElement).toHaveTextContent("User 2");
  const strikeElement = todoElement.querySelector("s");
  expect(strikeElement).toBeInTheDocument();
});
