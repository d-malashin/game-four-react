import React from 'react';
import Game from './game/game';
import { HashRouter, Route } from 'react-router-dom';
import './App.css';
import WelcomeScreen from './wolcomeScreen';

function App() {
  return ( 
  <HashRouter>
    <Route path="/" component={WelcomeScreen} exact/>
    <Route path="/game" component={Game} exact/>
  </HashRouter>
  )
}

export default App;