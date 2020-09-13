import React from "react";
import { render } from "@testing-library/react";
import Step from "./Step";

test("renders step with no primary action", () => {
  const { getByTestId } = render(<Step stepText="Step 1" />);
  const stepText = getByTestId("step-text");
  const resetButton = getByTestId("reset-map");
  expect(stepText).toBeInTheDocument();
  expect(resetButton).toBeInTheDocument();
});

test("renders step with primary action", () => {
  const { getByTestId } = render(
    <Step stepText="Step 1" primaryAction={() => {}} />
  );
  const stepText = getByTestId("step-text");
  const resetButton = getByTestId("reset-map");
  const primaryButton = getByTestId("primary-step-button");
  expect(stepText).toBeInTheDocument();
  expect(resetButton).toBeInTheDocument();
  expect(primaryButton).toBeInTheDocument();
});
