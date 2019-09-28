import React from 'react';
import { Cell } from '../cell';
import './column.css';

export const Column = (props) => {
  let column = props.data;
  return (
    <div className="game-field__column">
      {column.map((cell, index) => (
        <Cell value={cell}
          key={index}
          turn={props.turn}
          onClick={() => {props.onClick()}}
        />
      ))}
    </div>
  )
}