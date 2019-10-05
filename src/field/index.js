import React from 'react';
import { Column } from '../column';
import './field.css'

export const Field = (props) => {
  const field = props.field
  return (
    <div className="game-field">
      {field.map((column, index) => (
        <Column data={column}
          key={index}
          onPress={props.onColumnClick}
          columnID={index}
        />
      ))}</div>
  )
}