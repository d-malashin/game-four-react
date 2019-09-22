import React from 'react';
import Cell from '../cell';
import './column.css';

export default function Column (props) {
    let result = [];
    for (let i = 0; i < 6; i++) {
        result.splice(i, 0, <Cell value={props.data[i]} key={i} />)
    };
    return <div className="game-field__column">
        {result}
    </div>;

    // return <div className="game-field__column">
    //     <Cell value={props.data[0]} />
    //     <Cell value={props.data[1]} />
    //     <Cell value={props.data[2]} />
    //     <Cell value={props.data[3]} />
    //     <Cell value={props.data[4]} />
    //     <Cell value={props.data[5]} />
    //     </div>
};