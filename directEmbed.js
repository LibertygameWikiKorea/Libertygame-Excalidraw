import * as ExcalidrawLib from 'https://esm.sh/@excalidraw/excalidraw@0.18.0/dist/dev/index.js?external=react,react-dom';
import React from "https://esm.sh/react@19.0.1";
import ReactDOM from "https://esm.sh/react-dom@19.0.1"

window.ExcalidrawLib = ExcalidrawLib;
console.log("Excalidraw library", ExcalidrawLib);

const App = () => {
  return React.createElement(
    window.React.Fragment,
    null,
    React.createElement(
      "div",
      {
        style: { height: "500px" },
      },
      React.createElement(ExcalidrawLib.Excalidraw),
    ),
  );
};

const excalidrawWrapper = document.getElementById("app");
const root = ReactDOM.createRoot(excalidrawWrapper);
root.render(React.createElement(App));