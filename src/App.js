import React, { useState } from 'react';
import { Field } from './field';
import './App.css';

function App() {
  const [field, setField] = useState(new Array(7).fill(new Array(6).fill(null)));
  const [player, setPlayer] = useState(1);

  function move(columnID) {
    console.log('Игрок ' + player + ' сделал ход в колонку ' + (columnID + 1));
    const newField = [...field];
    console.log(columnID);
    newField[columnID] = Array(6).fill(player);
    setField(newField);
    setPlayer(player === 1? 2 : 1);
    console.log(player);
  }

  return <div>
    <Field field={field} 
    onColumnClick={move}
    />
  </div>;
};
export default App;
