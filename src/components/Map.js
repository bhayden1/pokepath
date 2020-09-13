import React from "react";
import { Box } from "grommet";

const getBackground = (tile) => {
  if (tile.start) return "images/bulbasaur.png";
  if (tile.end) return "images/finishtile.png";
  if (tile.blocked) return "images/rocktile.png";

  return "images/grasstile.png";
};

const Map = (props) => {
  const { map, mapClicked } = props;
  return map.map((row, index) => {
    return (
      <Box
        direction="row"
        key={`map-row-${index}`}
        data-testid={`map-row-${index}`}
      >
        {row.map((tile, colIndex) => (
          <Box
            border={{ color: "brand", size: "xsmall" }}
            margin="xxsmall"
            key={`map-row-${index}-col-${colIndex}`}
            id={`map-row-${index}-col-${colIndex}`}
            data-testid={`map-row-${index}-col-${colIndex}`}
            height={{ min: "32px" }}
            width={{ min: "32px" }}
            background={`url(${getBackground(tile)})`}
            onClick={() => mapClicked(tile, index, colIndex)}
          />
        ))}
      </Box>
    );
  });
};

export default Map;
