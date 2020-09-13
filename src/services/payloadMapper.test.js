import payloadMapper from "./payloadMapper";

const testMap = [
  [
    { x: 0, y: 0, blocked: false, end: false, start: true },
    { x: 0, y: 1, blocked: true, end: false, start: false },
  ],
  [
    { x: 1, y: 0, blocked: false, end: false, start: false },
    { x: 1, y: 1, blocked: false, end: true, start: false },
  ],
];

test("should create payload from map", () => {
  const expected = {
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
  const actual = payloadMapper(testMap, 2);
  expect(actual).toStrictEqual(expected);
});
