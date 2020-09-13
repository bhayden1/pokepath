import React from "react";
import { Button, Paragraph } from "grommet";
import MapSizeForm from "./MapSizeForm";
const renderLastStep = (goHome, reset) => (
  <>
    <Paragraph>Select Blocked Tiles</Paragraph>
    <Button
      primary
      label="Get Bulbasaur Home"
      data-testid="go-home-pokemon-button"
      onClick={goHome}
    />
    <Button
      secondary
      label="Reset Map"
      data-testid="reset-map"
      onClick={reset}
    />
  </>
);

const Steps = (props) => {
  const { step, mapSizeChanged, goHome, reset } = props;
  return (
    <>
      {step === 1 && (
        <MapSizeForm mapSizeChanged={mapSizeChanged} mapSize={0} />
      )}
      {step === 2 && <Paragraph>Select Start Tile</Paragraph>}
      {step === 3 && <Paragraph>Select End Tile</Paragraph>}
      {step === 4 && renderLastStep(goHome, reset)}
    </>
  );
};

export default Steps;
