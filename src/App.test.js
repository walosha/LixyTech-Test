import React from "react";
import { render } from "@testing-library/react";
import App from "./app";

describe("HOME TEST", () => {
  test("renders Table with #", () => {
    const { getByText } = render(<App />);
    const linkElement = getByText(/#/i);
    expect(linkElement).toBeInTheDocument();
  });
});
