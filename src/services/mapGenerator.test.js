import mapGenerator from "./mapGenerator";

test("it should generate a map", () => {
  const expected = [
    [
      { x: 0, y: 0, blocked: false, start: false, end: false },
      { x: 0, y: 1, blocked: false, start: false, end: false },
    ],
    [
      { x: 1, y: 0, blocked: false, start: false, end: false },
      { x: 1, y: 1, blocked: false, start: false, end: false },
    ],
  ];

  const actual = mapGenerator(2);
  expect(actual).toStrictEqual(expected);
});
