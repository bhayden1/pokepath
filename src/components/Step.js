import React from "react";
import { Button, Paragraph, Form } from "grommet";

const Step = (props) => {
  const { primaryAction, primaryActionLabel, reset, stepText } = props;
  return (
    <Form>
      <Paragraph data-testid="step-text">{stepText}</Paragraph>
      {primaryAction && (
        <Button
          primary
          label={primaryActionLabel}
          data-testid="primary-step-button"
          onClick={primaryAction}
          margin="xsmall"
          size="small"
        />
      )}

      <Button
        secondary
        label="Reset Map"
        data-testid="reset-map"
        onClick={reset}
        margin="xsmall"
        size="small"
      />
    </Form>
  );
};
export default Step;
