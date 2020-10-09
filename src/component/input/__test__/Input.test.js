import React from "react";
import ReactDom from "react-dom";
import { render } from "@testing-library/react";
import TestRenderer from "react-test-renderer";

import Input from "../Input";

it("Render Button Successfully ", () => {
  const div = document.createElement("div");
  ReactDom.render(<Input />, div);
});

it("Render Button Successfully ", () => {
  const tree = TestRenderer.create(<Input />).toJSON();
  expect(tree).toMatchSnapshot();
});
