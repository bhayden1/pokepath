const pathingMap = {
  D: (currentPosition) => ({
    fromTarget: `map-row-${currentPosition.y}-col-${currentPosition.x}`,
    toTarget: `map-row-${currentPosition.y + 1}-col-${currentPosition.x}`,
    thickness: "xsmall",
    color: "accent-2",
    currentPosition: { x: currentPosition.x, y: currentPosition.y + 1 },
  }),
  R: (currentPosition) => ({
    fromTarget: `map-row-${currentPosition.y}-col-${currentPosition.x}`,
    toTarget: `map-row-${currentPosition.y}-col-${currentPosition.x + 1}`,
    thickness: "xsmall",
    color: "accent-2",
    currentPosition: { x: currentPosition.x + 1, y: currentPosition.y },
  }),
  L: (currentPosition) => ({
    fromTarget: `map-row-${currentPosition.y}-col-${currentPosition.x}`,
    toTarget: `map-row-${currentPosition.y}-col-${currentPosition.x - 1}`,
    thickness: "xsmall",
    color: "accent-2",
    currentPosition: { x: currentPosition.x - 1, y: currentPosition.y },
  }),
  U: (currentPosition) => ({
    fromTarget: `map-row-${currentPosition.y}-col-${currentPosition.x}`,
    toTarget: `map-row-${currentPosition.y - 1}-col-${currentPosition.x}`,
    thickness: "xsmall",
    color: "accent-2",
    currentPosition: { x: currentPosition.x, y: currentPosition.y - 1 },
  }),
};

export default (moves, start) => {
  let currentPosition = start;
  return moves.map((move) => {
    const connection = pathingMap[move](currentPosition);
    currentPosition = connection.currentPosition;
    return connection;
  });
};
