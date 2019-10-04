import React from 'react';
import { Link, Redirect } from 'react-router-dom';

function WelcomeScreen() {
  return <div>
    <h1>Welcome</h1>
    <Link to={{
      pathname: '/game',
      state: {
        playerOneName: 'One',
        playerTwoName: 'Two'
      }
    }}>New game</Link>
  </div>
}

export default WelcomeScreen;