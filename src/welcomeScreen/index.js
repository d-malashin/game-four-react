import React from 'react';
import { Link } from 'react-router-dom';
import './welcomeScreen.css'

function WelcomeScreen() {
  return <div className="welcome-screen">
    <h1 className="welcome__header">Welcome</h1>
    <Link className="welcome__button button button--start" to={{
      pathname: '/game',
      state: {
        playerOneName: 'One',
        playerTwoName: 'Two'
      }
    }}>New game</Link>
  </div>
}

export default WelcomeScreen;