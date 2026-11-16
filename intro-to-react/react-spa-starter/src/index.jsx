// import App from "./App.js";
// const root = document.getElementById("root");
// root.appendChild(<h1> Hello, World</h1>);

import React from "react";
import { createRoot } from "react-dom/client";
import App from './App.jsx';

const root =  createRoot(document.getElementById("root"))
root.render(
<>
<App />
</>

) // React component
