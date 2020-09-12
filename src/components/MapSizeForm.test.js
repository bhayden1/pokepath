import React from "react";
import { render } from "@testing-library/react";
import MapSizeForm from "./MapSizeForm";

test("renders map size change form", () => {
  const { getByTestId } = render(<MapSizeForm />);
  const form = getByTestId("change-map-size-form");
  expect(form).toBeInTheDocument();
});

test("renders map size change input", () => {
  const { getByTestId } = render(<MapSizeForm />);
  const input = getByTestId("change-map-size-input");
  expect(input).toBeInTheDocument();
});

test("renders map size change button", () => {
  const { getByTestId } = render(<MapSizeForm />);
  const button = getByTestId("change-map-size-button");
  expect(button).toBeInTheDocument();
});
