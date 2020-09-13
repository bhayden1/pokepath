const pathingMap = {
  D: (currentPosition) => ({
    connection: {
      fromTarget: `map-row-${currentPosition.y}-col-${currentPosition.x}`,
      toTarget: `map-row-${currentPosition.y + 1}-col-${currentPosition.x}`,
      thickness: "xsmall",
      color: "accent-2",
    },
    currentPosition: { x: currentPosition.x, y: currentPosition.y + 1 },
  }),
  R: (currentPosition) => ({
    connection: {
      fromTarget: `map-row-${currentPosition.y}-col-${currentPosition.x}`,
      toTarget: `map-row-${currentPosition.y}-col-${currentPosition.x + 1}`,
      thickness: "xsmall",
      color: "accent-2",
    },
    currentPosition: { x: currentPosition.x + 1, y: currentPosition.y },
  }),
  L: (currentPosition) => ({
    connection: {
      fromTarget: `map-row-${currentPosition.y}-col-${currentPosition.x}`,
      toTarget: `map-row-${currentPosition.y}-col-${currentPosition.x - 1}`,
      thickness: "xsmall",
      color: "accent-2",
    },
    currentPosition: { x: currentPosition.x - 1, y: currentPosition.y },
  }),
  U: (currentPosition) => ({
    connection: {
      fromTarget: `map-row-${currentPosition.y}-col-${currentPosition.x}`,
      toTarget: `map-row-${currentPosition.y - 1}-col-${currentPosition.x}`,
      thickness: "xsmall",
      color: "accent-2",
    },
    currentPosition: { x: currentPosition.x, y: currentPosition.y - 1 },
  }),
};

export default (moves, start) => {
  let currentPosition = start;
  return moves.map((move) => {
    const path = pathingMap[move](currentPosition);
    currentPosition = path.currentPosition;
    return path.connection;
  });
};
