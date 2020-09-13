import React from "react";
import MapSizeForm from "./MapSizeForm";
import Step from "./Step";

const Steps = (props) => {
  const { step, mapSizeChanged, goHome, reset } = props;
  return (
    <>
      {step === 1 && (
        <MapSizeForm mapSizeChanged={mapSizeChanged} mapSize={0} />
      )}
      {step === 2 && <Step stepText="Select Start Tile" reset={reset} />}
      {step === 3 && <Step stepText="Select End Tile" reset={reset} />}
      {step === 4 && (
        <Step
          stepText="Select Blocked Tiles"
          primaryAction={goHome}
          primaryActionLabel="Get Bulbasaur Home"
          reset={reset}
        />
      )}
    </>
  );
};

export default Steps;
