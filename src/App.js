import React, { useState } from "react";
import {
  Grommet,
  grommet,
  Box,
  Header,
  Grid,
  Button,
  Diagram,
  Stack,
  Layer,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
} from "grommet";
import mapGenerator from "./services/mapGenerator";
import payloadMapper from "./services/payloadMapper";
import connectionMapper from "./services/connectionMapper";
import Steps from "./components/Steps";
import Map from "./components/Map";
import axios from "axios";

function App() {
  const [mapSize, setMapSize] = useState();
  const [map, setMap] = useState(mapGenerator(mapSize));
  const [path, setPath] = useState([]);
  const [step, setStep] = useState(1);
  const [noWayHome, setNoWayHome] = useState(false);

  const mapSizeChanged = (mapSize) => {
    setMapSize(mapSize);
    setMap(mapGenerator(mapSize));
    setStep(step + 1);
  };
  const mapClicked = (point, row, column) => {
    if (step === 2) {
      setStep(step + 1);
      point.start = true;
      map[row][column] = point;
      setMap([...map]);
    }

    if (step === 3) {
      point.end = true;
      map[row][column] = point;
      setStep(step + 1);
      setMap([...map]);
    }

    if (step === 4) {
      point.blocked = !point.blocked;
      map[row][column] = point;
      setMap([...map]);
    }
  };

  const goHome = () => {
    const payload = payloadMapper(map, mapSize);
    axios
      .post("https://frozen-reef-96768.herokuapp.com/find-path", payload)
      .then((resp) => resp.data.moves)
      .then((moves) => {
        setPath(connectionMapper(moves, payload.startingLoc));
      })
      .catch((err) => {
        setPath([]);
        setNoWayHome(true);
        console.log(err);
      });
  };

  const reset = () => {
    setMap([]);
    setStep(1);
    setPath([]);
    setNoWayHome(false);
  };
  return (
    <Grommet theme={grommet}>
      <Grid
        rows={["xxsmall", "100%"]}
        columns={["1/4", "flex"]}
        gap="small"
        fill="true"
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
          <Steps
            step={step}
            mapSizeChanged={mapSizeChanged}
            mapSize={mapSize}
            goHome={goHome}
            reset={reset}
          />
        </Box>
        <Box gridArea="main" background="light-2" height="100%">
          <Stack fill="true" guidingChild={1}>
            <Diagram connections={path} />
            <Map map={map} mapClicked={mapClicked} />
          </Stack>
        </Box>
      </Grid>
      {noWayHome && (
        <Layer
          onEsc={() => setNoWayHome(false)}
          onClickOutside={() => setNoWayHome(false)}
        >
          <Card>
            <CardHeader pad="small" background="light-2">
              Oh No! Bulbasaur can't make it home
            </CardHeader>
            <CardBody pad="small">
              You've blocked the way home for Bulbasaur, change the blocked
              tiles you've selected and try again.
            </CardBody>
            <CardFooter background="light-2" pad="small">
              <Button label="Close" onClick={() => setNoWayHome(false)} />
            </CardFooter>
          </Card>
        </Layer>
      )}
    </Grommet>
  );
}

export default App;
