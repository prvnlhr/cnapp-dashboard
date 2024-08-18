import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App";
import { AppStateProvider } from "./context/AppContext";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <AppStateProvider>
      <App />
    </AppStateProvider>
  </React.StrictMode>
);
