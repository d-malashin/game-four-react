import React from 'react';
import './cell.css';

export const Cell = (props) => {
  return (
    <span className={"game-field__cell " + (props.value === 1 ? 'player-one' : (props.value === 2 ? 'player-two' : ''))}></span>
  )
}