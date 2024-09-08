import { render, fireEvent } from "@testing-library/react";
import Counter from "./Counter";

describe(Counter, () => {
  it("Counter displayes initial Value Correct", () => {
    const { getByTestId } = render(<Counter initialCount={3} />);
    const countValue = Number(getByTestId("count").textContent);
    expect(countValue).toEqual(3);
  });

  it("Counter increment by 1 after click increment", () => {
    const { getByTestId, getByRole } = render(<Counter initialCount={3} />);
    const incrementButton = getByRole("button", { name: "Increment" });
    fireEvent.click(incrementButton);
    const countValue = Number(getByTestId("count").textContent);
    expect(countValue).toEqual(4);
  });

  it("Counter decrement by 1 after click decrement", () => {
    const { getByTestId, getByRole } = render(<Counter initialCount={3} />);
    const decrementButton = getByRole("button", { name: "Decrement" });
    fireEvent.click(decrementButton);
    const countValue = Number(getByTestId("count").textContent);
    expect(countValue).toEqual(2);
  });

  it("Counter reset to 3 after click reset", () => {
    const { getByTestId, getByRole } = render(<Counter initialCount={3} />);
    const resetButton = getByRole("button", { name: "Reset" });
    fireEvent.click(resetButton);
    const countValue = Number(getByTestId("count").textContent);
    expect(countValue).toEqual(3);
  });
});
