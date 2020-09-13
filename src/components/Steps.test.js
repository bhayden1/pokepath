import React from "react";
import { render } from "@testing-library/react";
import Steps from "./Steps";

test("renders step 1", () => {
  const emptyEvent = () => {};
  const { getByTestId } = render(
    <Steps
      step={1}
      mapSizeChanged={emptyEvent}
      goHome={emptyEvent}
      reset={emptyEvent}
    />
  );
  const mapSizeForm = getByTestId("change-map-size-form");
  expect(mapSizeForm).toBeInTheDocument();
});

test("renders step 2", () => {
  const emptyEvent = () => {};
  const { getByTestId } = render(
    <Steps
      step={2}
      mapSizeChanged={emptyEvent}
      goHome={emptyEvent}
      reset={emptyEvent}
    />
  );
  const stepText = getByTestId("step-text");
  const resetButton = getByTestId("reset-map");
  expect(stepText).toBeInTheDocument();
  expect(resetButton).toBeInTheDocument();
});

test("renders step 3", () => {
  const emptyEvent = () => {};
  const { getByTestId } = render(
    <Steps
      step={3}
      mapSizeChanged={emptyEvent}
      goHome={emptyEvent}
      reset={emptyEvent}
    />
  );
  const stepText = getByTestId("step-text");
  const resetButton = getByTestId("reset-map");
  expect(stepText).toBeInTheDocument();
  expect(resetButton).toBeInTheDocument();
});

test("renders step 4", () => {
  const emptyEvent = () => {};
  const { getByTestId } = render(
    <Steps
      step={4}
      mapSizeChanged={emptyEvent}
      goHome={emptyEvent}
      reset={emptyEvent}
    />
  );
  const stepText = getByTestId("step-text");
  const resetButton = getByTestId("reset-map");
  const primaryButton = getByTestId("primary-step-button");
  expect(stepText).toBeInTheDocument();
  expect(resetButton).toBeInTheDocument();
  expect(primaryButton).toBeInTheDocument();
});
