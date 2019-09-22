import React from 'react';
import Column from '../column';
import './field.css'

export default function Field (props) {
    let result = [];
    for (let i = 0; i < 7; i++) {
        result.splice(i, 0, <Column data={props.field[i]} key={i} />)
        console.log(props.field[i]);
    };
    return <div className="app__wrapper">
        <div className="game-field" >{result}</div>
    </div>;
};