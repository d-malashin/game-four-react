import React, { useState } from 'react';
import { Field } from '../field';

export default function Game() {
  const [field, setField] = useState(new Array(7).fill(new Array(6).fill(null)));
  const [player, setPlayer] = useState(1);

  function move (columnID) {
    console.log(`Игрок ${player} сходил в колонку ${columnID + 1}`);
    const newField = [...field];
    newField[columnID] = Array(6).fill(player);
    setField(newField);
    setPlayer(player === 1? 2 : 1);
  }



  return <div>
    <Field field={field} 
    onColumnClick={move}/>
  </div>;
};