export default (size) => {
  const map = [];
  for (let y = 0; y < size; y++) {
    const row = [];
    for (let x = 0; x < size; x++) {
      const point = {
        x: x,
        y: y,
        blocked: false,
        end: false,
        start: false,
      };
      row.push(point);
    }
    map.push(row);
  }
  return map;
};
