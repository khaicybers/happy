import "regenerator-runtime/runtime";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.scss";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
    <ToastContainer />
    <div style={{ textAlign: "center", marginTop: "20px" }}>
      <a
        href="https://github.com/khaicybers"
        style={{
          fontFamily: "Montserrat",
          fontWeight: "bold",
          fontSize: "1.5rem",
          color: "#fff",
          textDecoration: "none",
          cursor: "pointer",
        }}
        target="_blank"
        rel="noopener noreferrer"
      >
        Follow me github khaicybers 
      </a>
    </div>
  </React.StrictMode>
  
  
  
);
