import React, { useState } from "react";
import {
  Grommet,
  grommet,
  Box,
  Header,
  Grid,
  Form,
  FormField,
  Button,
  TextInput,
} from "grommet";
import mapGenerator from "./services/mapGenerator";
import MapSizeForm from "./components/MapSizeForm";

const Map = (props) => {
  const { map } = props;
  return map.map((row, index) => {
    return (
      <Box direction="row" key={`map-row-${index}`}>
        {row.map((column, colIndex) => (
          <Box
            border={{ color: "brand", size: "xsmall" }}
            margin="xxsmall"
            key={`map-row-${index}-col-${colIndex}`}
            background="url(/images/grasstile.png)"
            height={{ min: "32px" }}
            width={{ min: "32px" }}
          ></Box>
        ))}
      </Box>
    );
  });
};

function App() {
  const [map, setMap] = useState(mapGenerator(4));
  const mapSizeChanged = (mapSize) => setMap(mapGenerator(mapSize));

  return (
    <Grommet theme={grommet}>
      <Grid
        rows={["xxsmall", "flex"]}
        columns={["1/4", "flex"]}
        gap="small"
        areas={[
          { name: "header", start: [0, 0], end: [1, 0] },
          { name: "nav", start: [0, 1], end: [0, 1] },
          { name: "main", start: [1, 1], end: [1, 1] },
        ]}
      >
        <Header background="brand" gridArea="header">
          PokePath
        </Header>
        <Box gridArea="nav" background="light-5">
          <MapSizeForm mapSizeChanged={mapSizeChanged} mapSize={4} />
        </Box>
        <Box gridArea="main" background="light-2">
          <Map map={map}></Map>
        </Box>
      </Grid>
    </Grommet>
  );
}

export default App;
