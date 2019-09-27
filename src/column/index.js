import React from 'react';
import { Cell } from '../cell';
import './column.css';

export const Column = (props) => {
  let column = props.data;
  const positionFinder = (number) => {
    let i = 0;
    const findPlace = (counter) => {
      if (counter < number.length && number[counter] === null) {
        return counter;
      } return findPlace(counter + 1);
    }
    return findPlace(i);
  };
  return (
    <div className="game-field__column"
    onClick={() => { column.splice(positionFinder(column), 1, props.turn) }}>
      {column.map((cell, index) => (
        <Cell value={cell}
          key={index}
        />
      ))}
    </div>
  )
}
    // let result = [];
    // for (let i = 0; i < 6; i++) {
    //     result.splice(i, 0, <Cell value={props.data[i]} key={i} />)
    // };
    // return <div className="game-field__column"  onClick={playerTurn}>
    //     {result}
    // </div>;

    // return <div className="game-field__column">
    //     <Cell value={props.data[0]} />
    //     <Cell value={props.data[1]} />
    //     <Cell value={props.data[2]} />
    //     <Cell value={props.data[3]} />
    //     <Cell value={props.data[4]} />
    //     <Cell value={props.data[5]} />
        // </div>