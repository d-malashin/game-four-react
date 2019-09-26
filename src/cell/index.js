import React from 'react';
import './cell.css';

let playerOneStyle = {
    backgroundColor: 'red'
};

let playerTwoStyle = {
    backgroundColor: 'yellow'
};

export const Cell = (props) => {
// (
//         <span>{props.value}</span>
//     )
    if (props.value === 1) {
        return <span style={playerOneStyle} className="game-field__cell">{props.value}</span>
    } else if (props.value === 2){
        return <span style={playerTwoStyle} className="game-field__cell">{props.value}</span>
    } else return <span className="game-field__cell">{props.value}</span>
}