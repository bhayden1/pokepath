import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { ApplicationInsights } from "@microsoft/applicationinsights-web";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

const appInsights = new ApplicationInsights({
  config: {
    instrumentationKey: "371c1fbc-6357-42a4-85f5-629a26f438b0",
  },
});
appInsights.loadAppInsights();
appInsights.trackPageView();
