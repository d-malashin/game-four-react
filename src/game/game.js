import React, { useState, useEffect } from 'react';
import { Field } from '../field';
import { Link, Redirect } from 'react-router-dom';
import axios from 'axios';

export default function Game(props) {
  const [field, setField] = useState([])
  const [player, setPlayer] = useState(1)

  useEffect(function () {
    setInterval(
      function () {
        axios.get('http://localhost:5000').then(function (response) {
          setField(response.data.gameField);
        })
      },
      2000
    )
  }, []);

  function move(columnID) {
    axios.post('http://localhost:5000/move', { columnID: columnID }).then(function (response) {
      setField(response.data.gameField)
    })
    setPlayer(player === 1 ? 2 : 1)
  }

  if (!props.location.state) {
    return (
      <Redirect to='/' />
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

// if column has 4 cells in a row -> winner = cell value
// if field[n][i] === field[n + 1][i] 4 times -> winner = cell value
// if field[n][i] === field[n + 1][i + 1] or field[n][i] === field[n + 1][i - 1] -> winner = cell value

// const winnerCheck = (columnID) => {

//   for (let i = 0; i < field[columnID].length; i++) {
//     if (field[columnID][i] !== null &&
//       field[columnID][i] === field[columnID][i + 1] &&
//       field[columnID][i] === field[columnID][i + 2] &&
//       field[columnID][i] === field[columnID][i + 3]) {
//       alert(`Player ${player} wins!`)
//       return player
//     } console.log('still no winner')
//   }
// }