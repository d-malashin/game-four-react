import React, { useState, useEffect } from "react";
import { Field } from "../field";
import { Link, Redirect } from "react-router-dom";
import axios from "axios";
import './game.css'

export default function Game(props) {
  const [field, setField] = useState([]);
  const [player, setPlayer] = useState(1);

  useEffect(function () {
    setInterval(function () {
      axios.get("http://localhost:3001/game-field").then(function (response) {
        setField(response.data);
      });
    }, 2000);
  }, []);

  function move(columnID) {
    axios
      .post(`http://localhost:3001/move?column=${columnID}`)
      .then(function (response) {
        setField(response.data.field);
        response.data.currentPlayer === 2 ? setPlayer(1) : setPlayer(2)
        if (response.data.winner) {
          alert(`Player ${response.data.winner} wins`);
          restart();
        }
      });
  }

  function restart() {
    axios.post(`http://localhost:3001/restart`).then(response => {
      setField(response.data.field);
      response.data.currentPlayer === 2 ? setPlayer(1) : setPlayer(2)
    });
  }

  if (!props.location.state) {
    return <Redirect to="/" />;
  }
  return (
    <div className="game">
      <p className="game__players players">
        <span className="players__player--one">{props.location.state.playerOneName} </span>
        <span>vs </span>
        <span className="players__player--two">{props.location.state.playerTwoName}</span>
      </p>
      <p className="game__current-player">Current player: {player}</p>
      <Field field={field} onColumnClick={move} />
      <Link to="/#" className="game__button button button--back">
        End game
      </Link>
      <button
        onClick={restart}
        type="button"
        className="game__button button button--restart"
      >
        Restart
      </button>
    </div>
  );
}
