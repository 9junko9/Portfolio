import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.scss";
import { ToastContainer } from "react-toastify"; // Importer ToastContainer
import "react-toastify/dist/ReactToastify.css"; // Importer les styles de Toastify

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
    <ToastContainer /> {/* Ajouter ToastContainer ici */}
  </React.StrictMode>
);
