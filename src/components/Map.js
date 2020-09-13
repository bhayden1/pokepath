import React from "react";
import { Box, Image } from "grommet";

const renderStartTile = (point) => {
  return point.start ? <Image src="images/bulbasaur.png" /> : "";
};

const renderEndTile = (point) => {
  return point.end ? <Image src="images/finishtile.png" /> : "";
};

const renderBlockedTile = (point) =>
  point.blocked ? <Image src="images/rocktile.png" /> : "";

const renderNormalTile = (point) => {
  const normalTile = !point.start && !point.end && !point.blocked;
  return normalTile ? <Image src="images/grasstile.png" /> : "";
};

const Map = (props) => {
  const { map, mapClicked } = props;
  return map.map((row, index) => {
    return (
      <Box direction="row" key={`map-row-${index}`}>
        {row.map((point, colIndex) => (
          <Box
            border={{ color: "brand", size: "xsmall" }}
            margin="xxsmall"
            key={`map-row-${index}-col-${colIndex}`}
            id={`map-row-${index}-col-${colIndex}`}
            height={{ min: "32px" }}
            width={{ min: "32px" }}
            onClick={() => mapClicked(point, index, colIndex)}
          >
            {renderStartTile(point)}
            {renderEndTile(point)}
            {renderBlockedTile(point)}
            {renderNormalTile(point)}
          </Box>
        ))}
      </Box>
    );
  });
};

export default Map;
