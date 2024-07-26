import { render, screen } from "@testing-library/react";
import Counter from "./Counter";

describe(Counter, () => {
  it("count display is correct initial state", () => {
    const { getByTestId } = render(<Counter initialState={0} />);
    const countElement = Number(screen.getByTestId("count").textContent);
    expect(countElement).toEqual(0);
  });
});
