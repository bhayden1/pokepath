import React from "react";
import { Button, Paragraph, Box } from "grommet";

const Step = (props) => {
  const { primaryAction, primaryActionLabel, reset, stepText } = props;
  return (
    <Box>
      <Box>
        <Paragraph data-testid="step-text">{stepText}</Paragraph>
      </Box>
      <Box directon="row">
        <Box direction="column">
          {primaryAction && (
            <Button
              primary
              label={primaryActionLabel}
              data-testid="primary-step-button"
              onClick={primaryAction}
              margin="xsmall"
            />
          )}
          <Button
            secondary
            label="Reset Map"
            data-testid="reset-map"
            onClick={reset}
            margin="xsmall"
          />
        </Box>
      </Box>
    </Box>
  );
};
export default Step;
