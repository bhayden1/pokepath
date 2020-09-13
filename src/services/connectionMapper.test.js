import connectionGenerator from "./connectionMapper";

const payload = {
  sideLength: 2,
  impassables: [
    {
      x: 0,
      y: 1,
    },
  ],
  startingLoc: {
    x: 0,
    y: 0,
  },
  endingLoc: {
    x: 1,
    y: 1,
  },
};

const moves = ["D", "R"];
test("should return connections for diagram", () => {
  const expected = [
    {
      fromTarget: "map-row-0-col-0",
      toTarget: "map-row-1-col-0",
      thickness: "xsmall",
      color: "accent-2",
    },
    {
      fromTarget: "map-row-1-col-0",
      toTarget: "map-row-1-col-1",
      thickness: "xsmall",
      color: "accent-2",
    },
  ];
  const actual = connectionGenerator(moves, payload.startingLoc);
  expect(actual).toStrictEqual(expected);
});
