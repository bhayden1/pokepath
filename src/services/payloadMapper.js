const tileReducer = (accumulator, tile) => {
  if (tile.start) {
    accumulator.startingLoc = {
      x: tile.x,
      y: tile.y,
    };
  }

  if (tile.end) {
    accumulator.endingLoc = {
      x: tile.x,
      y: tile.y,
    };
  }

  if (tile.blocked) {
    accumulator.impassables.push({
      x: tile.x,
      y: tile.y,
    });
  }
  return accumulator;
};

export default (input, size) => {
  return input.reduce(
    (accumulator, row) => {
      return row.reduce(tileReducer, accumulator);
    },
    { sideLength: size, impassables: [] }
  );
};
