import React, { useState } from 'react';
import { Column } from '../column';
import './field.css'

export const Field = (props) => {
  const [turn, setTurn] = useState(1);
  const field = props.field
  return (
    <div className="game-field"
      // onClick={() => {
      //   setTurn(turn === 1 ? 2 : 1)
      // }}
    >
      {field.map((column, index) => (
        <Column data={column}
          key={index}
          turn={turn}
          onClick={() => {
            setTurn(turn === 1 ? 2 : 1)
            console.log(turn)
          }}
        />
      ))}</div>
  )
}