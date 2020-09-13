import React from "react";
import { render } from "@testing-library/react";
import Map from "./Map";
import mapGenerator from "../services/mapGenerator";

test("renders map", () => {
  const emptyEvent = () => {};
  const map = mapGenerator(2);
  const { getByTestId } = render(<Map map={map} mapClicked={emptyEvent} />);
  const firstRow = getByTestId("map-row-0");
  const lastColumn = getByTestId("map-row-1-col-1");
  expect(firstRow).toBeInTheDocument();
  expect(lastColumn).toBeInTheDocument();
});
