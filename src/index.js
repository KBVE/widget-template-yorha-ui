import * as React from "react";
import * as ReactDOM from "react-dom/client";
import  KBVE from "./KBVE";
import GlobalStyles from "./GlobalStyles";
import { HelmetProvider } from 'react-helmet-async';

const widgetRoot = ReactDOM.createRoot(
  document.getElementById("widget_yorha_ui")
);

widgetRoot.render(
    <HelmetProvider>
    <GlobalStyles />
    <KBVE />
    </HelmetProvider>
);
