import React, { useState } from "react";
import { Box, Form, FormField, Button, TextInput } from "grommet";

const MapSizeForm = (props) => {
  const [value, setValue] = useState({ mapSize: props.mapSize });
  const onSubmit = ({ value }) => {
    const { mapSize } = value;
    props.mapSizeChanged(mapSize);
  };

  return (
    <Form
      value={value}
      onSubmit={onSubmit}
      onChange={(nextValue) => setValue(nextValue)}
      onReset={() => {
        setValue({});
        props.mapSizeChanged(0);
      }}
      data-testid="change-map-size-form"
    >
      <FormField name="map-size-label" htmlfor="map-size" label="Map Size">
        <TextInput
          id="map-size"
          name="mapSize"
          type="number"
          min="2"
          data-testid="change-map-size-input"
        />
      </FormField>
      <Box direction="row" gap="medium">
        <Button
          type="submit"
          primary
          label="Set Map Size"
          data-testid="change-map-size-button"
          size="small"
        />
      </Box>
    </Form>
  );
};

export default MapSizeForm;
