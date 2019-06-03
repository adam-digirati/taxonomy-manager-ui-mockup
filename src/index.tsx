import * as React from "react";
import { render } from "react-dom";
import ProjectsScreen from "./containers/ProjectsScreen";
import ProjectScreen from "./containers/ProjectScreen";
import "./styles.css";
function App() {
  return <ProjectScreen />;
}

const rootElement = document.getElementById("root");
render(<App />, rootElement);
