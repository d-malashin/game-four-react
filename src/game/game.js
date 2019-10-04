import React, { useState } from 'react';
import { Field } from '../field';
import { Link, Redirect } from 'react-router-dom';

export default function Game(props) {
  const winnerCheck = (columnID) => {
    // if column has 4 cells in a row -> winner = cell value 
    // if field[n][i] === field[n+1][i] 4 times -> winner = cell value
    // if field[n][i] === field[n+1][i+1] or field[n][i] === field[n+1][i-1] -> winner = cell value

    for (let i = 0; i < field[columnID].length; i++) {
      if (field[columnID][i] !== null &&
          field[columnID][i] === field[columnID][i+1] &&
          field[columnID][i] === field[columnID][i+2] &&
          field[columnID][i] === field[columnID][i+3]) {
            alert(`Player ${player} wins!`)
            return player
          } console.log('still no winner')
    }
  }

  const gameColumn = new Array(6).fill(null);
  const gameField = []
  for (let w = 0; w < 7; w++) {
    gameField.push([...gameColumn])
  }
  const [field, setField] = useState(gameField)
  const [player, setPlayer] = useState(1)

  function move(columnID) {
    console.log('Игрок ' + player + ' сделал ход в колонку ' + (columnID + 1))
    const newField = [...field]
    const firstNotNull = () => {
      for (let i = 0; i < newField[columnID].length; i++) {
      if (newField[columnID][i] === null) {
        return i;
      } 
    }
    }
    newField[columnID][firstNotNull()] = player;
    console.log('after', newField)
    setField(newField)
    setPlayer(player === 1 ? 2 : 1)
      return (
        <Redirect to={{pathname: '/'}} />
      )
  }

  if (!props.location.state) {
    return (
      <Redirect to='/'/>
    )
  }

  return <div className="game">
    <p>{props.location.state.playerOneName}</p>
    vs
    <p>{props.location.state.playerTwoName}</p>
    <Field field={field}
      onColumnClick={move}
    />
    <Link to='/#' className="game__button-back">End game</Link>
  </div>
}