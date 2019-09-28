import React from 'react';
import './cell.css';

export const Cell = (props) => {
  let value = props.value;
  return (
    <span className={"game-field__cell " + (value === 1 ? 'player-one' : (value === 2 ? 'player-two' : ''))}
    onClick={() => {
      props.onClick();
      value = props.turn}}></span>
  )
}