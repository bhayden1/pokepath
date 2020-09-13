import React from "react";
import { render } from "@testing-library/react";
import App from "./App";

test("renders learn react link", () => {
  const { getByTestId } = render(<App />);
  const header = getByTestId("pageHeader");
  const map = getByTestId("map");
  expect(header).toBeInTheDocument();
  expect(map).toBeInTheDocument();
});
