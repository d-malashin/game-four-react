import React from "react";
import Game from "./game/game";
import { HashRouter, Route } from "react-router-dom";
import "./App.css";
import WelcomeScreen from "./welcomeScreen";

function App() {
  return (
    <div className="wrapper">
      <HashRouter>
        <Route path="/" component={WelcomeScreen} exact />
        <Route path="/game" component={Game} exact />
      </HashRouter>
    </div>
  );
}

export default App;
