import React, { useState } from 'react';
import { Column } from '../column';
import './field.css'

export const Field = (props) => {
  const [turn, setTurn] = useState(1);
  const field = props.field
  return (
    <div className="game-field"
      onClick={() => { 
        setTurn(turn === 1 ? 2 : 1); console.log(`turn`, turn);
      }}
    >
      {field.map((column, index) => (
        <Column data={column}
          key={index}
          turn={turn} />
      ))}</div>
  )
}




    // for (let i = 0; i < 7; i++) {
    //     result.splice(i, 0, <Column data={props.field[i]} key={i} />)
    //     console.log(props.field[i]);
    // };
    // return <div className="app__wrapper">
    //     <div className="game-field" >{result}</div>
    // </div>;