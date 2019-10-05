import React from 'react';
import { Cell } from '../cell';
import './column.css';

export const Column = (props) => {
function onPress(event) {
  props.onPress(props.columnID);
}

  let column = props.data;
  return (
    <div className="game-field__column"
    onClick={onPress}>
      {column.map((cell, index) => (
        <Cell value={cell}
          key={index}
          cellID={index}
        />
      ))}
    </div>
  )
}