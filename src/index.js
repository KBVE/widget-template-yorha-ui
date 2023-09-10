import React from "react";
import ReactDOM from "react-dom/client";
import KBVE from "./KBVE";
import GlobalStyles from './styles/GlobalStyles'
import { StyledApp } from './styles/StyledApp';



const widgetRoots = document.querySelectorAll(".widget_yorha_ui");


widgetRoots.forEach((Div) => {
    ReactDOM.createRoot(Div).render(
      <React.StrictMode>
        <GlobalStyles />
        <StyledApp>
        <KBVE ve={Div} key={Div} />
        </StyledApp>
      </React.StrictMode>
    );
  });