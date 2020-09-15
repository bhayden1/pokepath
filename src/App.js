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
import connectionMapper from "./services/connectionMapper";
import api from "./services/api";
import Steps from "./components/Steps";
import Map from "./components/Map";

function App() {
  const [mapSize, setMapSize] = useState();
  const [map, setMap] = useState(mapGenerator(mapSize));
  const [path, setPath] = useState([]);
  const [step, setStep] = useState(1);
  const [noWayHome, setNoWayHome] = useState(false);
  const [start, setStart] = useState();
  const [end, setEnd] = useState();
  const [impassables, setImpassables] = useState([]);

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
      setMap([].concat(map));
      setStart({ x: point.x, y: point.y });
    }

    if (step === 3) {
      point.end = true;
      map[row][column] = point;
      setStep(step + 1);
      setMap([].concat(map));
      setEnd({ x: point.x, y: point.y });
    }

    if (step === 4) {
      point.blocked = !point.blocked;
      map[row][column] = point;
      setMap([].concat(map));
      if (point.blocked) {
        impassables.push(point);
        setImpassables([].concat(impassables));
      } else {
        setImpassables(
          impassables.filter(
            (impassablePoint) =>
              impassablePoint.x !== point.x && impassablePoint.y !== point.y
          )
        );
      }
    }
  };

  const goHome = async () => {
    try {
      const moves = await api.getPathing(start, end, impassables, mapSize);
      setPath(connectionMapper(moves, start));
    } catch {
      setPath([]);
      setNoWayHome(true);
    }
  };

  const reset = () => {
    setMap([]);
    setStep(1);
    setPath([]);
    setMapSize();
    setNoWayHome(false);
  };

  return (
    <Grommet theme={grommet}>
      <Grid
        rows={["xxsmall", "100%"]}
        columns={["15%", "auto"]}
        gap="small"
        areas={[
          { name: "header", start: [0, 0], end: [1, 0] },
          { name: "nav", start: [0, 1], end: [0, 1] },
          { name: "main", start: [1, 1], end: [1, 1] },
        ]}
      >
        <Header background="brand" gridArea="header" data-testid="pageHeader">
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
          <Stack guidingChild={path.length > 0 ? 1 : 0} data-testid="map">
            {path.length > 0 && <Diagram connections={path} />}
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
