import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter } from "react-router-dom";

import React from "react";
import { BrowserRouter } from "react-router-dom";

const Main = () => {
  return (
    <>
      <App />
    </>
  );
};

const end = ReactDOM.createRoot(document.getElementById("root"));
end.render(
  <BrowserRouter>
    <Main />
  </BrowserRouter>
);
