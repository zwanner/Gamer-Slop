import React from "react";
import './index.css';
import App from './App';
import { registerSW } from "./serviceWorker";
import { createRoot } from "react-dom/client";

createRoot.render(<App />, document.getElementById('root'));

registerSW();