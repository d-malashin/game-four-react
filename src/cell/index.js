import React from 'react';
import './cell.css';

export const Cell = (props) => {
  const cell = props.value;
  return (
    <span className={"game-field__cell " + (cell === 1 ? 'player-one' : (cell === 2 ? 'player-two' : ''))}>{cell}</span>
  )
  // (
  //         <span>{props.value}</span>
  //     )
  //     if (props.value === 1) {
  //         return <span style={playerOneStyle} className="game-field__cell">{props.value}</span>
  //     } else if (props.value === 2){
  //         return <span style={playerTwoStyle} className="game-field__cell">{props.value}</span>
  //     } else return <span className="game-field__cell">{props.value}</span>
}