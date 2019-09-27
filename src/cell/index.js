import React from 'react';
import './cell.css';

export const Cell = (props) => {
  const cell = props.value;
  return (
    <span className={"game-field__cell " + (props.turn === 1 ? 'player-one' : (props.turn === 2 ? 'player-two' : ''))}>{cell}</span>
  )
}