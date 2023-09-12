import * as React from "react";
import * as ReactDOM from "react-dom/client";
import  KBVE from "./KBVE";
import GlobalStyles from "./GlobalStyles";

const widgetRoot = ReactDOM.createRoot(
  document.getElementById("widget_yorha_ui")
);

widgetRoot.render(
  <React.Fragment>
    <GlobalStyles />
    <KBVE />
  </React.Fragment>
);
