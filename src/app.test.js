import React from "react";
import ReactDom from "react-dom";
import { render } from "@testing-library/react";
import TestRenderer from "react-test-renderer";

import App from "./app";

it("Render Button Successfully ", () => {
  const div = document.createElement("div");
  ReactDom.render(<App />, div);
});

it("Render Button Successfully ", () => {
  const tree = TestRenderer.create(<App />).toJSON();
  expect(tree).toMatchSnapshot();
});

describe("HOME TEST", () => {
  test("renders Table with #", () => {
    const { getByText } = render(<App />);
    const linkElement = getByText(/#/i);
    expect(linkElement).toBeInTheDocument();
  });
});
