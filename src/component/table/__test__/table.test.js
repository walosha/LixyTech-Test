import React from "react";
import ReactDom from "react-dom";
import { render } from "@testing-library/react";
import TestRenderer from "react-test-renderer";

import Table from "../table";

it("Render Table Successfully ", () => {
  const div = document.createElement("div");
  ReactDom.render(<Table />, div);
});

it("Render Table Successfully ", () => {
  const tree = TestRenderer.create(<Table />).toJSON();
  expect(tree).toMatchSnapshot();
});
